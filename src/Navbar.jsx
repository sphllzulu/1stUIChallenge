import './Navbar.css'

// import React from 'react'

 const Navbar = () => {
  return (
    
      <nav className="navbar">
        <div className="navbar-logo">
        <img className='clover' src="clover.png" alt="" style={{ width: '30px', height: '20px' }}/>
          <a href="/">Minds</a>
        </div>
        <ul className="navbar-list">
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Blog</a></li>
          <li><a href="#contact">Jobs</a></li>
        </ul>
        <div className="navbar-button">
          <button>Your account</button>
        </div>
      </nav>

    
  )
}
export default  Navbar;