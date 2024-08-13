import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, name, url, description, imageURL }) => {
  return (
    <div className="card">
      {imageURL && <img src={imageURL} alt={name} />}
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="card-links">
        <a href={url} target="_blank" rel="noopener noreferrer" className="visit-page-link">
          Visit Page
        </a>
        <Link to={`/view/${id}`} className="view-details-link">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
