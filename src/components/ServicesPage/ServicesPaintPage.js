import React from "react";
import Headings from "../Common/Headings";
import ServicesBanner from "./ServicesBanner";
import ServicesText from "./ServicesText";
import paintImg1 from "./../../images/Paint & Partition Work 1.jpg";
import paintImg2 from "./../../images/Paint & Partition Work 2.jpg";
import paintBannerImg from "./../../images/Paint work.jpg";

function ServicesPaintPage() {

    const Description ={
        firstDesc : "Here at the handy crews Painting, we conduct ourselves to the highest standards of conduct. We show up on time, finish the job on time, and leave with a result that goes above and beyond your expectations. Wall partitions, especially Glass Wall partitions are widely used feature in today’s innovative office environment. Advantage with glass partition is that they provide plenty of light emission and gives a different feeling like an ‘open plan’ to the office environment. One of the biggest advantage and also makes it classy that Company logo’s or feature designs can be applied to the glass for added effect. We are dealing in installation of both framed glass partitions and frameless glass partitions.",
        secondDesc: "We value clients requirement and specifications about their needs and with the valuable assistance of creative team of our professionals, we offer a wide range of Door Partition that is used in offices, shops, hospitals, schools and many other places. We use optimum quality material in conformity with international norms with the help of modern techniques for door partition services. As per need of the customers, our door partition services are available in various specifications. We give our door partition services at nominal prices to not only meet the requirements of our clients but also let them feel that they are getting the right work and services at the right price.For the commercial places, offices, industries, corporate houses, we have special offering with a wide collection of Office Glass Door Partition that are fabricated from high quality raw materials. Our expert team of experienced professionals for door partition services have served for many offices, hotels, industries, corporate houses and many more other commercial places. We do the customization as well for the specified height and length of the door partitions as per the client requirements.",
        }

  return (
    <div>
      <ServicesBanner img={paintBannerImg} heading={"OUR SERVICES"}/>

      <div className="pt-5 pb-5">
        <div className="section-padding container">
          <div>
            <Headings textColor={"white"} title={"Paint and Partition work"} />
          </div>

          <ServicesText
            firstDesc={Description.firstDesc}
            firstImg={paintImg1}
            secondDesc={Description.secondDesc}
            secondImg={paintImg2}
          />
        </div>
      </div>
    </div>
  );
}

export default ServicesPaintPage;
