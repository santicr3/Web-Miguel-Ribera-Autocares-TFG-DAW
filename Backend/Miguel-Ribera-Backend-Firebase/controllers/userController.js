import CryptoJS from "crypto-js";
import dotenv from "dotenv";
import firebase from "../firebase.js";
import User from "../models/userModel.js";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
  limit,
} from "firebase/firestore";

dotenv.config();

const { CRYPTO_KEY } = process.env;

const db = getFirestore(firebase);

export const createUser = async (req, res, next) => {
  try {
    const data = req.body;
    const { email, dni } = req.body;
    const q = query(
      collection(db, "users"),
      where("email", "==", email),
      where("dni", "==", dni)
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      res.status(400).send("User already exists");
    } else {
      const docRef = await addDoc(collection(db, "users"), data);
      res.status(200).send({
        message: "User created successfully",
        id: docRef.id,
        user: data,
      });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const users = await getDocs(collection(db, "users"));
    const userArray = [];

    if (users.empty) {
      res.status(400).send("No Users found");
    } else {
      users.forEach((doc) => {
        const user = new User(
          doc.id,
          doc.data().email,
          doc.data().password,
          doc.data().rides,
          doc.data().dni
        );
        userArray.push(user);
      });

      res.status(200).send(userArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = doc(db, "users", id);
    const data = await getDoc(user);
    if (data.exists()) {
      res.status(200).send(data.data());
    } else {
      res.status(404).send("user not found");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const user = doc(db, "users", id);
    await updateDoc(user, data);
    res.status(200).send({message: "user updated successfully"});
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, "users", id));
    res.status(200).send({state: true});
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const secretKey = CRYPTO_KEY;

    const bytes = CryptoJS.AES.decrypt(password, secretKey);
    const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);

    const q = query(
      collection(db, "users"),
      where("email", "==", email),
      limit(1)
    );
    const users = await getDocs(q);

    if (!users.empty) {
      users.forEach((doc) => {
        const userData = doc.data();
        if (userData.password === decryptedPassword) {
          res.status(200).send({ state: true, id: doc.id, user: doc.data() });
        } else {
          res.status(200).send(false);
        }
      });
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send("Internal server error");
  }
};

export const getRides = async (req, res, next) => {
  try {
    const email = req.body.email;

    const q = query(
      collection(db, "users"),
      where("email", "==", email),
      limit(1)
    );
    const users = await getDocs(q);

    if (!users.empty) {
      users.forEach((doc) => {
        const userData = doc.data();
        if (userData.hasOwnProperty("rides")) {
          res.status(200).send({rides: userData.rides});
        } else {
          res.status(404).send("User rides not found");
        }
      });
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};