import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { Newsletter, reset } from '../../redux/features/newsletter/newsletterSlice'
import './hero.css'
import Loading from '../Loader/Loader'
import Modal from '../Modal/Modal'

import { useState } from 'react'

const Hero = () => {
  const [getModal, setGetModal] = useState(false)

  const [newsletter, setNewsletter] = useState('')
  const [isOpen, setisOpen] = useState(false)
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const { isLoading } = useSelector((state) => state.newsletter)

  const header = async (e) => {
    e.preventDefault()
    if(!email) {
      return toast.error('Please enter your email')
    }

    const userData = {
      email,
    }

    await dispatch(Newsletter(userData))
    await dispatch(reset())
  }

  // if (isLoading) {
  //   return <Loading />
  // }

  return (
    <div className="section">
      {isLoading && <Loading />}
      <div className="left">
        <h1>Get Smarter with Financial Education</h1>
          <p>We provide Market Intelligence, Research and analysis on the Future of money and the Economy in Africa.
          </p>
                <form onSubmit={header}>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='    Enter Email Address'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button onClick={() => setGetModal(!getModal)}>Join <span className='desktop'>Free</span>{' '}
                    </button>
                </form>
                <p>Join over 2k+ readers. 100% free, unsubscribe anytime.</p>
            </div>
      <section className="right">
      <img src="https://res.cloudinary.com/dkcazf954/image/upload/v1682880617/redox-mockup_foog8w.png" />
      </section>
      {getModal && (
        <div>
          <Modal closeModal={() => setGetModal(false)} getModal={getModal} />
          </div>
      )}
    </div>
  )}

export default Hero