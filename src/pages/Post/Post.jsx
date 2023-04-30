import React from 'react'
import './post.css'

const Post = () => {
  return (
    <div className="post">
      <img src="https://www.thedefiedge.com/content/images/size/w960/2023/04/Frame-17-1.png" alt="" />
      <div className="texts">
    <h2>The rise of a new meme coin</h2>
    <p className="info">
        <a className="author">Sodiq Baki</a>
        <time>2023-04-27 7:09  |  11 min read</time>
    </p>
    <p className='summary'>On April 18th, Gary Gensler testified before the House Financial Services Committee. And Crypto Twitter had a field day.
        Who is Gary Gensler? The SEC’s current chairman.  🤔</p>
    </div>
      </div>
  )
}

export default Post