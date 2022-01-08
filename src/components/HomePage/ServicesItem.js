import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Headings from "../Common/Headings";

function ServicesItem(props) {
  return (
    <div className="section-padding container">
      
        <Headings textColor={props.textColor} title={props.title} />
      
      <div className="row justify-content-between flex-direction-column-reverse mt-2">
        <div className="col-lg-5 col-md-12">
          <ScrollAnimation animateIn="fadeInLeft" animateOnce="true" style={{animationDelay:"0.5s"}}>
            <p className="mb-4 f-size-09 line-height" style={{ color: props.textColor }} >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInLeft" animateOnce="true" style={{animationDelay:"1.5s"}} offset="1100">
            <div>
            <button
              className="button"
              style={{ background: props.btnBgColor, color: props.btnColor }}
            >
              Learn more
            </button>
            </div>
            </ScrollAnimation>
          
        </div>

        <div className="col-lg-5 col-md-12">
        <ScrollAnimation animateIn="fadeInRight" animateOnce="true" style={{animationDelay:"1s"}}>
            <div className="services-img">
              <img alt="services-Img" src={props.itemImg} />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}

export default ServicesItem;
