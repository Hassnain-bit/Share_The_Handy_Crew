import React from "react";
import ServicesItem from "./ServicesItem";
import constructionImg from "./../../images/under-constructions.svg";

function AboutUs() {
  return (
    <div className="pt-5 pb-5 about-section off-whiteBgColor">
      <ServicesItem
        title={"About us"}
        itemImg={constructionImg}
        paragraph={
          "The Handy Crew LLC is a trusted name in the home repairs and maintenance domain. The Handy Crew LLC is a Dubai based leading home and corporate solutions company. Our Company has been providing all kind of Technical services in various domains such as plumbing, electrical, carpentry, painting, ac repair services, landscaping and many more.The Handy Crew have aim to bring a smile on our customers face each time through a strict compliance of quality, commitment, value for money, honesty and timely service."
        }
        textColor={"black"}
        btnBgColor={"black"}
        btnColor={"white"}
        link={`/AboutUs`}
      />
    </div>
  );
}

export default AboutUs;
