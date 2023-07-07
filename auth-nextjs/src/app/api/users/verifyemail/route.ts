import { dbConnect } from '@/dbConfig/dbConfig';
import { NextRequest, NextResponse } from 'next/server';
import { User } from '@/models/user.model';
import httpStatus from 'http-status';

dbConnect(); // NOTE: Connected with Database

export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();
    console.log({ reqBody });
    const { accessToken } = reqBody; //or token
    console.log({ accessToken });

    const user = await User.findOne({
      verifyToken: accessToken,
      verifyTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json({
        message: 'Invalid token',
        statusCode: httpStatus.BAD_REQUEST,
      });
    }
    console.log(user);

    user.isVerified = true;
    user.verifyToken = undefined;
    user.verifyTokenExpiry = undefined;
    await user.save();

    return NextResponse.json({
      success: true,
      message: 'Email verified successfully',
    });
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
      statusCode: httpStatus.BAD_REQUEST,
    });
  }
};
