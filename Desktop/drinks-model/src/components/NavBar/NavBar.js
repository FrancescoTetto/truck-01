import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SideBarData } from "./SideBarData";
import "./NavBar.css";
import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className='navbar-1'>
          <Link to='#' className='menu-bars-1'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <img src='./images/usv.png' className='navbar-logo' />
          <img src='./images/facebook.png' className='navbar-facebook' />
          <img src='./images/twitter.png' className='navbar-twitter' />
          <img src='./images/email.png' className='navbar-email' />
        </div>

        <nav className={sidebar ? "nav-menu-1 active" : "nav-menu-1"}>
          <ul className='nav-menu-items-1' onClick={showSidebar}>
            <li className='navbar-toggle-1'>
              <Link to='#' className='menu-bars-1'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SideBarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
