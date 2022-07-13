import React from "react";
import Headings from "../components/Common/Headings";
import ServicesBanner from "../components/ServicesPage/ServicesBanner";
import aboutUsImg from "../images/About Us.jpg";
import constructionImg from "../images/under-constructions.svg";
import missionImg from "../images/mission.svg";
import chooseUsImg from "../images/chooseUs.svg";
import ScrollAnimation from "react-animate-on-scroll";

function AboutUsPage() {
  return (
    <div>
      <ServicesBanner img={aboutUsImg} heading="WHO WE ARE" />

      <div className="pt-5 pb-5">
        <div className="section-padding container">
          <div>
            <Headings textColor={"white"} title={"About Us"} />
          </div>

          <div className="mt-4 mb-4">
            <div className="row justify-content-between">
              <div className="col-lg-6 col-md-12">
                <ScrollAnimation
                  animateIn="fadeInLeft"
                  animateOnce="true"
                  style={{ animationDelay: "0.5s" }}
                >
                  <p className="f-size-09 line-height whiteColor">
                    The Handy Crew LLC is a trusted name in the home repairs and
                    maintenance domain. The Handy Crew LLC is a Dubai based
                    leading home and corporate solutions company. Our Company
                    has been providing all kind of Technical services in various
                    domains such as plumbing, electrical, carpentry, painting,
                    ac repair services, landscaping and many more.
                  </p>

                  <p className="f-size-09 line-height whiteColor">
                    The Handy Crew have aim to bring a smile on our customers
                    face each time through a strict compliance of quality,
                    commitment, value for money, honesty and timely service.
                  </p>

                  <p className="f-size-09 line-height whiteColor">
                    The Handy Crew believe in getting the job done on time
                    within the budget and time period, while still providing
                    quality services. By being local to you, we are able to
                    provide a quality and cost effective services for all your
                    everyday needs.
                  </p>
                </ScrollAnimation>
              </div>

              <div className="col-lg-5 col-md-12">
                <ScrollAnimation
                  animateIn="fadeInRight"
                  animateOnce="true"
                  style={{ animationDelay: "0.7s" }}
                >
                  <div className="services-img">
                    <img alt="itemImg" src={constructionImg} />
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>

          <div className=" pt-5 pb-5">
          <div className="row justify-content-between">
            <div className="col-lg-5 col-md-12">
              <ScrollAnimation
                animateIn="fadeInRight"
                animateOnce="true"
                style={{ animationDelay: "0.5s" }}
                offset="1000"
              >
                <div className="services-img">
                  <img alt="itemImg" src={missionImg} />
                </div>
              </ScrollAnimation>
            </div>

            <div className="col-lg-6 col-md-12">
              <ScrollAnimation
                animateIn="fadeInLeft"
                animateOnce="true"
                style={{ animationDelay: "0.7s" }}
                offset="1000"
              >
                <h4 className="f-bold whiteColor mb-4">Mission</h4>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInLeft"
                animateOnce="true"
                style={{ animationDelay: "0.7s" }}
                offset="1000"
              >
                <p className="f-size-09 line-height whiteColor">
                  ''The Handy Crew mission is to provide knowledgeable,
                  convenient and reasonable priced Technician to the United Arab
                  Emirates. The Handy Crew want to make lifelong
                  relationship with our customer and always want to provide the
                  best services on time and at the convenience of our
                  customers.''
                </p>
              </ScrollAnimation>
            </div>
          </div>
          </div>


          <div>
            <Headings textColor={"white"} title={"WHY YOU CHOOSE US"} />
          </div>
          <div className="mt-4 mb-5">
          
            <div className="row justify-content-between">
              <div className="col-lg-6 col-md-12">
                <ScrollAnimation
                  animateIn="fadeInLeft"
                  animateOnce="true"
                  style={{ animationDelay: "0.5s" }}
                >
                  <ul className="list-about-us-page">
                      <li>
                      It’s Simple Just Call and Get Solution
                      </li>
                      <li>
                      Call for Small or Major Work
                      </li>
                      <li>
                      Best Quality Work
                      </li>
                      <li>
                      Low and Reasonable Cost
                      </li>
                      <li>
                      100% Satisfactory Work on Competitive Prices
                      </li>
                      <li>
                      Expert Consultant Team
                      </li>
                      <li>
                      Using Best Quality Tools
                      </li>
                      <li>
                      Get Professional and Expert Technician
                      </li>
                      <li>
                      Wide Range of Services in Single Roof
                      </li>
                      
                  </ul>
                </ScrollAnimation>
              </div>

              <div className="col-lg-4 col-md-12">
                <ScrollAnimation
                  animateIn="fadeInRight"
                  animateOnce="true"
                  style={{ animationDelay: "0.7s" }}
                >
                  <div className="services-img">
                    <img alt="itemImg" src={chooseUsImg} />
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
