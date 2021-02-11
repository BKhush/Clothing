import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();
firestore
  .collection("users")
  .doc("JHmkv9vaR7ERDMQuA5nR")
  .collection("cardItems")
  .doc("SSDrU6AzwMRZczlhjvah ");

