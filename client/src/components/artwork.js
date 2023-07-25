// client/src/components/ArtworkList.js
import React, { useState, useEffect } from 'react';

const ArtworkList = () => {
  const [artwork, setArtwork] = useState([]);

  useEffect(() => {
    fetch('/api/artwork')
      .then((response) => response.json())
      .then((data) => setArtwork(data))
      .catch((error) => console.error('Error fetching artwork:', error));
  }, []);

  return (
    <div>
      <h1>Artwork List</h1>
      {artwork.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <img src={item.imageUrl} alt={item.title} />
        </div>
      ))}
    </div>
  );
};

export default ArtworkList;
