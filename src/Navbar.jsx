// import './Navbar.css'

// // import React from 'react'

//  const Navbar = () => {
//   return (
    
//       <nav className="navbar">
//         <div className="navbar-logo">
//         <img className='clover' src="clover.png" alt="" style={{ width: '30px', height: '20px' }}/>
//           <a href="/">Minds</a>
//         </div>
//         <ul className="navbar-list">
//           <li><a href="#home" className="active">Home</a></li>
//           <li><a href="#about">About</a></li>
//           <li><a href="#services">Blog</a></li>
//           <li><a href="#contact">Jobs</a></li>
//         </ul>
//         <div className="navbar-button">
//           <button>Your account</button>
//         </div>
//       </nav>

    
//   )
// }
// export default  Navbar;


import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img className='clover' src="clover.png" alt="clover logo" style={{ width: '30px', height: '20px' }} />
        <a href="/">Minds</a>
      </div>
      <div className={`navbar-list ${isOpen ? 'open' : ''}`}>
        <li><a href="#home" className="active">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Blog</a></li>
        <li><a href="#contact">Jobs</a></li>
      </div>
      <div className="navbar-button">
        <button>Your account</button>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Navbar;
