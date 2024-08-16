import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../client';

const AddCreator = () => {
  const navigate = useNavigate();
  const [creator, setCreator] = useState({
    name: '',
    twitterURL: '',
    youtubeURL: '',
    instagramURL: '',
    description: '',
    imageURL: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreator((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from('creators')
      .insert([creator]);

    if (error) {
      console.error('Error adding creator:', error.message);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="show-creators-page">
      <h1>Add New Creator</h1>
      <form onSubmit={handleSubmit} className="add-creator-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={creator.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Twitter URL:
          <input
            type="url"
            name="twitterURL"
            value={creator.twitterURL}
            onChange={handleChange}
          />
        </label>
        <label>
          YouTube URL:
          <input
            type="url"
            name="youtubeURL"
            value={creator.youtubeURL}
            onChange={handleChange}
          />
        </label>
        <label>
          Instagram URL:
          <input
            type="url"
            name="instagramURL"
            value={creator.instagramURL}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={creator.description}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Image URL:
          <input
            type="url"
            name="imageURL"
            value={creator.imageURL}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Creator</button>
      </form>
    </div>
  );
};

export default AddCreator;
