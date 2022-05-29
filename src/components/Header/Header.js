import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='nav-bar'>
     <a className='logo' href='/'><i class="bi bi-person-circle"></i></a>
     <ul>
       <li><a href='https://www.github.com/sainingo'><i class="bi bi-github"></i></a></li>
       <li><a href='https://www.linkedin.com/in/sainingo/'><i class="bi bi-linkedin"></i></a></li>
       <li><a href='twitter.com/saningoInn'><i class="bi bi-twitter"></i></a></li>
     </ul>
    </div>
  )
}

export default Header