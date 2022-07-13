import React from 'react'
import ContactUs from '../components/HomePage/ContactUs';
import ServicesBanner from '../components/ServicesPage/ServicesBanner'
import handymanBannerImg from "../images/Contact Us.jpg";

function ContactUsPage() {
    return (
        <div>
            <ServicesBanner img={handymanBannerImg} heading={"GET IN TOUCH"}/>
            <ContactUs headingColor={"white"} backgroundColor={"black"} inputTitleColor={"white"} addClass={"custom-input  white"} btnBg={"#72f0a0"} btnColor={"black"}/>
        </div>
    )
}

export default ContactUsPage
