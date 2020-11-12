import React, { useEffect, useState  } from 'react';
import { useParams } from 'react-router';

import {VillagerDetail } from '../components/villagers';
import { useFirestore } from '../services';

const VillagersDetailPage = ({}) => {
  const { id } = useParams();
  const [villager, setVillager] = useState(null);
  const {getVillager} = useFirestore();

  useEffect(() => {
    const fetchData = async (q) => {
      const data = await getVillager(id);
      setVillager(data);
    }; 

    if (!villager) {
      fetchData();
    }
  }, []);

  return (
    <div className="page page--villager">
      <div className="container">
        <VillagerDetail villager={villager} />
      </div>
    </div>
  );
};

export default VillagersDetailPage;