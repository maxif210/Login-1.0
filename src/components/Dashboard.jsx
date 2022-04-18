import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import { getPhotos } from "../helpers/endpoints";
import { useEffect, useState } from "react";
import useGeneral from "./../hooks/useGeneral";

const Dashboard = () => {

  const { photos, resApi } = useGeneral();

  useEffect(() => {
    resApi();
  }, []);


  return (
    <div>
      <Navbar />
      <main className="container">
        <div className="row text-center mt-5">
          <h3 className="font-family">Descargue su imagen preferida!</h3>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
          {photos.map((photo) => (
            <Card key={photo.id} photo={photo} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
