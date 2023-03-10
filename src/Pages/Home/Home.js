import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { TypeAnimation } from 'react-type-animation';
import Features from "../Features/Features";
import Portfolio from "../Portfolio/Portfolio";
import Resume from "../Resume/Resume";
import Layout from "../../Utils/Layout";
import { BrowserRouter, Route, Routes ,Link} from "react-router-dom";
import resume from "../../Assets/resume.pdf"
function Home() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);
  
  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);
  return (
    <>
    <BrowserRouter>
    <Layout>
         <div id={"home"} className='home-name'>
        <h1>Harish arasu</h1>
        <h6> Im a </h6>
        <TypeAnimation
        
      sequence={[
        'Im a React native developer', // Types 'One'
        2000, // Waits 1s
        // Deletes 'One' and types 'Two'
    
        'Im a React js developer', 
        4000,// Types 'Three' without deleting 'Two'
        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em',color: "#FF014F" }}
    />
    <div  className="home-button">
    <a href={resume} style={{color:"#fff",textDecoration:"none"}}   target={"_blank"}>Resume</a>
   
    </div>




      </div>
      <Link to={"#"}>
      <Features></Features>
      </Link>
      
    <Portfolio />
    <Resume />
    </Layout>
    </BrowserRouter>
  
  
    </>
  )
}

export default Home