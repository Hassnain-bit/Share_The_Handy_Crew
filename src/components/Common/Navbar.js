import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  const [dropServices, setDropServices] = useState(false);

  // Body Scroll
  const BodyScrollHidden = () => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = originalStyle);
  };

  const BodyScrollVisible = () => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "visible";
    return () => (document.body.style.overflow = originalStyle);
  };

  // Method For Menu
  const handleMenu = (e) => {
    props.setMenu(!props.menu);
    if (!props.menu) {
      BodyScrollHidden();
    } else {
      BodyScrollVisible();
    }
  };

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
      <Link to={`/`}>
        <h5 className="f-bold">The Handy Crew</h5>
      </Link>
      <ul>
        <Link to={`/`}>
          <li>Home</li>
        </Link>
        <li className="dropdown-btn">
          <div>Services</div>

          <div className="dropdown-content">
            <div className="align">
              <div className="blocks">
              <Link to={`/Services/Curtain&TVFixer`}>
                <div>Curtain and TV Fixing</div>
              </Link>
              <Link to={`/Services/ACRepair&Servicing`}>
                <div>A/C repair and servicing</div>
              </Link>
              <Link to={`/Services/MarbleTile&LightFixer`}>
                <div>Marble, Tile & Light fixer</div>
              </Link>
              <Link to={`/Services/Paint&PartitionWork`}>
                <div>Paint and Partition work</div>
              </Link>
              </div>
              <div className="blocks">
              <Link to={`/Services/SpecialityInFurnitureWork`}>
                <div>Speciality in Furniture work</div>
              </Link>
              <Link to={`/Services/AllKindOfElectricWork`}>
                <div>All kind of Electric work</div>
              </Link>
              <Link to={`/Services/HouseKeeping&MaidService`}>
                <div>House Keeping & Maid service</div>
              </Link>
              <Link to={`/Services/ProfessionalHandyman`}>
                <div>Professional Handyman</div>
              </Link>
              </div>
            </div>
          </div>
        </li>
        <Link to="/AboutUs">
          <li>About us</li>
        </Link>
        <Link to="/ContactUs">
        <li>Contact us</li>
        </Link>
      </ul>

      {/* Mobile SideBar */}

      <div className="M-menu" onClick={(e) => handleMenu(e)}>
        <div class={props.menu ? "icon menu-icon open" : "icon menu-icon"}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={props.menu ? "M-sideBar active" : "M-sideBar"}>
        <ul>
          <div onClick={(e) => handleMenu(e)}>
            <Link to={`/`}>
              <li>
                <div>Home</div>
              </li>
            </Link>
          </div>
          <li onClick={(e) => setDropServices(!dropServices)}>
            <div
              className={
                dropServices ? "M-dropdown-btn active" : "M-dropdown-btn"
              }
            >
              Services
            </div>
            <div
              className={
                dropServices
                  ? "M-dropdown-content active"
                  : "M-dropdown-content"
              }
            >
              <div onClick={(e) => handleMenu(e)}>
                <Link to={`/Services/Curtain&TVFixer`}>
                  <li>
                    <div>Curtain and TV Fixing</div>
                  </li>
                </Link>
              </div>

              <div onClick={(e) => handleMenu(e)}>
                <Link to={`/Services/ACRepair&Servicing`}>
                  <li>
                    <div>A/C repair and servicing</div>
                  </li>
                </Link>
              </div>

              <div onClick={(e) => handleMenu(e)}>
                <Link to={`/Services/MarbleTile&LightFixer`}>
                  <li>
                    <div>Marble, Tile & Light fixer</div>
                  </li>
                </Link>
              </div>

              <div onClick={(e) => handleMenu(e)}>
                <Link to={`/Services/Paint&PartitionWork`}>
                  <li>
                    <div>Paint and Partition work</div>
                  </li>
                </Link>
              </div>

              <div onClick={(e) => handleMenu(e)}>
                <Link to={`/Services/SpecialityInFurnitureWork`}>
                  <li>
                    <div>Speciality in Furniture work</div>
                  </li>
                </Link>
              </div>

              <div onClick={(e) => handleMenu(e)}>
                <Link to={`/Services/AllKindOfElectricWork`}>
                  <li>
                    <div>All kind of Electric work</div>
                  </li>
                </Link>
              </div>

              <div onClick={(e) => handleMenu(e)}>
                <Link to={`/Services/HouseKeeping&MaidService`}>
                  <li>
                    <div>House Keeping & Maid service</div>
                  </li>
                </Link>
              </div>

              <div onClick={(e) => handleMenu(e)}>
                <Link to={`/Services/ProfessionalHandyman`}>
                  <li>
                    <div>Professional Handyman</div>
                  </li>
                </Link>
              </div>
            </div>
          </li>

          <div onClick={(e) => handleMenu(e)}>
            <Link to={`/AboutUs`}>
              <li>
                <div>About us</div>
              </li>
            </Link>
          </div>

          <div onClick={(e) => handleMenu(e)}>
            <Link to={`/ContactUs`}>
              <li>
                <div>Contact us</div>
              </li>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
