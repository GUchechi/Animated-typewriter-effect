import React, { useState } from 'react'
import Typewriter from 'typewriter-effect';
import './Home.css'

const Home = () => {
    const [state] = useState({
        title: 'Hi,',
        titleTwo: "I'm,",
        titleThree: "Godswill Uchechi",
    })


  return (
    <div className='home'>
        <div className='home-intro'>
            <h2>
                <div className='title'>{state.title}</div>
                <div className='titleTwo'>{state.titleTwo}</div>
                <div className='titleThree'>{state.titleThree}</div>
            </h2>
            <div className='text'>
                <Typewriter 
                    options={{
                        autoStart: true,
                        loop: true,
                        delay:40,
                        strings: [
                            "I'm a Frontend Developer",
                            "I love React Js",
                            "I'm a Tech Enthusiast"
                        ],
                    }}/>
            </div>
            <div className="contact-me">
                <button className='button'>Contact me!</button>
            </div>
        </div>
        <div className="home-image">
            <img className='my-image' src={require("../../img/Uche.jpg")} alt="Godswill" />
        </div>
    </div>
  )
}

export default Home