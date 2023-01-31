import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import "./ProfileScreen.css";
import { collection, query, where, getDocs } from "firebase/firestore";
import db from "../../../firebase";
import { QuerySnapshot } from "firebase/firestore";

const PlanScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "products"), where("active", "==", true));
    getDocs(q).then((querySnapshot) => {
      const products = {};
      querySnapshot.forEach(async (productDoc) => {
        products[productDoc.id] = productDoc.data();
        console.log("testing =======>",productDoc.data());

        const q2 = collection(productDoc,"prices");
        console.log("Test ==> Q2",q2);
        const priceSnap =  getDocs(q2);
        console.log("Test ==> priceSnap",priceSnap);
        priceSnap.doc.forEach(price => {
          products[productDoc.id].prices = { 
                priceID: price.id,
                priceData: price.data(),
              };
        })
      });
      setProducts(products);
    });
  }, []);

  console.log(products);
  return <div>PlanScreen</div>;
};

export default PlanScreen;
