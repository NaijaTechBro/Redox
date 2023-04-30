import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <div className="section">
      <div className="left">
        <h1>Get Smarter with Financial Education</h1>
          <p>
            Get Weekly News, Insights and Research about Crypto, Economy and Financial knowledge.
          </p>
                <form>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='    Enter Email Address'
                  />
                  <button onClick={() => setGetModal(!getM
                    )}>Join <span className='desktop'>Free</span>{' '}
                    </button>
                </form>
                <p>Join over 2k+ readers. 100% free, unsubscribe anytime.</p>
            </div>
      <section className="right">
      <img src="https://www.thedefiedge.com/content/images/2022/08/defi-mobile.png" />
      </section>
    </div>
  )}

export default Hero