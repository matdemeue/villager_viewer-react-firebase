import React, {useEffect, useState, Fragment} from 'react';
import { Link } from 'react-router-dom';
import { useFirestore } from '../../services/firebase/firestore.services';
import * as Routes from '../../routes';
import VillagerSearch from './VillagerSearch';
import './VillagerList.scss';

const VillagersList = () => {
  const [villagers, setVillagers] = useState();
  const {getVillagers} = useFirestore();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getVillagers();
      setVillagers(data);
    };

    fetchData();
  }, [])

  const searchVillager = (inputField) => {
    var filter, h5, i, txtValue;
    console.log(inputField)
    filter = inputField.toUpperCase();

    var list = document.querySelector(".villagers-list");
    var art = list.getElementsByTagName("article");
    
    for (i = 0; i < art.length; i++) {
      h5 = art[i].getElementsByTagName("h5")[0];
      console.log(h5)
      txtValue = h5.textContent || h5.isnnerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        art[i].style.display = "";
      } else {
        art[i].style.display = "none";
      }
    }
  }

  return (
    <Fragment>
    <div className="row pt-5">
      <VillagerSearch searchVillager={searchVillager}/>
    </div> 
    <div className="villagers-list py-5">
      <div className="row">
      {!!villagers 
        ? villagers.map((villager) => {
          return (
              <article className="col-12 col-md-6 col-lg-4 col-xl-3 villager-item" key={villager.uid}>
                <div className="card" data-id={villager.uid}>
                  <picture className="card-img-top d-flex justify-content-center">
                    {!!villager.icon_uri ? <img src={villager.icon_uri} alt={villager.name['name-EUnl']} /> : <Fragment></Fragment>}
                  </picture>
                  <div className="card-body d-flex flex-column align-items-center">
                    <h5 className="card-title  text-truncate">{villager.name['name-EUnl']}</h5>   
                    <Link to={Routes.VILLAGER_DETAIL.replace(':id', villager.uid)} className="btn btn-primary">Look at me!</Link>            
                  </div>
                </div>
            </article>
          )
        })
        : <div className="col-12"><p>No villagers</p></div>
      }
      </div>
    </div>
    </Fragment>
  )
};

export default VillagersList;