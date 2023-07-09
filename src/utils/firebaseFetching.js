import {
    collection,
    doc,
    getDoc,
    where,
    query,
    addDoc,
    getDocs,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const productsCollection = collection (db, 'products');
const ordersCollection = collection(db, "order");

export const getAllProducts = async () => {
    try {
      const request = getDocs(productsCollection);
      const response = await request;
      const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      return data;
    } catch (error) {
      console.log(error);
    }
  };

export const getProductById = async (id) => {
    try {
      const docReference = doc(productsCollection, id);
      const request = getDoc(docReference);
      const response = await request;
      const data = response.data();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  export const addNewOrder = async (order) => {
    const request = addDoc(ordersCollection, order);
    const response = await request;
    const orderID = response.id;
    return orderID;
  };




