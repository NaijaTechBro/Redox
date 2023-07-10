const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Simulating API request delay
const apiDelay = 1000;

const posts = [
  {
    id: 1,
    title: 'First Blog Post',
    content: '<p>This is the content of the first blog post.</p>',
  },
  {
    id: 2,
    title: 'Second Blog Post',
    content: '<p>This is the content of the second blog post.</p>',
  },
];

// Fetch all blog posts
export const fetchPosts = async () => {
  await delay(apiDelay);
  return posts;
};

// Save a new blog post
export const savePost = async (post) => {
  await delay(apiDelay);
  const newPost = {
    id: Date.now(),
    ...post,
  };
  posts.push(newPost);
  return newPost;
};
