import React from 'react'
import Headings from "../Common/Headings";
import ServicesBanner from "./ServicesBanner";
import ServicesText from "./ServicesText";
import marbleImg1 from "./../../images/Marble, Tile & Light Fixing 3.jpg";
import marbleImg2 from "./../../images/Marble, Tile & Light Fixing 1.jpg";
import marbleBannerImg from "./../../images/Tile fixing.jpg";

function ServicesMarblePage() {

  const Description ={
    firstDesc : "We at Marble and tile restorations have been providing our clients with the most dependable and expert marble floor refinishing services.lighting design has to consider aspects such as safety and health at work, environmental performance, energy consumption and durability of the products the model is continuously gaining more and more importance for company structures",
    secondDesc: "Produced primarily in the Western hemisphere, marble is a classic and highly sought-after material. Ancient Greeks preferred marble for sculpting because of its softer texture. Today, it is used as flooring in many homes.After years of wear and tear, however, marble becomes dull and needs restoration. There are several ways to fix damaged marble floors. Repairing issues as they come up can keep your floor looking bright and shiny all year long. And preventative measures along the way can help you avoid needing to replace the floor altogether.Through daily use, marble floors can endure cracks and scratches, too. There are many home remedies online to deal with damaged marble. If you have the means to hire a professional, however, you should. Investing in materials and equipment specifically to try a home remedy with no guarantee of repair can cost more than having a professional fix the marble in the first place.",
    }

    return (
        <div>
      <ServicesBanner img={marbleBannerImg} heading={"OUR SERVICES"}/>

      <div className="pt-5 pb-5">
        <div className="section-padding container">
          <div>
            <Headings textColor={"white"} title={"Marble, Tile & Light fixer"} />
          </div>
 
          <ServicesText
            firstDesc={Description.firstDesc}
            firstImg={marbleImg1}
            secondDesc={Description.secondDesc}
            secondImg={marbleImg2}
          />
        </div>
      </div>
    </div>
    )
}

export default ServicesMarblePage
