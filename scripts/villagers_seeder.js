import { v4 as uuidv4 } from 'uuid';
import faker from 'faker';
import { admin, app, db, generateTimestamps,generateValueBetweenMinAndMax } from './firebase';

(async () => {
  const fetch = require('node-fetch')

  let collectionRef = db.collection('villagers');

  // Create a Pokemon
  const createVillager = (villager) => {
    // Add a document with faker
    const data = {
      ...villager,
      ...generateTimestamps()
    };

    collectionRef.add(data).then(documentReference => {
      console.log(`Added document with name: ${documentReference.id}`);
    });
  };

  const fetchVillagers = async () => {
    const response = await fetch("https://acnhapi.com/v1/villagers");
    const jsonData = await response.json();
    return jsonData;
  }

  // Create pokemons via promises
  const createVillagers = async () => {
    const villagers = await fetchVillagers();
    const promises = [];
    Object.entries(villagers).forEach(([key, value]) => {
      promises.push(createVillager(value));
    });
    
    return await Promise.all(promises);
  };

  await createVillagers(); 

})();