import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Card from "./postCard";

import "../post.css";

const PostForm = ({
  post,
  postImage,
  imagePreview,
  content,
  setContent,
  handleInputChange,
  handleImageChange,
  savePost,
}) => {
  return (
    <div className="create">
        <form className="form-group" onSubmit={savePost}>
          {/* <Card cardClass={"group"}>
            <label>Post Image</label>
            <code className="--color-dark">
              Supported Formats: jpg, jpeg, png
            </code>
            <input
              type="file"
              name="image"
              onChange={(e) => handleImageChange(e)}
            />

            {imagePreview != null ? (
              <div className="image-preview">
                <img src={imagePreview} alt="post" />
              </div>
            ) : (
              <p>No image set for this poduct.</p>
            )}
          </Card> */}
          <div className="form-group">
          <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          value={post?.title}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="summary">Summary:</label>
        <textarea
          name="summary"
          value={post?.summary}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="category">Category:</label>
        <textarea
          name="category"
          value={post?.category}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image:</label>
        <input type="file" id="image" onChange={handleImageChange} />
      </div>
      <div className="form-group">
        <label htmlFor="content">Content:</label>
        <ReactQuill
        theme="snow"
        value={content}
        onChange={setContent}
        modules={PostForm.modules}
        formats={PostForm.formats}
        />
      </div>
      <button type="submit" >Create Post</button>
    </form>
    </div>
  );
};

PostForm.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["clean"],
  ],
};
PostForm.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "color",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "video",
  "image",
  "code-block",
  "align",
];

export default PostForm;