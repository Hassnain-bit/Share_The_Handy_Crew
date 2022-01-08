import React from 'react'
import bannerImg from "./../../images/servicesBanner.jpg";

function ServicesBanner() {
    return (
        <div className="servicesBanner">
            <img alt="bannerBgImg" src={bannerImg}/>

            <div className="center-content col-12">
                <h1>We Provide TRUST</h1>
            </div>
        </div>
    )
}

export default ServicesBanner
