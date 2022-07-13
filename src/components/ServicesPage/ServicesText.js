import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function ServicesText(props) {
  return (
    <div>
      <div className="mt-4 mb-4">
        <div className="row justify-content-between">
          <div className="col-lg-6 col-md-12">
          <ScrollAnimation animateIn="fadeInLeft" animateOnce="true" style={{animationDelay:"0.5s"}}>
            <p className="f-size-09 line-height whiteColor">
              {props.firstDesc}
            </p>
            </ScrollAnimation>
          </div>
          
          <div className="col-lg-5 col-md-12">
          <ScrollAnimation animateIn="fadeInRight" animateOnce="true" style={{animationDelay:"0.7s"}}>
            <div className="services-img">
              <img alt="itemImg" src={props.firstImg} />
            </div>
            </ScrollAnimation>
          </div>
        </div>

        <div className="row justify-content-between mt-4 mb-4">
          <div className="col-lg-5 col-md-12">
          <ScrollAnimation animateIn="fadeInRight" animateOnce="true" style={{animationDelay:"0.5s"}} offset="1000">
            <div className="services-img">
              <img alt="itemImg" src={props.secondImg} />
            </div>
            </ScrollAnimation>
          </div>

          <div className="col-lg-6 col-md-12">
          <ScrollAnimation animateIn="fadeInLeft" animateOnce="true" style={{animationDelay:"0.7s"}} offset="1000">
            <p className="f-size-09 line-height whiteColor">
              {props.secondDesc}
            </p>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesText;
