import { useState } from "react";
import TextAreaField from "./TextAreaField";
import InputField from "./InputField";


function HW() {
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [message,setMessage]=useState('');
    
    return (
      <div>
          <form className="myForm" >
            <label>
            Username
            <InputField type="text" name="username" value={username} onChange={event=>{setUsername(event.target.value);}} required/>
            </label>
            <label> E-mail</label>
            <InputField type="Email" name="email" value={email} onChange={event=>{setEmail(event.target.value);}} required/>
            <label>Message</label>
          <TextAreaField value={message} name="message" onChange={event=>{setMessage(event.target.value);}} required/>
            <button type="submit">submit</button>
            </form>
      
      </div>
      
    );
    
  }
  
  export default HW;
  