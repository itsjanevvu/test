
// import './App.css';

 import Typewriter from 'typewriter-effect';
 import { motion, AnimatePresence } from "framer-motion"



import Navbar from "./components/Navbar"
import Intro from "./components/Intro"
import Projects from "./components/Projects"
import End from './components/End'
import Skills from "./components/Skills"
import Aboutme from "./components/Goodbye"
import Footer from "./components/Footer"




const projectlist = [

  {
      title: "JiSA Design",

      type: "Founder",

      description: "Created branding and packaging designs for 15+ indie beauty brands",

      btntext: "view designs",

      displayimg: "./projectlogos/jisa.png",

      btnlink: "https://www.behance.net/janewu21"


  },

  {
      title: "Advice to a Scientist",

      type: "Internship",

      description: "Democratizing access to scientific resources for STEM students",

      btntext: "view case study",

      displayimg: "./projectlogos/atas.png",

      btnlink: "https://www.behance.net/gallery/148259949/Advice-to-a-Scientist"


  }, {
      title: "Memorii",
      type: "Designathon",
      description: "Helping student alumni stay in touch",
      btntext: "view case study",
      displayimg: "./projectlogos/memorii.png",
      btnlink:"https://www.behance.net/gallery/148259949/Advice-to-a-Scientist"

  }






]




export default function App() {

  const cards = projectlist.map(item => {
    return (
        <Projects
            title={item.title}
            type={item.type}
    
            description={item.description}
            btntext={item.btntext}
            img={item.displayimg}
            link = {item.btnlink}
        />
    )
}) 




  return (
    <div className="App">


{/* <motion.div

initial={{opacity: 0}}

animate = {{opacity:1}}

transition ={{
  duration: 3


}} */}




    
    
      
       <Navbar/>
       <Intro/>

                      
<motion.div initial={{opacity: 0}} animate = {{opacity:1}} transition ={{ duration: 3}}>
        
        <div id= "Aboutme">
        <Aboutme/>
        </div>
       

       </motion.div>
    

       <Skills/>

    

    <div id ="Projects">
        <div className= "projects-title">
          <h2>Projects</h2>
        </div>
      
        {cards}

        </div>

        <End/>

      


        

        <Footer/>


     
   

    </div>
  );
}





