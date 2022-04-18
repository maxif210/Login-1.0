import React from "react";
import Card from "./Card";
import useGeneral from "./../hooks/useGeneral";
import Navbar from "./Navbar";

const SearchScreen = () => {
  const { resSearchApi, search, setSearch, datos } = useGeneral();

  const handleSubmit = (e) => {
    e.preventDefault();
    resSearchApi();
  };

  const { results } = datos;

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit} className="d-flex container mt-5 mx-auto">
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={search}
        />

        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      <div className=" container row row-cols-1 row-cols-md-3 g-4 mt-5 mx-auto">
        {results !== undefined &&
          results.map((photo) => <Card key={photo.id} photo={photo} />)}
      </div>
    </div>
  );
};

export default SearchScreen;
