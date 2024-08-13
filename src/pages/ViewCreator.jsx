import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';

const ViewCreator = () => {
  const { id } = useParams(); 
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

  if (loading) return <p>Loading...</p>; 
  if (error) return <p>Error: {error}</p>; 
  if (!creator) return <p>Content Creator not found.</p>; 

  return (
    <div className="creator-details">
      {creator.imageURL && <img src={creator.imageURL} alt={creator.name} />} 
      <h2>{creator.name}</h2>
      <p>{creator.description}</p>
      <a href={creator.url} target="_blank" rel="noopener noreferrer">
        Visit {creator.name}'s Page
      </a>
    </div>
  );
};

export default ViewCreator;
