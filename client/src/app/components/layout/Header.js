import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import $ from 'jquery';

import * as Routes from '../../routes';

import './Header.scss';

import logo from '../../images/general/logo-acnh.png';

const Header = ({children}) => {
  let location = useLocation();
  // const [homepage, setHomepage] = useState(null);
  // let location = useLocation();
  // console.log(location)
  // useEffect(() => {
  //   if(location.pathname !== '/') {
  //     $('.navbar-brand').on('click', (e)  => { 
  //       $('.navbar-collapse').collapse({
  //         toggle: false
  //       })
  //     });
  //   } else {
  //     $('.navbar-brand').on('click', (e)  => { 
  //       $('.navbar-collapse').collapse('hide')
  //     });
  //   }
  // }, [location])

  return (
    <header className="app-header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light navigation">
        {location.pathname === '/' 
        ? <h1 className="navbar-brand">
            <Link to={Routes.LANDING} className="logo__link">
              <img src={logo} href="acnh logo" className="navbar-img" />
            </Link>
          </h1>
        : <h1 className="navbar-brand" data-toggle="collapse" data-target="#navbarSupportedContent">
            <Link to={Routes.LANDING} className="logo__link">
              <img src={logo} href="acnh logo" className="navbar-img" />
            </Link>
          </h1> }
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto justify-content-end flex-grow-1">
            <li className="nav-item" data-toggle="collapse" data-target="#navbarSupportedContent">
              <NavLink to={Routes.VILLAGERS} className="nav-link" activeClassName="active">Villagers</NavLink>
            </li> 
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
