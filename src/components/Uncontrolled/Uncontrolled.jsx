import React, { useRef } from "react";  // Import useRef
import "./uncontrolled.css";

export default function UncontrolledComponent() {
  const firstnameRef = useRef(null);
  const lastnameRef = useRef(null);
  const emailRef = useRef(null);
  const portfoliowebsiteRef = useRef(null);
  const positionRef = useRef(null);
  const phoneRef = useRef(null);
  const relocateRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const firstname = firstnameRef.current.value;
    const lastname = lastnameRef.current.value;
    const email = emailRef.current.value;
    const portfoliowebsite = portfoliowebsiteRef.current.value;
    const position = positionRef.current.value; 
    const phone = phoneRef.current.value;
    const relocate = relocateRef.current.value;
    const message = messageRef.current.value;
    

    let alertMessage = `Firstname: ${firstname}\nLastname: ${lastname}\nEmail: ${email}\nPortfolio Website: ${portfoliowebsite}\nPosition: ${position}\nPhone: ${phone}\nRelocate: ${relocate}\nMessage: ${message}`;
    alert(alertMessage);
  };

  const handleReset = () => {
    firstnameRef.current.value = "";
    lastnameRef.current.value = "";
    emailRef.current.value = "";
    portfoliowebsiteRef.current.value = "";
    positionRef.current.value = "";
    phoneRef.current.value = "";
    relocateRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Firstname:
        <input type="text" ref={firstnameRef} />
      </label>
      <br />

      <label>
        Lastname:
        <input type="text" ref={lastnameRef} />
      </label>
      <br />

      <label>
        Email:
        <input type="email" ref={emailRef} placeholder="http://"/>
      </label>
      <br />

      <label>
        Portfolio Website:
        <input type="text" ref={portfoliowebsiteRef} />
      </label>
      <br />

      <label>
        Position:
        <select ref={positionRef}>
          <option value="" disabled>-- Select a Position --</option>
          <option value="securityAnalyst">Security Analyst</option>
          <option value="tester">Tester</option>
          <option value="softwareEngineer">Software Engineer</option>
          <option value="frontEndDeveloper">Front End Developer</option>
        </select>
      </label>
      <br />

      <label>
        Phone *(Must be 10 digits):
        <input type="number" ref={phoneRef} />
      </label>
      <br />

      <label>
        Are you willing to relocate?:
        <input type="radio" value = "Yes" ref={relocateRef} /> Yes
        <input type="radio" value = "No" ref={relocateRef} /> No
        <input type="radio" value = "NotSure" ref={relocateRef} /> Not Sure
        
      </label>
      <br />
    


      <label>
        Reference/ Comments/ Questions
        <input type="text" ref={messageRef} />
      </label>
      <br />

      
      <div className="button-group">
        <button type="submit">Send Application</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </form>
  );
}
