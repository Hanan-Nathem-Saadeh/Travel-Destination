import React from "react";
import Header from '../header/Header';
import Footer from "../footer/Footer";
import { useParams } from "react-router-dom";

const TourDetails = ({ data }) => {
  const { id } = useParams();

  return (<>
      <Header />
      <div >
        {
        data.filter((list) => list.id === id).map((list) => (

            <div key={list.id}>

              <h2>Name: {list.name}</h2>
              <h4>Price: {list.price}</h4>

              <img alt = "" src={list.image}></img>

              <h4>Description: {list.info}</h4>
            </div>
          ))}

      </div>
      <Footer />
      </>
  );
};
export default TourDetails;