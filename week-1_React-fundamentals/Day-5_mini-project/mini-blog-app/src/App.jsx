import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import CreatePost from './components/CreatePost';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'First Post', content: 'This is the first post.' },
    
  ]);

  const addPost = (newPost) => {
    newPost.id = posts.length + 1;
    setPosts([...posts, newPost]);
  };

  const getPostById = (id) => {
    return posts.find(post => post.id === parseInt(id));
  };

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<PostList posts={posts} />} />
          <Route path="/post/:id" element={<PostDetail getPost={getPostById} />} />
          <Route path="/create" element={<CreatePost addPost={addPost} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;