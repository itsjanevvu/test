
import React from "react"

import Typewriter from 'typewriter-effect';

export default function Intro (){

    let word = "designer"



    return(
        <section className = "red-bg">
            <div className = "split">

                <div className = "intro-text">
                    <h1>Hello I'm Jane,</h1>

                    <div className = "typewriter">
                    <Typewriter
                        options={{
                      strings: ['a UX Designer', 'an Engineer', 'a Student','a Volunteer' ,'a Dog-mom'],
                         autoStart: true,
                        loop: true,
                    }} />

                    </div>
                   
                   

                    <div className = "intro-buttons">
                       
                       

                       <a href= "https://www.linkedin.com/in/jane-wu-1551a61b6/">
                        
                       <button className="btn" type = "click">let's chat</button>

                       </a>


                       <a className= "gradient-bg" href= "https://drive.google.com/file/d/1Pqs_HhOdH0GzoSyfLi4GrqGlQAzPxMe_/view?usp=sharing">
                        <button className="btn resume" type = "click">Resume pdf</button>
                        </a>
                    </div>
            
                </div>

                <div>
                < img className = "container" src = "./memojis/image4.png"></img>
                </div>
             

            </div>
        </section>
    )
}