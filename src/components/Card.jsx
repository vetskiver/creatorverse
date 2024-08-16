import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Card = ({ id, name, twitterURL, youtubeURL, instagramURL, description, imageURL }) => {
  return (
    <div className="card">
      {imageURL && <img src={imageURL} alt={name} />}
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="card-links">
        {twitterURL && (
          <a href={twitterURL} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        )}
        {youtubeURL && (
          <a href={youtubeURL} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
        )}
        {instagramURL && (
          <a href={instagramURL} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        )}
        <br></br>
        <Link to={`/view/${id}`} className="view-details-link">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Card;