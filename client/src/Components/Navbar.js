import React from 'react'
import './Navbar.css'
import logo from './Images/KL_Logo.png'
import student from './Images/Student.png'

const user = {
    l1 : logo,
    l2 : student,
}

function Navbar() {
  return (
    <div className="Nav">
        <img className = "KL_Logo" src = {user.l1} alt = "Image1"/>
        <h1 className = "ERP_Heading">Student Portal</h1>
        <h1 className = "ERP_Heading1">  -ERP</h1>
        <img className = "ERP_Profile" src = {user.l2} alt = "Image2"/>
        <h4 className = "ERP_Profile_heading">2300030049</h4>
    </div>
  )
}

export default Navbar