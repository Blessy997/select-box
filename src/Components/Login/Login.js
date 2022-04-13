import React, { useState } from "react";
import "./Login.css";
import profile from "../../Images/profile.png";
import { message } from "antd";
import 'antd/dist/antd.css';

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState()


  const emailValidation=()=> {
    const regex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    if (regex.test(email) === false) {
      console.log("error");

      return false;
    }
    return true;
  }

  const onSubmit=()=> {
    if (emailValidation(true)&&password===10) {
      message.success("login success");
      window.location.replace("/home")
      // history.push("/home")
    } else {
      if(password!==10){
        message.error("Incorrect password")
      }
      else{
        message.error("Incorrect email");

      }
    }
  }

  const handleChange = (e) => {
    console.log(e.target.value);
    var value = e.target.value,
      sum = 0;

    while (value) {
      sum += value % 10;
      value = Math.floor(value / 10);
      
    }
    setpassword(sum)

  
  };

  return (
    <div id="login">
      <div className="container">
        <img src={profile} alt="profile" />
        <form>
          <label>Email</label>
          <input
            type="email"
            className="form"
            onChange={(e) => setemail(e.target.value)}
            value={email}
          ></input>

          <label>Password</label>
          <input
            type="password"
            className="form"
            onChange={handleChange}
          ></input>
        </form>
        <button className="login" onClick={() => onSubmit()} style={{marginTop:"40px"}}>
          Login
        </button>
      </div>
    </div>
  );
}
