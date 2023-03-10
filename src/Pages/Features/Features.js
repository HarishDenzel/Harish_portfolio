import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Layout from "../../Utils/Layout";

function Features() {
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
   
 <div className="feadture-body">
      <div className="feature-con">
        <p style={{ color: "#a00" }}>FEATURES</p>
        <h1 style={{ color: "#fff" }}>What I Do </h1>
      </div>
      <div className="card-body">
        {data.map((e, i) => {
          return (
            <div className="card-feature">
              <div className="feature-icon">
                <AiOutlineMenu size={"29px"} style={{ color: "red" }} />
              </div>
              <h2>{"Business Stratagy"}</h2>
              <p>
                I throw myself down among the tall grass by the stream as Ilie
                close to the earth.
              </p>
            </div>
          );
        })}
      </div>
    </div>
    
   
  );
}

export default Features;
