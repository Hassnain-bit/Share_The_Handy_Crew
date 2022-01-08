import React, { useState } from "react";

function Navbar(props) {
    
  const [dropServices, setDropServices] = useState(false);

// Body Scroll
  const BodyScrollHidden = () => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = originalStyle);
  }

  const BodyScrollVisible = () => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "visible";
    return () => (document.body.style.overflow = originalStyle);
  }

  // Method For Menu
  const handleMenu = (e) => {
      props.setMenu(!props.menu);
      if(!props.menu){
        BodyScrollHidden();
      }
      else {
        BodyScrollVisible();
      }
  }

  // Change Navbar Bg Color on Scroll
  const [navBar, setNavBar] = useState(false);

  const navBarBg = () => {
    if (window.scrollY >= 250) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", navBarBg);


  return (
    <div className={navBar ? "D-navbar active" : "D-navbar"}>
      <h5 className="f-bold">The Handy Crew</h5>
      <ul>
        <li>Home</li>
        <li className="dropdown-btn">
          <div>Services</div>
          
          <div className="dropdown-content">
          <div className="align">
            <a href="#abc">Paint and partition work</a>
            <a href="#abc">Link 2</a>
            <a href="#abc">Link 3</a>
          </div>
          </div>
          
        </li>
        <li>About us</li>
        <li>Contact us</li>
      </ul>

      <div className="M-menu" onClick={(e) => handleMenu(e)}>
        <div class={props.menu ? "icon menu-icon open" : "icon menu-icon"}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={props.menu ? "M-sideBar active" :  "M-sideBar"}>
        <ul>
          <li>Home</li>
          <li onClick={(e)=> setDropServices(!dropServices)}>
            <div className={dropServices ? "M-dropdown-btn active" : "M-dropdown-btn"}>Services</div>
            <div className={dropServices ? "M-dropdown-content active" : "M-dropdown-content"}>
            <li href="#abc">Link 1</li>
            <li href="#abc">Link 2</li>
            <li href="#abc">Link 3</li>
          </div>
          </li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
