import React from "react";
import { Link } from "react-router-dom";
import "./Catalog.css";

function Catalog({ artists }) {
  return (
    <div className="catalog">
      {artists.map((artist) => (
        <div className="catalog-item" key={artist.id}>
          <Link to={`/artist/${artist.id}`}>
            <img src={artist.albumCover} alt={`${artist.name} Album Cover`} />
            <h3>{artist.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Catalog;
