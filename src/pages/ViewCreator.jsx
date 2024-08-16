import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { supabase } from '../client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

const ViewCreator = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCreator = async () => {
      try {
        const { data, error } = await supabase
          .from('creators')
          .select('*')
          .eq('id', id)
          .single();
        if (error) throw error;
        setCreator(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCreator();
  }, [id]);

  const handleDelete = async () => {
    try {
      const { error } = await supabase
        .from('creators')
        .delete()
        .eq('id', id);
      if (error) throw error;
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!creator) return <p>Content Creator not found.</p>;

  return (
    <div className="creator-details">
      {creator.imageURL && <img src={creator.imageURL} alt={creator.name} />}
      <h2>{creator.name}</h2>
      <p>{creator.description}</p>
      <div className="creator-links">
        {creator.twitterURL && (
          <a href={creator.twitterURL} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        )}
        {creator.youtubeURL && (
          <a href={creator.youtubeURL} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
        )}
        {creator.instagramURL && (
          <a href={creator.instagramURL} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        )}
      </div>
      <div className="creator-actions">
        <Link to={`/edit/${creator.id}`}>
          <button className="edit-button">Edit Creator</button>
        </Link>
        <button onClick={handleDelete} className="delete-button">
          Delete Creator
        </button>
        <button onClick={handleBack} className="back-button">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ViewCreator;
