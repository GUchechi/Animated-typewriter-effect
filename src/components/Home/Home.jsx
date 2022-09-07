import React, { useState } from 'react'
import Typewriter from 'typewriter-effect';
import './Home.css'

const Home = () => {
    const [state] = useState({
        title: 'Hi,',
        titleTwo: "I'm",
        titleThree: "Godswill Uchechi",
        image: ""
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
        </div>
    </div>
  )
}

export default Home