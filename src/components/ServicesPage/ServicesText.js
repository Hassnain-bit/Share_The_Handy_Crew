import React from "react";
import Headings from "../Common/Headings";
import Carousel from "react-multi-carousel";
import paintImg from "./../../images/paint.jpg";
import bannerImg from "./../../images/banner.jpg";
import ServicesImages from "./ServicesImages";

function ServicesText() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3,
        },
        desktop: {
          breakpoint: { max: 3000, min: 768 },
          items: 1,
        },
        tablet: {
          breakpoint: { max: 768, min: 540 },
          items: 1,
        },
        mobile: {
          breakpoint: { max: 540, min: 0 },
          items: 1,
        },
      };


  return (
    <div className="mt-5 mb-5">
      <div className="container">
        <div>
          <Headings textColor={"white"} title={"Paint and Partition work"} />
        </div>
        <div className="mt-4 mb-4">
        <p className="f-size-09 line-height padding-left padding-right whiteColor">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </p>
        <p className="f-size-09 line-height padding-left padding-right whiteColor">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).There
          are many variations of passages of Lorem Ipsum available, but the
          majority have suffered alteration in some form, by injected humour, or
          randomised words which don't look even slightly believable. If you are
          going to use a passage of Lorem Ipsum, you need to be sure there isn't
          anything embarrassing hidden in the middle of text.
        </p>
        </div>
        <div className="pt-5  padding-left padding-right">
        <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["mobile"]}
        
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={500}
        ssr={true}
        centerMode={true}
      >
        <ServicesImages itemImg={bannerImg}/>
        <ServicesImages itemImg={paintImg}/>
        <ServicesImages itemImg={bannerImg}/>
        <ServicesImages itemImg={paintImg}/>
      </Carousel>
        </div>
        <p className="f-size-09 line-height padding-left padding-right whiteColor">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </p>
        <p className="f-size-09 line-height padding-left padding-right whiteColor">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).There
          are many variations of passages of Lorem Ipsum available, but the
          majority have suffered alteration in some form, by injected humour, or
          randomised words which don't look even slightly believable. If you are
          going to use a passage of Lorem Ipsum, you need to be sure there isn't
          anything embarrassing hidden in the middle of text.
        </p>
      </div>
    </div>
  );
}

export default ServicesText;
