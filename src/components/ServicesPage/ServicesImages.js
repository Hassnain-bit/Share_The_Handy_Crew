import React from 'react'

function ServicesImages(props) {
    return (
        <div className="col-md-11">
            <div className="services-img mr-5 ml-5">
            <img  alt="serviceImg" src={props.itemImg} style={{margin:"0 10px"}}/>
            </div>
        </div>
    )
}

export default ServicesImages
