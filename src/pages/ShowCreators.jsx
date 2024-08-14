import React, { useEffect, useState } from 'react';
import { supabase } from '../client';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const ShowCreators = () => {
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCreators = async () => {
      try {
        const { data, error } = await supabase
          .from('creators')
          .select('*');
        if (error) throw error;
        setCreators(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCreators();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="show-creators-page">
      <Link to="/add">
        <button className="add-creator-button">Add New Creator</button>
      </Link>
      {creators.length === 0 ? (
        <p>No content creators found.</p>
      ) : (
        <div className="creators-list">
          {creators.map((creator) => (
            <Link key={creator.id} to={`/view/${creator.id}`}>
              <Card
                id={creator.id}
                name={creator.name}
                url={creator.url}
                description={creator.description}
                imageURL={creator.imageURL}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowCreators;
