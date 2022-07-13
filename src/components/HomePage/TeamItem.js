import React from 'react'
import ScrollAnimation from "react-animate-on-scroll";

function TeamItem(props) {
    return (
        <div className="col-lg-4 col-md-6">
        <ScrollAnimation animateIn="flipInX" animateOnce="true" style={{animationDelay:props.delayTime}} offset="1100">
          <div className="team-box pt-4 pb-4">
              <h4 className="f-bold pb-4">{props.name}</h4>
              <div className="content-team-box">
                <div className="item-team-box">
                  <i class="bi bi-bag"></i>
                  <span>{props.post}</span>
                </div>
                <div className="item-team-box">
                <i class="bi bi-envelope"></i>
                  <span>{props.email}</span>
                </div>
                <div className="item-team-box">
                  <i class="bi bi-telephone"></i>
                  <span>{props.phone}</span>
                </div>
              </div>
              <div className="social-team-box pt-4">
              <div><i class="bi bi-facebook"></i></div>
              <div><i class="bi bi-twitter"></i></div>
              <div><i class="bi bi-instagram"></i></div>
              <div><i class="bi bi-whatsapp"></i></div>
              </div>
            </div>
            </ScrollAnimation>
          </div>
    )
}

export default TeamItem
