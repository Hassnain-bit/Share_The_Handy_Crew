import React from "react";
import Headings from "../Common/Headings";
import TeamItem from "./TeamItem";

function Team() {
  return (
    <div className="pt-5 pb-5 team-section ">
      <div className="section-padding container">
        <Headings textColor={"white"} title={"Our Team"} />
        <div className="row justify-content-between mt-2">
        
        <TeamItem delayTime={"0.5s"}/>
        <TeamItem delayTime={"1s"}/>
        <TeamItem delayTime={"1.5s"}/>
        <TeamItem delayTime={"2s"}/>
        <TeamItem delayTime={"2.5s"}/>
        <TeamItem delayTime={"3s"}/>
          
    </div>
      </div>
    </div>
  );
}

export default Team;
