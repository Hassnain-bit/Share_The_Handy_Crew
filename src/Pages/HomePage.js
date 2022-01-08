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
            <ContactUs/>
        </div>
    )
}

export default HomePage
