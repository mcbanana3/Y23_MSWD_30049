import React from 'react'
import './HomePage.css'
import Jour from './Images/Journal.png'
import Ache from './Images/Ache.png'
import Guest from './Images/Guest.png'
import Innov from './Images/Innov.png'

const user ={
    pic1 : Jour,
    pic2 : Ache,
    pic3 : Guest,
    pic4 : Innov
}

function HomePage() {
  return (
    <div className="HomePage">
        <h3 className="WelcomeText">Welcome 2300030049</h3>
        <img className="Pic1" src = {user.pic1} alt = "Imaage1"/>
        <img className="Pic2" src = {user.pic2} alt = "Image2"/>
        <img className="Pic3" src = {user.pic3} alt="Image3"/>
        <img className="Pic4" src = {user.pic4} alt="Image4"/>
        <div className="TextBox">
          <div className="Text1">
            <h6>Journals & Conferences</h6>
          </div>
          <div className="Text2">
            <h6>Awards & Recognitions</h6>
          </div>
          <div className="Text3">
            <h6>Workshops,Seminars & Guest Lectures</h6>
          </div>
          <div className="Text4">
            <h6>Projects & Consultancy</h6>
          </div>
        </div>
    </div>
  )
}

export default HomePage