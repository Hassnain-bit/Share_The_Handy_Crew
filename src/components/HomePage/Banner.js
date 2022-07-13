import React from "react";
import bannerImg from "./../../images/banner.jpg";
import { scroller } from "react-scroll";
import ScrollAnimation from "react-animate-on-scroll";

function Banner() {

  const scrollToServices = (e) => {
    e.preventDefault();
    scroller.scrollTo("services-section", {
      duration: 100,
      delay: 100,
      smooth: "easeInOutQuart",
      offset: -100,
    });
  };


  return (
    <ScrollAnimation
                  animateIn="fadeIn"
                  animateOnce="true"
                  style={{ animationDelay: "0s" }}
                >
    <div className="banner">
      <img alt="bannerBgImg" src={bannerImg} />

      <div className="col-8 center-content">
        <h1>
          The Handy Crews
        </h1>
        <p className="col-md-9 col-sm-9 col-9 mt-5 mb-5 m-auto">
        To give real service you must add something which cannot be bought or measured with money, and that is sincerity and integrity.
        </p>
        
        <div>
        <button className="button greenBgColor" onClick={(e)=> scrollToServices(e)}>Get Started</button>
        </div>
        {/* <div className="hello">
        <a class="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""></a>
        </div> */}
      
        <div className="down-arrow"><i class="bi bi-chevron-down"></i></div>
        
      </div>
    </div>

    </ScrollAnimation>
  );
}

export default Banner;
