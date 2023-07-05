import React from 'react'
import './post.css'

const Post = () => {
  return (
    <div className="post">
      <img src="https://substack-post-media.s3.amazonaws.com/public/images/1c63571b-246b-49f9-834f-afd4f9d709ab_512x512" alt="" />
      <div className="texts">
    <h2>"Nigeria's Youth Confront Growing Housing Crisis: Challenges and Solutions"</h2>
    <p className="info">
        <a className="author">Sodiq Baki</a>
        <time>2023-05-07 5:09  |  10 min read</time>
    </p>
    <p className='summary'>As Nigeria's youthful population continues to expand, a pressing issue looms large on the horizon: the growing housing crisis faced by the country's young people. With limited access  🤔</p>
    </div>
      </div>
  )
}

export default Post