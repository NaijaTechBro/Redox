import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { savePostAsync } from './postsSlice';
import 'react-quill/dist/quill.snow.css';

const BlogPostEditor = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleSave = () => {
    if (title.trim() && content.trim()) {
      dispatch(savePostAsync({ title, content }));
      setTitle('');
      setContent('');
    }
  };

  return (
    <div>
      <h2>Write Blog Post</h2>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>Error: {error}</div>}
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={handleTitleChange} />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <ReactQuill value={content} onChange={handleContentChange} />
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default BlogPostEditor;
