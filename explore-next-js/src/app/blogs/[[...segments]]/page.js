import React from 'react';

const SingleBlog = ({ params }) => {
  const [year, id] = params.segments || [];
  console.log(params);

  return (
    <div>
      <h1>
        Single Blog: {year || new Date().getFullYear()} for {id}
      </h1>
    </div>
  );
};

export default SingleBlog;
