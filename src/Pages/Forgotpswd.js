import React from 'react'
import './forgotpswd.css';
const Forgotpswd = () => {
  return (
    <div className="card">
    <p className="lock-icon"><i className="fas fa-lock"></i></p>
    <h2>Forgot Password?</h2>
    <p>You can reset your Password here</p>
    <input type="text" className="passInput" placeholder="Email address"/>
    <button>Send My Password</button>
</div>
  )
}

export default Forgotpswd