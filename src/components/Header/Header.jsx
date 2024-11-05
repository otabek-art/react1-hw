import React from 'react'
import './Header.scss'

const Header = () => {
  return (
 <>
  <header className="header">
    <div className="container">
        <div className="header__wrapper">
           <h4>Digital Agency</h4>
           
     <div className="header__menu">
     <p>home</p>
           <p>About</p>
           <p>Testimonials</p>
           <p>contact</p>
     </div>
        </div>
    </div>
  </header>
 </>
  )
}

export default Header