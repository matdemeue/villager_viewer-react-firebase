import React, { useContext } from 'react';
import 'firebase/firestore';

import { useFirebase } from './firebase.services';

const FirestoreContext = React.createContext(null);
const useFirestore = () => useContext(FirestoreContext);

const FirestoreProvider = ({children}) => {
  const { app } = useFirebase();
  const db = app.firestore();

  const getVillagers = async () => {
    const query = db.collection('villagers').orderBy('name.name-EUnl', 'asc');
    const querySnapshot = await query.get();
    const villagers = querySnapshot.docs.map((doc) => {
      return {
        uid: doc.id,
        ...doc.data()
      }
    });
    return villagers;
  };

  const getVillager = async (id) => {
    const docRef = await db.collection('villagers').doc(id);
    const docSnapshot = await docRef.get();
    return {
      uid: docSnapshot.id,
      ...docSnapshot.data()
    };
  };

  return (
    <FirestoreContext.Provider value={{getVillagers, getVillager}}>
      {children}
    </FirestoreContext.Provider>
  );
};

export {
  FirestoreContext,
  FirestoreProvider,
  useFirestore,
};