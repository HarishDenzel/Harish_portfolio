import React from "react";

import remco from "../../Assets/testimonials.jpg";
import emailjs from "@emailjs/browser";
function Resume() {
  const form = React.useRef();
  const _mailTrigger = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5zu6k3l",
        "template_zpb3mug",
        form.current,
        "pbIeVWbeioTxLa-F3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="resume-con">
      <div className="resume-row">
        <div className="resume-left">
          <h2>Contact</h2>
          <p>
            {
              "You'll called yielding male, so lights Stars aundantly ,is their "
            }
          </p>
          <h3>TamilNadu,India</h3>
          <h5>{"+91 9786759579"}</h5>
          <p>harish.arasu00@gmail.com</p>
        </div>
        <div className="resume-right">
          <h2>
            {"Let's grab a coffee and jump on conversation chat with me."}
          </h2>


          <form onSubmit={_mailTrigger} ref={form}>
            <input placeholder="Name" type={"text"} className="input"></input>
            <input
              placeholder="Mail Id"
              type={"text"}
              className="input"
            ></input>
            <textarea
              placeholder="Message"
              className="input input-message"
            ></textarea>

            <div className="home-button-resume">
              <button type="submit">{"CONTACT ME"}</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Resume;
