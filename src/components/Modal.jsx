import React from 'react'
import { ImCross } from "react-icons/im";

const Modal = ({setModal}) => {
  return (
    <div className='modal-new'>
      <div className="newsletter">
        <div className="content">
            <ImCross onClick={() => setModal(false)}/>
            <h2>Newsletter</h2>
            <p>Join our mailing list to receive updates on new arrivals and special offers.</p>
            <p><input type="text" placeholder='Enter e-mail'/></p>
            <button onClick={() => setModal(false)}>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
