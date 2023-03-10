import React from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { TypeAnimation } from "react-type-animation";
import Features from "../Pages/Features/Features";
import Portfolio from "../Pages/Portfolio/Portfolio";
import { BiBookmarkPlus } from "react-icons/bi";
import { FiHome, FiBriefcase } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
export default function Layout(props) {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  
  return (
    <div className="home-con">
      <Particles
        className="particals-body"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "rgb(0 0 0 / 45%)",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="home-left">
  
        <div className="sidebar-con">
          <div className="sidebar-img">
            <img
              class="dark-logo"
              src="https://rainbowit.net/themes/inbio/wp-content/themes/inbio/assets/images/logo/logo-06.png"
              alt="InBio"
            />
          </div>

          <ul>
            <Link to={"/home"}>
              <li className="sidebar-item">
                <FiHome style={{ paddingRight: "12px" }} color="#fff" />
                <span style={{ color: "#ffff" }}>HOME</span>
              </li>
            </Link>

            <Link to={"/feature"}>
              <li className="sidebar-item">
                <FiBriefcase style={{ paddingRight: "12px" }} color="#fff" />
                <span style={{ color: "#ffff" }}>FEATURE</span>
              </li>
            </Link>
            <Link to={"/portfolio"}>
              <li className="sidebar-item">
                <BiBookmarkPlus style={{ paddingRight: "12px" }} color="#fff" />
                <span style={{ color: "#ffff" }}>PORTFOLIO</span>
              </li>
            </Link>
            <Link to={"/resume"}>
              <li className="sidebar-item">
                <IoDocumentTextOutline
                  style={{ paddingRight: "12px" }}
                  color="#fff"
                />
                <span style={{ color: "#ffff" }}>RESUME</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="home-right">
        {props.children}
        {/*   
     
      <Features />
<Portfolio /> */}
      </div>
    </div>
  );
}
