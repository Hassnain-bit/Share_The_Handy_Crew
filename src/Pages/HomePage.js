import React from 'react'
import '../styles/Banner.css'
import '../styles/Services.css'
import '../styles/Team.css'
import Banner from '../components/HomePage/Banner'
import Services from '../components/HomePage/Services'
import AboutUs from '../components/HomePage/AboutUs'
import ContactUs from '../components/HomePage/ContactUs'
import Team from '../components/HomePage/Team'

function HomePage() {
    return (
        <div>
       
            <Banner/>
            <Services/>
            <AboutUs/>
            <Team/>
            <ContactUs  headingColor={"black"} backgroundColor={"#F5F5F5"} inputTitleColor={"black"} addClass={"custom-input"} btnBg={"black"} btnColor={"white"}/>
        </div>
    )
}

export default HomePage
