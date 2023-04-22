import React, { useContext, useRef, useState } from "react";
import "./Contacts.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm(
        'service_4kxrlqh',
        "template_ulwvv8m",
        form.current,
        "-u9NsPW-MA3wlH_B3"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.current.reset();
          Array.from(form.current.elements).forEach(element => {
            if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
              element.placeholder = element.name.charAt(0).toUpperCase() + element.name.slice(1);
              element.value = "";
            }
          });
          const button = form.current.querySelector("input[type='submit']");
          button.disabled = true;
          button.value = "Sending...";
          setTimeout(() => {
            button.value = "Send";
            button.disabled = false;
          }, 3000); 
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  
  

  return (
    <div className="contact-form" id="contact">
      <div className="w-left">
        <div className="awesome">
          <span style={{color:darkMode?'white':''}}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "var(--purple)",left:'-5rem',top:'90%'}}
          ></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="Name" className="user"  placeholder="Name"/>
          <input type="email" name="Email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for Contacting me!"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "#ABF1FF94",left:'25rem',bottom:'4rem'}}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;