import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './createpost.css';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [image, setImage] = useState(null);
  const [category, setCategory]= useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSummaryChange = (event) => {
    setSummary(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // send blog post data to server
  };

  return (
    <div className='create'>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="summary">Summary:</label>
        <textarea
          id="summary"
          value={summary}
          onChange={handleSummaryChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="category">Category:</label>
        <textarea
          id="category"
          value={category}
          onChange={handleCategoryChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image:</label>
        <input type="file" id="image" onChange={handleImageChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="content">Content:</label>
        <ReactQuill value={content} onChange={handleContentChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>

  );
}

export default CreatePost;