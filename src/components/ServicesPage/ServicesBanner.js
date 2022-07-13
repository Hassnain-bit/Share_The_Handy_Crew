import React from 'react'

function ServicesBanner(props) {
    return (
        <div className="servicesBanner">
            <img alt="bannerBgImg" src={props.img}/>

            <div className="center-content col-12 pl-15 pr-15">
                <h1>{props.heading}</h1>
            </div>
        </div>
    )
}

export default ServicesBanner
