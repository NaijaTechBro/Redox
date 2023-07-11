import React from "react";
import ReactQuill, { Quill } from "react-quill";
import { SketchPicker } from 'react-color';
import "react-quill/dist/quill.snow.css";

import "../post.css";

const Divider = Quill.import('blots/block');
Divider.tagName = 'hr';
Quill.register(Divider);

const ColorPicker = Quill.import('ui/color-picker');
class CustomColorPicker extends ColorPicker {
  constructor(options) {
    super(options);
    this.container.classList.add('custom-color-picker');
  }
}
Quill.register(CustomColorPicker, true);

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
        placeholder="Write a blog today..."
        bounds=".custom-color-picker"
        style={{ zIndex: '9999' }}
        components={{
          ColorPicker: CustomColorPicker,
        }}
        renderColorPicker={(props) => <SketchPicker {...props} />}
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
    ["bold", "italic", "underline", "strike", "divier", "blockquote"],
    ['link', 'image', 'video'],
    ['blockquote', 'code-block'],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    [{ script: 'sub' }, { script: 'super' }],
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
  "divider",
  "image",
  "code-block",
  "align",
];

export default PostForm;