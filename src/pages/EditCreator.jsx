import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';

const EditCreator = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState({
    name: '',
    twitterURL: '',
    youtubeURL: '',
    instagramURL: '',
    description: '',
    imageURL: ''
  });

  useEffect(() => {
    const fetchCreator = async () => {
      const { data } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single();
      setCreator(data);
    };

    fetchCreator();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreator((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await supabase
      .from('creators')
      .update(creator)
      .eq('id', id);

    navigate(`/view/${id}`);
  };

  const handleDelete = async () => {
    const { error } = await supabase
      .from('creators')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting creator:', error.message);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="show-creators-page">
      <h1>Edit Creator</h1>
      <form onSubmit={handleSubmit} className="edit-creator-form">
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
        <button type="submit" className="save">Save Changes</button>
        <button type="button" onClick={handleDelete} className="delete-button">
          Delete Creator
        </button>
      </form>
    </div>
  );
};

export default EditCreator;
