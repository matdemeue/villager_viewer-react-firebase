import React from 'react';

import { Link } from 'react-router-dom';
import * as Routes from '../../routes';

import './VillagerDetail.scss';

const VillagerDetail = ({villager}) => {

  return (
    <div className="row justify-content-center villager">
      {!!villager
      ? 
        (
          <div className="col-12 col-lg-6 d-flex justify-content-center">
            <div className="d-flex flex-column align-items-center w-100">
                <div className="d-flex justify-content-center w-100">
                    <img src={villager.icon_uri} alt={villager.name['name-EUnl']} className="villager__image"/>
                    <h2>{villager.name['name-EUnl']}</h2>
                </div>
                <div className="villager__badges d-flex justify-content-center w-100">
                    <span className="badge badge-primary">{villager.gender}</span>
                    <span className="badge badge-primary">Birthday: {villager.birthday}</span>
                    <span className="badge badge-primary">Personality: {villager.personality}</span>
                </div>
                <div className="villager__fullImage">
                    <h5>Full Image of {villager.name['name-EUnl']}</h5>
                    <img src={villager.image_uri} alt={villager.name['name-EUnl']} />
                </div>
                <div className="d-flex justify-content mt-3">
                  <Link to={Routes.VILLAGERS} className="btn btn-primary">Go back!</Link>
                </div>
            </div>
          </div>
        )
      : <p>No villager.</p>
      }
    </div>
  )
};

export default VillagerDetail;