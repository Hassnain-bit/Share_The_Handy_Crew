import React from 'react'
import Headings from "../Common/Headings";
import ServicesBanner from "./ServicesBanner";
import ServicesText from "./ServicesText";
import acImg1 from "./../../images/AC Repair & Service 1.jpg";
import acImg2 from "./../../images/AC Repair & Service 2.jpg";
import acBannerImg from "./../../images/Ac Banner.jpg";

function ServicesACPage() {

  const Description ={
    firstDesc : "You should always call highly professional technician or company who can diagnose, adjust or repair your air conditioning/cooling system so that you are comfortable all year long. AC repair is a complicated process that always requires a professional approach. It should always be carried out by highly specialized and experienced technicians.Even on the hottest days of the year, you can keep your home cool and comfortable while enjoying low energy costs with a high-efficiency air conditioner. Don’t choose between affordability, durability, and upper limit cooling comfort.",
    secondDesc: "At One Hour Air Conditioning & Heating, we’ve built our entire business around the idea that our customers deserve the best possible treatment, starting with trustworthy technicians. In many instances, local One Hour locations are owned by technicians who have been serving and building trust with their local community for decades.Every one of our technicians is licensed, qualified, and receives regular training to stay up-to-date with the latest developments and products in the industry. We want you to be happy, so we back all of our work with a third-party guarantee. This way, you can be certain that we are accountable to provide a high level of service on every visit.",
    }

    return (
        <div>
      <ServicesBanner img={acBannerImg} heading={"OUR SERVICES"}/>

      <div className="pt-5 pb-5">
        <div className="section-padding container">
          <div>
            <Headings textColor={"white"} title={"A/C Repair and Servicing"} />
          </div>
 
          <ServicesText
            firstDesc={Description.firstDesc}
            firstImg={acImg2}
            secondDesc={Description.secondDesc}
            secondImg={acImg1}
          />
        </div>
      </div>
    </div>
    )
}

export default ServicesACPage
