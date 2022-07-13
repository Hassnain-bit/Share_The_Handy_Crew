import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/Common.css";
import "./styles/myBootstrap.css";
import "./styles/CustomCarousel.css";
import "./styles/WhattsappChat.css";
import "./styles/WidgetIcons.css";
import "react-multi-carousel/lib/styles.css";
import ConsumerSide from "./Pages/ConsumerSide";
import AdminSide from "./Pages/AdminSide";
import OpenFromTop from "./components/Common/OpenFromTop";

import ServicesPaintPage from "./components/ServicesPage/ServicesPaintPage";
import ServicesCurtainPage from "./components/ServicesPage/ServicesCurtainPage";
import ServicesACPage from "./components/ServicesPage/ServicesACPage";
import WattsappChat from "./components/Common/WattsappChat";
import TelephoneWidget from "./components/Common/TelephoneWidget";
import EmailWidget from "./components/Common/EmailWidget";
import ServicesMarblePage from "./components/ServicesPage/ServicesMarblePage";
import ServicesFurniturePage from "./components/ServicesPage/ServicesFurniturePage";
import ServicesElectricPage from "./components/ServicesPage/ServicesElectricPage";
import ServicesHouseKeepingPage from "./components/ServicesPage/ServicesHouseKeepingPage";
import ServicesHandymanPage from "./components/ServicesPage/ServicesHandymanPage";
import ContactUsPage from "./Pages/ContactUsPage";
import AboutUsPage from "./Pages/AboutUsPage";

import Footer from "./components/Common/Footer";
import Navbar from "./components/Common/Navbar";
import "./styles/Navbar.css";
import "./styles/Footer.css";
import "./styles/ServicesBanner.css";
import HomePage from "./Pages/HomePage";
function App() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <Router>
      <Navbar menu={menu} setMenu={setMenu} />
        <Switch>

        <OpenFromTop>
          <Route path="/AdminTheHandyCrewsCom">
            <AdminSide />
          </Route>

          <div className={menu ? "App active" : "App"}>
            {/* <Route path="/">
              <OpenFromTop>
                <ConsumerSide menu={menu} setMenu={setMenu} />
              </OpenFromTop>
            </Route> */}

            <div className={menu ? "overflow hidden" : "overflow"}>
              
              <div
                className={menu ? "main-overlay active" : "main-overlay"}
              ></div>

              <div className={menu ? "main-section active" : "main-section"}>
                <Route exact path="/">
                  <HomePage />
                </Route>

                <Route exact path="/Services/Curtain&TVFixer">
                  <ServicesCurtainPage />
                </Route>

                <Route exact path="/Services/ACRepair&Servicing">
                  <ServicesACPage />
                </Route>

                <Route exact path="/Services/MarbleTile&LightFixer">
                  <ServicesMarblePage />
                </Route>

                <Route exact path="/Services/Paint&PartitionWork">
                  <ServicesPaintPage />
                </Route>

                <Route exact path="/Services/SpecialityInFurnitureWork">
                  <ServicesFurniturePage />
                </Route>

                <Route exact path="/Services/AllKindOfElectricWork">
                  <ServicesElectricPage />
                </Route>

                <Route exact path="/Services/HouseKeeping&MaidService">
                  <ServicesHouseKeepingPage />
                </Route>

                <Route exact path="/Services/ProfessionalHandyman">
                  <ServicesHandymanPage />
                </Route>

                <Route exact path="/ContactUs">
                  <ContactUsPage />
                </Route>

                <Route exact path="/AboutUs">
                  <AboutUsPage />
                </Route>
              </div>
            </div>
          </div>
          
          
          </OpenFromTop>
        </Switch>

        <TelephoneWidget />
        <EmailWidget />
        <WattsappChat />

        <Footer />
      </Router>
    </>
  );
}

export default App;
