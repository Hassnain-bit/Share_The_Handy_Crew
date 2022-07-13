import React from 'react'
import Headings from "../Common/Headings";
import ServicesBanner from "./ServicesBanner";
import ServicesText from "./ServicesText";
import electricImg1 from "./../../images/electrical-work-img-2.jpg";
import electricImg2 from "./../../images/electrical-work-img.jpg";
import electricBannerImg from "./../../images/electric work.jpg";

function ServicesElectricPage() {

  const Description ={
    firstDesc : "You cannot imagine a life without electricity. Especially in the 21st century, it is impossible to live without it, because we have in common many electrical devices that work with the flow of electricity. Sometimes we find small flaws in our devices and start fixing them. Trust only agencies that provide fully qualified personnel for the services. You can ask your engineers or qualified professionals for proof of the work they will be doing. Also check if you are using the services of an approved company. Tevta institute is an independent organization that conducts training and certification programs for electrical installation and safety measures.",
    secondDesc: "Access control systems including door access and door security door.Construction and manufacture of furniture for electrical supply of your desire.Computer-aided construction and design in the form of integrated drawings.Emergency light,Troubleshooting and repair,Fire alarm systems,Emergency generators. Many projects require permits and inspections. An experienced electrical service provider like us can advise you on the necessary permits and ensure that your project passes the necessary inspections. Your life security is our priority.",
    }

    return (
        <div>
      <ServicesBanner img={electricBannerImg} heading={"OUR SERVICES"}/>

      <div className="pt-5 pb-5">
        <div className="section-padding container">
          <div>
            <Headings textColor={"white"} title={"All kind of Electric work"} />
          </div>
 
          <ServicesText
            firstDesc={Description.firstDesc}
            firstImg={electricImg1}
            secondDesc={Description.secondDesc}
            secondImg={electricImg2}
          />
        </div>
      </div>
    </div>
    )
}

export default ServicesElectricPage
