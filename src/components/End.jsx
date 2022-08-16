import React from "react"

export default function End (){
    console.log("End being called")
    return(

        // <section className = "end-bg">

        <section className = "aboutme-bg">
        <div className = "split">


            <div>
                <img className = "responsive" src = "./memojis/image5.png"></img>

            </div>

            <div className = "intro">
        
                <h3>Let's stay in touch</h3>


                <div className= "aboutmedescrip">
                    <h4>Thanks for reading! I'm always learning new things and exploring different internship opportunities. Chat with me about anything from UX Design to why dogs are superior to cats</h4>
                    
                    <a href= "https://drive.google.com/file/d/1Pqs_HhOdH0GzoSyfLi4GrqGlQAzPxMe_/view?usp=sharing">
                        <button className="chat" type = "click">let's chat</button>
                        </a>
                 
            </div>
            

            </div>
           

            

         

        </div>
    </section>
        

    )
}

