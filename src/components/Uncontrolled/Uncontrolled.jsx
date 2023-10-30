import React, { useRef } from "react";
import "./uncontrolled.css";

export default function UncontrolledComponent() {
  const firstnameRef = useRef(null);
  const lastnameRef = useRef(null);
  const emailRef = useRef(null);
  const portfoliowebsiteRef = useRef(null);
  const positionRef = useRef(null);
  const phoneRef = useRef(null);
  const relocateRef = useRef({ current: { value: null } });
  const messageRef = useRef(null);
  const yesRef = useRef(null);
  const noRef = useRef(null);
  const notSureRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation for phone number to ensure it's 10 digits
    if (phoneRef.current.value.length !== 10) {
      alert("Phone number must be exactly 10 digits!");
      return;
    }

    let relocate = "";
    if (yesRef.current && yesRef.current.checked) relocate = "Yes";
    else if (noRef.current && noRef.current.checked) relocate = "No";
    else if (notSureRef.current && notSureRef.current.checked) relocate = "Not Sure";

    const firstname = firstnameRef.current.value;
    const lastname = lastnameRef.current.value;
    const email = emailRef.current.value;
    const portfoliowebsite = portfoliowebsiteRef.current.value;
    const position = positionRef.current.value; 
    const phone = phoneRef.current.value;
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
    yesRef.current.checked = false;
    noRef.current.checked = false;
    notSureRef.current.checked = false;
    messageRef.current.value = "";
  };
  return (
    <form onSubmit={handleSubmit}>
  
      <div className="name-row">
        <label>
          Firstname:
          <input type="text" ref={firstnameRef} />
        </label>
  
        <label>
          Lastname:
          <input type="text" ref={lastnameRef} />
        </label>
      </div>
      <br />
  

      <label>
        Email:
        <input type="email" ref={emailRef} />
      </label>
      <br />

      <label>
        Portfolio Website:
        <input type="text" ref={portfoliowebsiteRef} placeholder="http://"/>
      </label>
      <br />

      
      <div className="position-row">
    <span>Position you are applying for * </span>
    <select ref={positionRef}>
        <option value="" disabled selected>-- Select a Position --</option>
        <option value="securityAnalyst">Security Analyst</option>
        <option value="tester">Tester</option>
        <option value="softwareEngineer">Software Engineer</option>
        <option value="frontEndDeveloper">Front End Developer</option>
    </select>
</div>
<br />


<label class="phone-label">
    Phone *(Must be 10 digits):
    <input 
        type="text" 
        ref={phoneRef} 
        maxLength="10" 
        pattern="\d{10}" 
        onInput={(e) => e.target.value = e.target.value.replace(/\D/, '').slice(0, 10)} 
        title="Please enter a 10-digit phone number"
        className="phone-input" />
</label>
<br />


      <label>
        Are you willing to relocate?:
        <div>
            <input type="radio" name="relocate" value="Yes" ref={yesRef} /> Yes
            <input type="radio" name="relocate" value="No" ref={noRef} /> No
            <input type="radio" name="relocate" value="NotSure" ref={notSureRef} /> Not Sure
        </div>
      </label>
      <br />

      <label>
    Reference/ Comments/ Questions:
    <textarea ref={messageRef}></textarea>
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
