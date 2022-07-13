import React from 'react'
import Headings from "../Common/Headings";
import ServicesBanner from "./ServicesBanner";
import ServicesText from "./ServicesText";
import furnitureImg1 from "./../../images/Speciality in Furniture Work 2.jpg";
import furnitureImg2 from "./../../images/Speciality in Furniture Work 3.jpg";
import furnitureBannerImg from "./../../images/furniture working.jpg";

function ServicesFurniturePage() {

  const Description ={
    firstDesc : "Furniture brings you an extensive range of office and home furniture. Our office collection provides a high-performing work environment and elevated work experience to allow for maximum performance and effortless organization to help you achieve your goals.Our home furniture helps you bring together the home of your dreams. From casual to sophisticated, our range includes classical, eloquent designs as well as modern and trendy options to choose from",
    secondDesc: " we provide you with the exclusive option to have furniture make to order. Make to order furniture allows you to order custom made furniture in a design of your choice. You also have the option to choose the size and material used.From entire bedroom sets to creating a small side table to go with your existing furniture, our make to order service is designed to combine excellent craftsmanship and your designs.We offer 3 types of delivery service, including next day delivery on the majority of our items. We have also carefully selected 5,000 essential items that will kit out a complete office such as desks, filers, bookcases, cupboards and chairs.",
    }

    return (
        <div>
      <ServicesBanner img={furnitureBannerImg} heading={"OUR SERVICES"}/>

      <div className="pt-5 pb-5">
        <div className="section-padding container">
          <div>
            <Headings textColor={"white"} title={"Speciality in Furniture work"} />
          </div>
 
          <ServicesText
            firstDesc={Description.firstDesc}
            firstImg={furnitureImg1}
            secondDesc={Description.secondDesc}
            secondImg={furnitureImg2}
          />
        </div>
      </div>
    </div>
    )
}

export default ServicesFurniturePage
