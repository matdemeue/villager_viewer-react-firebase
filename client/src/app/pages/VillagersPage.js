import React, { } from 'react';

import './VillagersPage.scss';
import { VillagersList } from '../components/villagers';

const VillagersPage = ({children}) => {
  return (
    <div className="page page--villagers">
      <div className="container">
        <div className="row">
          <div className="col-12 pt-5">
            <h1>Villagers</h1>
          </div>
        </div>
        <VillagersList/>
      </div>
    </div>
  );
};

export default VillagersPage;