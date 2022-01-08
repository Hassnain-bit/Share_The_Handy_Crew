import React from "react";
import Footer from "../components/Common/Footer";
import Navbar from '../components/Common/Navbar'
import '../styles/Navbar.css'
import '../styles/Footer.css'
import ServicesPage from "./ServicesPage";

function ConsumerSide(props) {

    

    


    return (
        <div className={props.menu ? "overflow hidden" : "overflow"}>
        <Navbar menu={props.menu} setMenu={props.setMenu}/>
        <div className={props.menu ? "main-overlay active" : "main-overlay"}>
        </div>
            
            <div className={props.menu ? "main-section active" : "main-section"}>

            
           <ServicesPage/>

            <Footer/>
            </div>

        </div>
    )
}

export default ConsumerSide
