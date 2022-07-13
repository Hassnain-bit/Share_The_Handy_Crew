import React from 'react'
import Headings from "../Common/Headings";
import ServicesBanner from "./ServicesBanner";
import ServicesText from "./ServicesText";
import handymanImg1 from "./../../images/handyman-services.jpg";
import handymanImg2 from "./../../images/Professional Handyman 2.jpg";
import handymanBannerImg from "./../../images/handyman.jpg";

function ServicesHandymanPage() {

  const Description ={
    firstDesc : "The attic is not always an easy room to access. If you’re tired of getting out the ladder, talk to your local Mr. Handyman about installing drop down stairs so that you can easily use your attic space for storage and more. Our home improvement professionals can also repair unsightly attic doors or install new attic doors altogether.Every living room and dining room should be comfortable for family gatherings yet classy for entertaining guests. Our home improvement professionals are constantly completing a wide range of projects to refresh the ambiance of these two rooms. Whether it's installing crown molding or hanging a family portrait, no job is either too big or too small for our team.",
    secondDesc: "Intended for cars and trucks, the garage can be almost anything, including a workshop, laboratory, band rehearsal space or even a gym. For most, though, the goal is an immaculately organized space for cars, toys and tools. We can haul, install or even build from scratch to get you there.Handyman is equipped to handle major and minor projects in your kitchen. After all, the kitchen is the heart of the household. Our dependable and experienced handyman services will get the job done right and on time so that your family can get back to making memories.Handyman has professional carpenters, masons, tile setters and painters who are experienced in repairing and maintaining patios and decks in your area, so your deck or patio is as nice as the inside of your home-and just as comfortable.",
    }

    return (
        <div>
      <ServicesBanner img={handymanBannerImg} heading={"OUR SERVICES"}/>

      <div className="pt-5 pb-5">
        <div className="section-padding container">
          <div>
            <Headings textColor={"white"} title={"Professional Handyman"} />
          </div>
 
          <ServicesText
            firstDesc={Description.firstDesc}
            firstImg={handymanImg1}
            secondDesc={Description.secondDesc}
            secondImg={handymanImg2}
          />
        </div>
      </div>
    </div>
    )
}

export default ServicesHandymanPage
