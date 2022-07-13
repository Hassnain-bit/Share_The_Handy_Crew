import React from 'react'
import Headings from "../Common/Headings";
import ServicesBanner from "./ServicesBanner";
import ServicesText from "./ServicesText";
import curtainImg1 from "./../../images/Curtain & TV Fixing 1.jpg";
import curtainImg2 from "./../../images/Curtain & TV Fixing 2.jpg";
import curtainBannerImg from "./../../images/tv and curtain.jpg";

function ServicesCurtainPage() {

    const Description ={
        firstDesc : "Your televisions are some of your biggest home investment. Before replacing your broken television, call the expert TV repairmen at TB Electronix. We will fix most major brands, including Samsung, LG, Vizio, Sony, Sharp, Insignia, Toshiba, and Panasonic.Televisions can be an expensive home electronic. When your television breaks, your first impulse might be to purchase a new television, but often this is not the cheapest option for you. Repairing your TV might save you hundreds or even thousands of dollars. In some scenario, the TV repair service might be free to you.",
        secondDesc: "We offer Sales, Service and Maintenance for the following equipment; Water Softeners, Reverse Osmosis Drinking Systems, Iron Filters, Aerators, Whole House Reverse Osmosis, Submersible Pumps, Jet Pumps, Pressure Tanks, Pressure Switches and all other types of water treatment/well equipment. We have maintenance agreements that include salt delivery for your convenience and piece of mind. Certain Services, Inc. is also a full service Florida State Plumbing Contractor. ",
        }


    return (
        <div>
      <ServicesBanner img={curtainBannerImg} heading={"OUR SERVICES"}/>

      <div className="pt-5 pb-5">
        <div className="section-padding container">
          <div>
            <Headings textColor={"white"} title={"Curtain and TV Fixing"} />
          </div>

          <ServicesText
            firstDesc={Description.firstDesc}
            firstImg={curtainImg2}
            secondDesc={Description.secondDesc}
            secondImg={curtainImg1}
          />
        </div>
      </div>
    </div>
    )
}

export default ServicesCurtainPage
