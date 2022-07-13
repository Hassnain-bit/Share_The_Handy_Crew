import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Headings from "../Common/Headings";
import firebase from '../../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactUs(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName ] = useState('');
  const [email , setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject ] = useState('');
  const [message , setmessage ] = useState('');
  const [valid, setValid] = useState({firstName,lastName,email,phone,subject,message});
  const submitData = () => {
    
    if(firstName && email && phone && message){
    const firestore = firebase.database().ref("/UserInfo");
    let data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      subject: subject,
      message: message,
    }
    firestore.push(data);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setmessage("");
    if(firestore){
      setValid({
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        subject:"",
        message:"",

      })
      toast.success("Thanks you for Contact us",{ position: "top-center",autoClose: 2000 });
    }else{
      
    }
  }else{
   
  }
  }


  return (
      
    <div className="pt-5 pb-5 contact-section" style={{background:props.backgroundColor}}>
      <div className="section-padding container">
      
        <Headings textColor={props.headingColor} title={"Contact us"} />
        <form>
        <div className="row justify-content-between mt-2">
        
          <div className="col-md-6">
          <ScrollAnimation animateIn="fadeInLeft" animateOnce="true" style={{animationDelay:"0.5s"}}>
            <span className="float-left mb-2" style={{color:props.inputTitleColor}}>First name</span>
            <input type="text" name="firstName" className={props.addClass} autoComplete="off" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} required />
            </ScrollAnimation>
          </div>
         
          <div className="col-md-6">
          <ScrollAnimation animateIn="fadeInRight" animateOnce="true" style={{animationDelay:"0.7s"}}>
            <span className="float-left mb-2"  style={{color:props.inputTitleColor}}>Last name</span>
            <input type="text" name="lastName" className={props.addClass} autoComplete="off" value={lastName} onChange={(e)=>{setLastName(e.target.value)}} required />
            </ScrollAnimation>
          </div>
          <div className="col-md-6">
          <ScrollAnimation animateIn="fadeInLeft" animateOnce="true" style={{animationDelay:"0.9s"}}>
            <span className="float-left mb-2"  style={{color:props.inputTitleColor}}>Email</span>
            <input type="email" name="email" className={props.addClass} autoComplete="off" value={email} onChange={(e)=>{setEmail(e.target.value)}} required />
            </ScrollAnimation>
          </div>
          <div className="col-md-6">
          <ScrollAnimation animateIn="fadeInRight" animateOnce="true" style={{animationDelay:"1.1s"}}>
            <span className="float-left mb-2"  style={{color:props.inputTitleColor}}>Phone number</span>
            <input type="phone" name="phone" className={props.addClass} autoComplete="off" value={phone} onChange={(e)=>{setPhone(e.target.value)}} required />
            </ScrollAnimation>
          </div>
          <div className="col-md-6">
          <ScrollAnimation animateIn="fadeInLeft" animateOnce="true" style={{animationDelay:"1.3s"}}>
            <span className="float-left mb-2"  style={{color:props.inputTitleColor}}>Subject</span>
            <textarea name="subject" className={props.addClass} style={{padding:"10px 15px"}} autoComplete="off" value={subject} onChange={(e)=>{setSubject(e.target.value)}} required />
            </ScrollAnimation>
          </div>
          <div className="col-md-6">
          <ScrollAnimation animateIn="fadeInRight" animateOnce="true" style={{animationDelay:"1.5s"}}>
            <span className="float-left mb-2"  style={{color:props.inputTitleColor}}>Message</span>
            <textarea name="message" className={props.addClass} style={{padding:"10px 15px"}}  autoComplete="off" value={message} onChange={(e)=>{setmessage(e.target.value)}} required />
            </ScrollAnimation>
          </div>
          <div className="col-md-12">
          <ScrollAnimation animateIn="fadeInUp" animateOnce="true" style={{animationDelay:"1.7s"}} offset="1100">
            <div className="text-center mt-4">
              <button className="button bounce" style={{background:props.btnBg,color:props.btnColor}} onClick={()=>{submitData()}}>SUBMIT</button>
              
            </div>
            </ScrollAnimation>
          </div>
          
        </div>
        <ToastContainer/>
        </form>
      </div>
    </div>
    
    
  );
}

export default ContactUs;
