import React from 'react'
import ServicesBanner from '../components/ServicesPage/ServicesBanner'
import ServicesText from '../components/ServicesPage/ServicesText'
import '../styles/ServicesBanner.css'
function ServicesPage() {
    return (
        <div>
            <ServicesBanner/>
            <ServicesText/>
        </div>
    )
}

export default ServicesPage
