import React from "react";
import Carousel from "react-multi-carousel";
import ServicesItem from "./ServicesItem";

import curtainImg from "./../../images/Curtain & TV Fixing 2.jpg";
import acImg from "./../../images/AC Repair & Service 2.jpg";
import marbleImg from "./../../images/Marble, Tile & Light Fixing 3.jpg";
import paintImg from "./../../images/Paint & Partition Work 1.jpg";

import furnitureImg from "./../../images/Speciality in Furniture Work 2.jpg";
import electricImg from "./../../images/electrical-work-img-2.jpg";
import houseKeepingImg from "./../../images/House Keeping & Maid Service 2.jpg";
import handymanImg from "./../../images/handyman-services.jpg";
import bannerImg from "./../../images/banner.jpg";

function Services() {
  const description = {
    certainandtvfixing:
      "Your televisions are some of your biggest home investment. Before replacing your broken television, call the expert TV repairmen at TB Electronix. We will fix most major brands, including Samsung, LG, Vizio, Sony, Sharp, Insignia, Toshiba, and Panasonic.Televisions can be an expensive home electronic. When your television breaks, your first impulse might be to purchase a new television, but often this is not the cheapest option for you. Repairing your TV might save you hundreds or even thousands of dollars. In some scenario, the TV repair service might be free to you.",
    acrepairingservices:
      "You should always call highly professional technician or company who can diagnose, adjust or repair your air conditioning/cooling system so that you are comfortable all year long. AC repair is a complicated process that always requires a professional approach. It should always be carried out by highly specialized and experienced technicians.Even on the hottest days of the year, you can keep your home cool and comfortable while enjoying low energy costs with a high-efficiency air conditioner. Don’t choose between affordability, durability, and upper limit cooling comfort.",
    marbleligthtile:
      "We at Marble and tile restorations have been providing our clients with the most dependable and expert marble floor refinishing services.lighting design has to consider aspects such as safety and health at work, environmental performance, energy consumption and durability of the products the model is continuously gaining more and more importance for company structures",
    paintandpartitionwork:
      "Here at Five Star Painting, we conduct ourselves to the highest standards of conduct. We show up on time, finish the job on time, and leave with a result that goes above and beyond your expectations. Wall partitions, especially Glass Wall partitions are widely used feature in today’s innovative office environment. Advantage with glass partition is that they provide plenty of light emission and gives a different feeling like an ‘open plan’ to the office environment. One of the biggest advantage and also makes it classy that Company logo’s or feature designs can be applied to the glass for added effect. We are dealing in installation of both framed glass partitions and frameless glass partitions.",
    furniturework:
      "Furniture brings you an extensive range of office and home furniture. Our office collection provides a high-performing work environment and elevated work experience to allow for maximum performance and effortless organization to help you achieve your goals.Our home furniture helps you bring together the home of your dreams. From casual to sophisticated, our range includes classical, eloquent designs as well as modern and trendy options to choose from",
    electricwork:
      "You cannot imagine a life without electricity. Especially in the 21st century, it is impossible to live without it, because we have in common many electrical devices that work with the flow of electricity. Sometimes we find small flaws in our devices and start fixing them. Trust only agencies that provide fully qualified personnel for the services. You can ask your engineers or qualified professionals for proof of the work they will be doing. Also check if you are using the services of an approved company. Tevta institute is an independent organization that conducts training and certification programs for electrical installation and safety measures.",
    houseKeeping:
      "Keeping your home clean on a daily basis is never easy and a full-time job, It seems impossible to keep up with it, It consumes most of our leisure time. Professional home cleaners and maid services can be a solution to this problem. House cleaner can work on your mentioned timings and will be available when you want them. You can hire them for a day, weekly or a monthly basis",
    profectionalhandyman:
      "The attic is not always an easy room to access. If you’re tired of getting out the ladder, talk to your local Mr. Handyman about installing drop down stairs so that you can easily use your attic space for storage and more. Our home improvement professionals can also repair unsightly attic doors or install new attic doors altogether.Every living room and dining room should be comfortable for family gatherings yet classy for entertaining guests. Our home improvement professionals are constantly completing a wide range of projects to refresh the ambiance of these two rooms. Whether it's installing crown molding or hanging a family portrait, no job is either too big or too small for our team.",
  };

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
        <ServicesItem
          title={"Curtain and TV fixing"}
          itemImg={curtainImg}
          textColor={"white"}
          btnBgColor={"#72f0a0"}
          btnColor={"black"}
          link={`/Services/Curtain&TVFixer`}
          paragraph={description.certainandtvfixing}
        />
        <ServicesItem
          title={"A/C repair and servicing"}
          itemImg={acImg}
          textColor={"white"}
          btnBgColor={"#72f0a0"}
          btnColor={"black"}
          link={`/Services/ACRepair&Servicing`}
          paragraph={description.acrepairingservices}
        />
        <ServicesItem
          title={"Marble, Tiles and Light fixer"}
          itemImg={marbleImg}
          textColor={"white"}
          btnBgColor={"#72f0a0"}
          btnColor={"black"}
          link={`/Services/MarbleTile&LightFixer`}
          paragraph={description.marbleligthtile}
        />
        <ServicesItem
          title={"Paint and Partition work"}
          itemImg={paintImg}
          textColor={"white"}
          btnBgColor={"#72f0a0"}
          btnColor={"black"}
          link={`/Services/Paint&PartitionWork`}
          paragraph={description.paintandpartitionwork}
        />

        <ServicesItem
          title={"Speciality in Furniture work"}
          itemImg={furnitureImg}
          textColor={"white"}
          btnBgColor={"#72f0a0"}
          btnColor={"black"}
          link={`/Services/SpecialityInFurnitureWork`}
          paragraph={description.furniturework}
        />
        <ServicesItem
          title={"All kind of Electric work"}
          itemImg={electricImg}
          textColor={"white"}
          btnBgColor={"#72f0a0"}
          btnColor={"black"}
          link={`/Services/AllKindOfElectricWork`}
          paragraph={description.electricwork}
        />
        <ServicesItem
          title={"House Keeping & Maid service"}
          itemImg={houseKeepingImg}
          textColor={"white"}
          btnBgColor={"#72f0a0"}
          btnColor={"black"}
          link={`/Services/HouseKeeping&MaidService`}
          paragraph={description.houseKeeping}
        />
        <ServicesItem
          title={"Professional Handyman"}
          itemImg={handymanImg}
          textColor={"white"}
          btnBgColor={"#72f0a0"}
          btnColor={"black"}
          link={`/Services/ProfessionalHandyman`}
          paragraph={description.profectionalhandyman}
        />
      </Carousel>
    </div>
  );
}

export default Services;
