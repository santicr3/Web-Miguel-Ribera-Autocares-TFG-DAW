import firebase from '../firebase.js';
import Station from '../models/stationModel.js';
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

const db = getFirestore(firebase)

export const createStation = async (req, res, next) => {
    try {
      const data = req.body;
      await addDoc(collection(db, 'stations'), data);
      res.status(200).send('station created successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  export const getStations = async (req, res, next) => {
    try {
      const stations = await getDocs(collection(db, 'stations'));
      const stationArray = [];
  
      if (stations.empty) {
        res.status(400).send('No Stations found');
      } else {
        stations.forEach((doc) => {
          const station = new Station(
            doc.id,
            doc.data().address,
            doc.data().image,
            doc.data().lat,
            doc.data().longi,
          );
          stationArray.push(station);
        });
  
        res.status(200).send(stationArray);
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  export const getStation = async (req, res, next) => {
    try {
      const id = req.params.id;
      const station = doc(db, 'stations', id);
      const data = await getDoc(station);
      if (data.exists()) {
        res.status(200).send(data.data());
      } else {
        res.status(404).send('station not found');
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  export const updateStation = async (req, res, next) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const station = doc(db, 'stations', id);
      await updateDoc(station, data);
      res.status(200).send('station updated successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  export const deleteStation = async (req, res, next) => {
    try {
      const id = req.params.id;
      await deleteDoc(doc(db, 'stations', id));
      res.status(200).send('station deleted successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
  };