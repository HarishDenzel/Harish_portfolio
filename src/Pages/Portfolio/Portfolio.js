import React from 'react'
import justpayme from "../../Assets/justpayme.png"
import remco  from "../../Assets/Remco.png"
import krida from "../../Assets/Krida.webp"
import Layout from '../../Utils/Layout'

function Portfolio() {
  const data = [
    {
      id: 1,
      text: "1",
    },
    {
      id: 2,
      text: "1",
    },
    {
      id: 3,
      text: "1",
    },
  ];
  return (
   
  <div className='portfolio-con'>
      <div className="feadture-body">
      <div className="feature-con">
        <p style={{ color: "#a00" }}>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</p>
        <h1 style={{ color: "#fff" }}>My Portfolio </h1>
      </div>
      <div className="card-body">
        {data.map((e, i) => {
          return (
            <div className="card-feature">
              <div className="feature-icon">
             <img style={{height:"40%",width:"50%"}} src={i==0?justpayme:i==[2]?remco:krida}></img>
                
              </div>
              <p>
                I throw myself down among the tall grass by the stream as Ilie
                close to the earth.
              </p>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  
  
  )
}

export default Portfolio