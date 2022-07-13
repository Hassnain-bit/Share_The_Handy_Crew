import React from "react";
import Headings from "../components/Common/Headings";
import ServicesBanner from "../components/ServicesPage/ServicesBanner";
import ServicesText from "../components/ServicesPage/ServicesText";
import "../styles/ServicesBanner.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import paintImg1 from "./../images/Paint & Partition Work 1.jpg";
import paintImg2 from "./../images/Paint & Partition Work 2.jpg";

function ServicesPage() {
  return (
    <div>
      <ServicesBanner />

      <div className="mt-5 mb-5">
        <div className="section-padding container">
          <div>
            <Headings textColor={"white"} title={"Paint and Partition work"} />
          </div>

          <Switch>
                    
                    <Route exact path="/Paint&PartitionWOrk">
                    <ServicesText firstDesc={"Abdullah"} firstImg={paintImg1} secondDesc={"Hassnain"} secondImg={paintImg2}/>
                    </Route>
                    
                    
                </Switch>
            
          
        </div>
      </div>
      
    </div>
  );
}

export default ServicesPage;
