import React from 'react'
import '../post.css'



const PostCard = ({
    id,
    image = '"https://substack-post-media.s3.amazonaws.com/public/images/1c63571b-246b-49f9-834f-afd4f9d709ab_512x512"',
    header = "'Nigeria's Youth Confront Growing Housing Crisis: Challenges and Solutions'",
    time = '2023-05-07 5:09',
    min = '10 min read',
    author = 'Sodiq Baki',
    link = 'https://insideredox.substack.com/p/kenyan-president-williams-ruto-calls',
    summary = "As Nigeria's youthful population continues to expand, a pressing issue looms large on the horizon: the growing housing crisis faced by the country's young people. With limited access  🤔",
}) => {
  return (
    <div className="post" id={`post-${id}`}>
      <img src={image} alt="image-blog" />
      <div className="texts">
      <a href={link}>
    <h2>{header}</h2>
    <p className="info">
        <a className="author">{author}</a>
        <time>{time}  |  {min}</time>
    </p>
    <p className='summary'>{summary}</p>
    </a>
    </div>
      </div>
  )
}

export default PostCard;








