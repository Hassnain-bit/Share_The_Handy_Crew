import React from "react";
import Carousel from "react-multi-carousel";
import ServicesItem from "./ServicesItem";
import paintImg from "./../../images/paint.jpg";
import bannerImg from "./../../images/banner.jpg";

function Services() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 768 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 320 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 320, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="pt-5 pb-5 services-section">
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={500}
        ssr={true}
      >
        <ServicesItem title={"Paint and Partition work"} itemImg={paintImg} textColor={"white"} btnBgColor={"#72f0a0"} btnColor={"black"}/>
        <ServicesItem title={"Curtain and TV fixing"} itemImg={bannerImg} textColor={"white"} btnBgColor={"#72f0a0"} btnColor={"black"}/>
        <ServicesItem title={"Marble, Tiles and Light fixer"} itemImg={paintImg} textColor={"white"} btnBgColor={"#72f0a0"} btnColor={"black"}/>
      </Carousel>
    </div>
  );
}

export default Services;
