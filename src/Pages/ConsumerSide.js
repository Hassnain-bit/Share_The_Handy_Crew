import React from "react";
import Footer from "../components/Common/Footer";
import Navbar from '../components/Common/Navbar'
import '../styles/Navbar.css'
import '../styles/Footer.css'
import '../styles/ServicesBanner.css'
import HomePage from "./HomePage";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import ServicesPaintPage from "../components/ServicesPage/ServicesPaintPage";
import ServicesCurtainPage from "../components/ServicesPage/ServicesCurtainPage";
import ServicesACPage from "../components/ServicesPage/ServicesACPage";
import WattsappChat from "../components/Common/WattsappChat";
import TelephoneWidget from "../components/Common/TelephoneWidget";
import EmailWidget from "../components/Common/EmailWidget";
import ServicesMarblePage from "../components/ServicesPage/ServicesMarblePage";
import ServicesFurniturePage from "../components/ServicesPage/ServicesFurniturePage";
import ServicesElectricPage from "../components/ServicesPage/ServicesElectricPage";
import ServicesHouseKeepingPage from "../components/ServicesPage/ServicesHouseKeepingPage";
import ServicesHandymanPage from "../components/ServicesPage/ServicesHandymanPage";
import ContactUsPage from "./ContactUsPage";
import AboutUsPage from "./AboutUsPage";

function ConsumerSide(props) {

    return (
        <div className={props.menu ? "overflow hidden" : "overflow"}>
        <Navbar menu={props.menu} setMenu={props.setMenu}/>
        <div className={props.menu ? "main-overlay active" : "main-overlay"}>
        </div>
            
            <div className={props.menu ? "main-section active" : "main-section"}>
            
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    

                    <Route exact path="/Services/Curtain&TVFixer">
                    <ServicesCurtainPage/>
                    </Route>

                    <Route exact path="/Services/ACRepair&Servicing">
                    <ServicesACPage/>
                    </Route>

                    <Route exact path="/Services/MarbleTile&LightFixer">
                    <ServicesMarblePage/>
                    </Route>

                    <Route exact path="/Services/Paint&PartitionWork">
                    <ServicesPaintPage/>
                    </Route>

                    <Route exact path="/Services/SpecialityInFurnitureWork">
                    <ServicesFurniturePage/>
                    </Route>

                    <Route exact path="/Services/AllKindOfElectricWork">
                    <ServicesElectricPage/>
                    </Route>

                    <Route exact path="/Services/HouseKeeping&MaidService">
                    <ServicesHouseKeepingPage/>
                    </Route>

                    <Route exact path="/Services/ProfessionalHandyman">
                    <ServicesHandymanPage/>
                    </Route>

                    <Route exact path="/ContactUs">
                    <ContactUsPage/>
                    </Route>
                    
                    <Route exact path="/AboutUs">
                    <AboutUsPage/>
                    </Route>
                    
                </Switch>

                <TelephoneWidget/>
                <EmailWidget/>
               <WattsappChat/>

            <Footer/>
            </div>

        </div>
    )
}

export default ConsumerSide
