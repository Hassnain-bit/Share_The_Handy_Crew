import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function Footer() {
  return (
    <div className="pt-5 pb-5 footer-section" style={{borderTop:"1px solid"}}>
      <div className="section-padding container">
        <div className="row justify-content-between">
          <div className="col-md-5">
          <ScrollAnimation animateIn="fadeInLeft" animateOnce="true">
            <h4 className="f-bold whiteColor mb-4">The Handy Crew</h4>
            <p className="f-size-09 whiteColor">
            We feel happy and glad by seeing and knowing about the responses and feedbacks about our widely accepted partition works & services by all our clients. We work with the ultimate aim to satisfy and meet all clients’ requirements when they come to us for these kinds of services.
            </p>
            </ScrollAnimation>
          </div>
          <div className="col-md-3 ml-auto">
          <ScrollAnimation animateIn="fadeInLeft" animateOnce="true" style={{animationDelay:"0.5s"}}>
            <h5 className="f-bold whiteColor mb-4">Visit links</h5>
            <ul className="footer-list">
              <li>Home</li>
              <li>Services</li>
              <li>About us</li>
              <li>Contact us</li>
            </ul>
            </ScrollAnimation>
          </div>
          
          <div className="col-md-3">
          <ScrollAnimation animateIn="fadeInLeft" animateOnce="true" style={{animationDelay:"0.7s"}}>
            <h5 className="f-bold whiteColor mb-4">Social handles</h5>
            <button className="circle-button greenBgColor mr-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="22"
                height="22"
                viewBox="0 0 30 30"
                style={{ fill: "#000000" }}
              >
                <path d="M12,27V15H8v-4h4V8.852C12,4.785,13.981,3,17.361,3c1.619,0,2.475,0.12,2.88,0.175V7h-2.305C16.501,7,16,7.757,16,9.291V11 h4.205l-0.571,4H16v12H12z"></path>
              </svg>
            </button>
            <button className="circle-button greenBgColor mr-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="19"
                height="19"
                viewBox="0 0 50 50"
                style={{ fill: "#000000" }}
              >
                <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
              </svg>
            </button>
            <button className="circle-button greenBgColor mr-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="19"
                height="19"
                viewBox="0 0 50 50"
                style={{ fill: "#000000" }}
              >
                <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
              </svg>
            </button>
            </ScrollAnimation>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Footer;
