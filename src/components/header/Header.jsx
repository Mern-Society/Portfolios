import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import "./header.css";

const Header = ({data}) => {
  const { isAuth} = useSelector(a => a.auth);
  const { profile } = data;
  /*============ Toggle  Menu======== */
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  }



  return (
 <header className="header">
  <nav className="nav container">
   {isAuth && profile ?  <div  className="nav__logo"
    onClick={() => handleLogout()}
   >
      {String(profile.nickname).toUpperCase()}
      </div> : 
       <a href="/" className="nav__logo">
      {String(profile && profile.nickname ? profile.nickname : 'Bugtech').toUpperCase()}
       </a>
      }

    <div className={Toggle ? "nav__menu show-menu" :
  "nav__menu"}>
      <ul className="nav__list grid">
          <li className= "nav__item">
          <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? 
            "nav__link active-link" : "nav__link"}>
          <i className="uil uil-estate nav__icon"></i>
          Home
          </a>
        </li>

        <li className= "nav__item">
          <a 
            href="#about" 
            onClick={() => setActiveNav("#about")} 
            className={activeNav === "#about" ? 
            "nav__link active-link" : "nav__link"}
          >
          <i className="uil uil-info nav__icon"></i>
          About
          </a>
        </li>

        <li className= "nav__item">
          <a 
            href="#skills" 
            onClick={() => setActiveNav("#skills")} 
            className={activeNav === "#skills" ? 
            "nav__link active-link" : "nav__link"}
          >
          <i className="uil uil-chart nav__icon"></i>
          Skills
          </a>
        </li>

        <li className= "nav__item">
          <a 
            href="#services" 
            onClick={() => setActiveNav("#services")} 
            className={activeNav === "#services" ? 
            "nav__link active-link" : "nav__link"}
          >
          <i className="uil uil-setting nav__icon"></i>
          Services
          </a>
        </li>

        <li className= "nav__item">
          <a 
            href="#portfolio" 
            onClick={() => setActiveNav("#portfolio")} 
            className={activeNav === "#portfolio" ? 
            "nav__link active-link" : "nav__link"}
          >
          <i className="uil uil-laptop nav__icon"></i>
          Portfolio
          </a>
        </li>

        <li className= "nav__item">
          <a 
            href="#contact" 
            onClick={() => setActiveNav("#contact")} 
            className={activeNav === "#contact" ? 
            "nav__link active-link" : "nav__link"}
          >
          <i className="uil uil-phone nav__icon"></i>
          Contact
          </a>
        </li>
      </ul>
      

      <i className="uil uil-times nav__close" onClick={() => 
        showMenu(!Toggle)}></i>
    </div>
<div className="nav__toggle" onClick={() => showMenu
  (!Toggle)}>
      <i className="uil uil-apps"></i>
    </div>
  </nav>
 </header>
  ); 
};

export default Header;