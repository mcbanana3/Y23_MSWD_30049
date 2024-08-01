import React from 'react'
import KL_Logo from './Images/KL_Logo.png'
import './Header.css'

const user ={
    l1 : KL_Logo
}

function Header() {
  return (
    <div className="Header">
        <img className = "Image" src = {user.l1} alt="Image1"/>
        <h1 className="Heading">KL University</h1>
    </div>
  )
}

export default Header