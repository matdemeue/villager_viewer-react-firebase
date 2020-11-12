import React, { } from 'react';

import { Hero } from '../components/homepagina';
import { YoutubeMovie } from '../components/layout';

import './HomePage.scss';

const HomePage = ({children}) => {
  const youtubeUrl = "https://www.youtube.com/embed/8AkEFot5UF0"
  return (
    <div className="page page--home">
      <div className="container">
        <Hero />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 mb-5">
            <YoutubeMovie url={youtubeUrl} width={"100%"} height={"500px"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;