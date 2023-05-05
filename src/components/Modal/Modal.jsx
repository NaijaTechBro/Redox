import React from 'react'
import cancel from '../../assets/cancelicon.png'
import './modal.css'

import { useState } from 'react'

const Modal = (props) => {
  return (
    <div id="modal">
      <div id="modal-top">
        <div>
          <img
            src={cancel}
            alt=""
            width={34}
            height={34}
            onClick={props.closeModal}
          />
        </div>
        <section id="modal-img-sect">
          <img href="https://res.cloudinary.com/dkcazf954/image/upload/v1682880617/redox-mockup_foog8w.png" alt="" width={84.55} height={232.29} id="phone2" />
        </section>
      </div>
      <div id="modal-bottom">
        <h2>Thank You!</h2>
        <p>
          For joining our waitlist. Would you like us to send you regular
          updates on key features added?
        </p>
        <div>
          <button onClick={props.closeModal} className="modal-btn1">
            Yes do
          </button>
          <button onClick={props.closeModal} className="modal-btn2">
            No, don't
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal