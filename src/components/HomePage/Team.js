import React from "react";
import Headings from "../Common/Headings";
import TeamItem from "./TeamItem";

function Team() {
  return (
    <div className="pt-5 pb-5 team-section ">
      <div className="section-padding container">
        <Headings textColor={"white"} title={"Our Team"} />
        <div className="row justify-content-between mt-2">
        
        <TeamItem delayTime={"0.5s"} name={"Yaqoob Younas"} email={"yaqoob.younas@gmail.com"} phone={"+971558486166"} post={"Director Operations"}/>
        <TeamItem delayTime={"0.5s"} name={"Hassan Mehar"} email={"hassanmehar994@gmail.com"} phone={"+971527078295"} post={"Senior Manager"}/>
        <TeamItem delayTime={"0.5s"} name={"Muhammad Ans"} email={"mohammad.ans66@gmail.com"} phone={"+971581574855"} post={"Customer Services Accountant"}/>
          
    </div>
      </div>
    </div>
  );
}

export default Team;
