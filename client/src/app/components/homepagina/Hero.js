import React from 'react';

import logo from '../../images/general/logo-acnh.png'

import './Hero.scss';

const Hero = () => {

  return (
    <div className="row py-5 hero">
      <div className="col-12 col-lg-6 d-flex align-items-center hero__logo">
        <img src={logo} alt="acnh logo" />
      </div>
      <div className="col-12 col-lg-6 pl-lg-4 mt-4 mt-lg-0 d-flex flex-column justify-content-center hero__content">
        <h1>Welkom op onze ACNH Villager viewer!</h1>
        <p>Speel jij Animal Crossing New Horizon? Heb je altijd meer willen leren over de villagers die op je eiland komen wonen? Het kan nu! In deze villager viewer app kan je zoeken op naam van de villagers in de game en kan je daarna enkele details bekijken als geslacht, verjaardag en persoonlijkheid. Ook zie je er een foto van je villager in zijn favoriete habitat.</p>
      </div>
    </div>
  )
};

export default Hero;