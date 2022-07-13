import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link, NavLink } from "react-router-dom";
import Headings from "../Common/Headings";

function ServicesItem(props) {

  const refreshPage = (e) => {
    e.preventDefault();
    
    window.location.reload(); 
  }
  return (
    <div className="section-padding container">
      <Headings textColor={props.textColor} title={props.title} />

      <div className="row justify-content-between flex-direction-column-reverse mt-2">
        <div className="col-lg-5 col-md-12">
          <ScrollAnimation
            animateIn="fadeInLeft"
            animateOnce="true"
            style={{ animationDelay: "0.5s" }}
          >
            <p
              className="mb-4 f-size-09 line-height"
              style={{ color: props.textColor }}
            >
             {props.paragraph}
            </p>
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="fadeInLeft"
            animateOnce="true"
            style={{ animationDelay: "0.5s" }}
            offset="1100"
          >
          <Link to={props.link} target="_parent">
            <div>
            
            <button
                className="button"
                style={{ background: props.btnBgColor, color: props.btnColor }}
              >
                Learn more
              </button>
            
              
            </div>
            </Link>
          </ScrollAnimation>
        </div>

        <div className="col-lg-5 col-md-12">
          <ScrollAnimation
            animateIn="fadeInRight"
            animateOnce="true"
            style={{ animationDelay: "0.5s" }}
          >
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
