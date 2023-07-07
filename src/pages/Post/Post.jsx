import React from 'react';
import PostCard from './component/card'
import Logo from '../../assets/redoxlogo.png'

const Post = () => {
  return (
    <>
    <div className="card-container">
      <PostCard
              id={2}
              image = 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb2f8b0b3-4e00-427e-beb2-ca8b851be7fa_4357x2905.jpeg'
              header = "KENYAN PRESIDENT WILLIAMS RUTO, CALLS FOR AFRICAN COUNTRIES TO SHIFT FROM USING US DOLLAR TO SETTLE INTRA-CONTINENTAL TRADE"
              time = '2023-06-07 11:59'
              min = '7 min read'
              author = 'InsideRedox'
              link = 'https://insideredox.substack.com/p/kenyan-president-williams-ruto-calls'
              summary = "In a move that could potentially reshape Africa's economic landscape, the President of Kenya William Ruto during his address at the Djibouti"  
      />
      <PostCard
              id={1}
              image = 'https://substack-post-media.s3.amazonaws.com/public/images/1c63571b-246b-49f9-834f-afd4f9d709ab_512x512'
              header = "'Nigeria's Youth Confront Growing Housing Crisis: Challenges and Solutions'"
              time = '2023-06-07 5:09'
              min = '10 min read'
              author = 'InsideRedox'
              link = 'https://insideredox.substack.com/p/nigerias-youth-confront-growing-housing'
              summary = "As Nigeria's youthful population continues to expand, a pressing issue looms large on the horizon: the growing housing crisis faced by the country's young people. With limited access  🤔"
     />

      {/* <PostCard
        id={3}
        image = '"https://substack-post-media.s3.amazonaws.com/public/images/1c63571b-246b-49f9-834f-afd4f9d709ab_512x512"'
        header = "'Nigeria's Youth Confront Growing Housing Crisis: Challenges and Solutions'"
        time = '2023-05-07 5:09'
        min = '10 min read'
        author = 'Sodiq Baki'
        summary = "As Nigeria's youthful population continues to expand, a pressing issue looms large on the horizon: the growing housing crisis faced by the country's young people. With limited access  🤔"
    
      />
      <PostCard
        id={4}
        image = '"https://substack-post-media.s3.amazonaws.com/public/images/1c63571b-246b-49f9-834f-afd4f9d709ab_512x512"'
        header = "'Nigeria's Youth Confront Growing Housing Crisis: Challenges and Solutions'"
        time = '2023-05-07 5:09'
        min = '10 min read'
        author = 'Sodiq Baki'
        summary = "As Nigeria's youthful population continues to expand, a pressing issue looms large on the horizon: the growing housing crisis faced by the country's young people. With limited access  🤔"
    
      />
      <PostCard
        id={5}
        image = '"https://substack-post-media.s3.amazonaws.com/public/images/1c63571b-246b-49f9-834f-afd4f9d709ab_512x512"'
        header = "'Nigeria's Youth Confront Growing Housing Crisis: Challenges and Solutions'"
        time = '2023-05-07 5:09'
        min = '10 min read'
        author = 'Sodiq Baki'
        summary = "As Nigeria's youthful population continues to expand, a pressing issue looms large on the horizon: the growing housing crisis faced by the country's young people. With limited access  🤔"
    
      /> */}
    </div>
    </>
  );
};

export default Post;



// import React from 'react'
// import './post.css'

// const PostCard = ({
//   id,
//   name = 'Default',

// })

// const Post = () => {
//   return (
//     <div className="post">
//       <img src="https://substack-post-media.s3.amazonaws.com/public/images/1c63571b-246b-49f9-834f-afd4f9d709ab_512x512" alt="" />
//       <div className="texts">
//     <h2>"Nigeria's Youth Confront Growing Housing Crisis: Challenges and Solutions"</h2>
//     <p className="info">
//         <a className="author">Sodiq Baki</a>
//         <time>2023-05-07 5:09  |  10 min read</time>
//     </p>
//     <p className='summary'>As Nigeria's youthful population continues to expand, a pressing issue looms large on the horizon: the growing housing crisis faced by the country's young people. With limited access  🤔</p>
//     </div>
//       </div>
//   )
// }

// export default Post