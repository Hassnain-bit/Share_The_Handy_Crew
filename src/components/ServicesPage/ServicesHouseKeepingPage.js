import React from 'react'
import Headings from "../Common/Headings";
import ServicesBanner from "./ServicesBanner";
import ServicesText from "./ServicesText";
import houseKeepingImg1 from "./../../images/House Keeping & Maid Service 1.jpg";
import houseKeepingImg2 from "./../../images/House Keeping & Maid Service 2.jpg";
import houseKeepingBannerImg from "./../../images/Maid.jpg";

function ServicesHouseKeepingPage() {

  const Description ={
    firstDesc : "Keeping your home clean on a daily basis is never easy and a full-time job, It seems impossible to keep up with it, It consumes most of our leisure time. Professional home cleaners and maid services can be a solution to this problem. House cleaner can work on your mentioned timings and will be available when you want them. You can hire them for a day, weekly or a monthly basis",
    secondDesc: "customers have welcomed the trusted cleaning professionals from locally owned and operated Molly Maid businesses into their homes. Now more than ever, we want to reassure you that our teams strictly adhere to CDC sanitization guidelines. We follow cleaning processes and procedures that are designed to help create a cleaner and healthier environment for you and your family. For additional safety and protection for everyone, our teams are provided with masks and gloves to use while cleaning your home.If you’re ever dissatisfied with any aspect of our recent services, just give us a call within 24 hours and we’ll work with you to resolve the problem.",
    }

    return (
        <div>
      <ServicesBanner img={houseKeepingBannerImg} heading={"OUR SERVICES"}/>

      <div className="pt-5 pb-5">
        <div className="section-padding container">
          <div>
            <Headings textColor={"white"} title={"House Keeping & Maid service"} />
          </div>
 
          <ServicesText
            firstDesc={Description.firstDesc}
            firstImg={houseKeepingImg2}
            secondDesc={Description.secondDesc}
            secondImg={houseKeepingImg1}
          />
        </div>
      </div>
    </div>
    )
}

export default ServicesHouseKeepingPage
