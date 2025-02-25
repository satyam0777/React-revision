import React from 'react';

const PostDetail = ({ post }) => {
  if (!post) return <div>Post not found</div>;

  return (
    <div className="post-detail">
    <h1>{post.title}</h1>
    <p>{post.content}</p>
  </div>
   
  );
};

export default PostDetail;