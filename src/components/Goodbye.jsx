import React from "react"
import { motion } from "framer-motion"

export default function Aboutme (){
    return(






        <section className = "aboutme-bg">
            <div className = "split">




                <div>
                    <img className = "responsive" src = "./memojis/image0.png"></img>

                </div>

                <div className = "intro">
                    <h2 className = "intro-title">About me</h2>
                    <h3 className = "intro-subtitle">An engineering student with a background in <span className= "design">design</span></h3>


                    <div className= "aboutmedescrip">
                        <h4>I am a first year systems design engineering student at UWaterloo with an interest in healthcare, creative design, and anime. Combining both my technical and design skills, I create human centered solutions around problems</h4>
                        <h4>.</h4>
                </div>
                

                </div>

                

             

            </div>
        </section>
    )
}