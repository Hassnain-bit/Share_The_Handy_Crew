import React from 'react'
import ServicesItem from './ServicesItem'
import constructionImg from "./../../images/under-constructions.svg";

function AboutUs() {
    return (
        <div className="pt-5 pb-5 about-section off-whiteBgColor">
            <ServicesItem title={"About us"} itemImg={constructionImg} textColor={"black"} btnBgColor={"black"} btnColor={"white"}/>
        </div>
    )
}

export default AboutUs
