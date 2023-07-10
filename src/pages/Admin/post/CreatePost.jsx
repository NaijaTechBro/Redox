import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPost, reset } from '../../../redux/features/post/postsSlice';
import Loading from '../../../components/Loader/Loader';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './createpost.css';
import PostForm from '../../Post/component/PostForm';


const initialState = {
  title: "",
  summary: "",
  category: "",
  content: "",
};


const Write = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [post, setPost] = useState(initialState);
  const [postImage, setPostImage] = useState(null);
  const [imagePreview, setImagePreview]= useState('');
  const [content, setContent] = useState('')



  const { isSuccess, isLoading, isLoggedIn, message, isError, twoFactor } = useSelector(
    (state) => state.posts
    );

const { title, summary, category } = post;


const handleInputChange = (e) => {
  const { name, value } = e.target;
  setPost({ ...post, [name]: value })
}

  const handleImageChange = (event) => {
    setPostImage(event.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };


  const savePost = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("summary", summary);
    formData.append("category", category);
    formData.append("content", content);
    formData.append("image", postImage);

    await dispatch(createPost(formData));

    navigate("/admin/dashboard")
  };

  return (
    <div>
      {isLoading && <Loading />}
      <h3>Write a Blog Post</h3>
      <PostForm
      post={post}
      postImage={postImage}
      imagePreview={imagePreview}
      content={content}
      setContent={setContent}
      handleInputChange={handleInputChange}
      handleImageChange={handleImageChange}
      savePost={savePost}
      />
    </div>

  );
}

export default Write;