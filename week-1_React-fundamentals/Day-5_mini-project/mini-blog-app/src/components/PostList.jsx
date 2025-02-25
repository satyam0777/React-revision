import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts }) => {
  return (
    <div className="post-list">
    <h1>Blog Posts</h1>
    {posts.map((post) => (
      <div key={post.id} className="post-item">
        <h2>
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </h2>
        <p>{post.content.substring(0, 100)}...</p>
      </div>
    ))}
  </div>
  );
};

export default PostList;