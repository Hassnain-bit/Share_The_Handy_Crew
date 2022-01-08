import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Headings from "../Common/Headings";

function ContactUs() {
  return (
      
    <div className="pt-5 pb-5 contact-section off-whiteBgColor">
      <div className="section-padding container">
      
        <Headings textColor={"black"} title={"Contact us"} />
        <div className="row justify-content-between mt-2">
        
          <div className="col-md-6">
          <ScrollAnimation animateIn="fadeInLeft" animateOnce="true" style={{animationDelay:"0.5s"}}>
            <span className="float-left blackColor mb-2">First name</span>
            <input className="custom-input" autoComplete="off" required />
            </ScrollAnimation>
          </div>
         
          <div className="col-md-6">
          <ScrollAnimation animateIn="fadeInRight" animateOnce="true" style={{animationDelay:"1s"}}>
            <span className="float-left blackColor mb-2">Last name</span>
            <input className="custom-input" autoComplete="off" required />
            </ScrollAnimation>
          </div>
          <div className="col-md-6">
          <ScrollAnimation animateIn="fadeInLeft" animateOnce="true" style={{animationDelay:"1.5s"}}>
            <span className="float-left blackColor mb-2">Email</span>
            <input className="custom-input" autoComplete="off" required />
            </ScrollAnimation>
          </div>
          <div className="col-md-6">
          <ScrollAnimation animateIn="fadeInRight" animateOnce="true" style={{animationDelay:"2s"}}>
            <span className="float-left blackColor mb-2">Phone number</span>
            <input className="custom-input" autoComplete="off" required />
            </ScrollAnimation>
          </div>
          <div className="col-md-6">
          <ScrollAnimation animateIn="fadeInLeft" animateOnce="true" style={{animationDelay:"2.5s"}}>
            <span className="float-left blackColor mb-2">Subject</span>
            <textarea className="custom-input pt-10 pb-10" autoComplete="off" required />
            </ScrollAnimation>
          </div>
          <div className="col-md-6">
          <ScrollAnimation animateIn="fadeInRight" animateOnce="true" style={{animationDelay:"3s"}}>
            <span className="float-left blackColor mb-2">Message</span>
            <textarea className="custom-input pt-10 pb-10" autoComplete="off" required />
            </ScrollAnimation>
          </div>
          <div className="col-md-12">
          <ScrollAnimation animateIn="fadeInUp" animateOnce="true" style={{animationDelay:"3.5s"}} offset="1100">
            <div className="text-center mt-4">
              <button className="button blackBgColor whiteColor bounce">SUBMIT</button>
            </div>
            </ScrollAnimation>
          </div>
        </div>
        
      </div>
    </div>
    
    
  );
}

export default ContactUs;
