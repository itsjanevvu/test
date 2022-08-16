import React from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Projects (props){
    return(
       


        <motion.div
        className="box"   whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >

            <div className ="card split" >




            { <img src= {props.img} ></img> }

            {/* <img className = "logo-img" src= "./projectlogos/jisa.png"></img> */}

            <div className = "card-text">


                <div>
                    <h4>{props.type}</h4>
                    <h1 className = "card-title">{props.title}</h1>
                </div>

                <div>
                    <h3>{props.description}</h3>
                 
                </div>

                <div>



                <motion.div
      className="box"   whileHover={{ scale: 1.005 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
    >


                    <a href= {props.link}>
                    <button>{props.btntext}</button>
                    </a>

                    </motion.div>
                   

                </div>


            </div>
        


        </div>

        </motion.div>
    )
}