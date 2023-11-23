import React, { useState, useEffect } from 'react';

function MovieCard({ showId }) {
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${showId}?embed=cast`)
      .then(response => response.json())
      .then(data => {
        setMovieData({
          title: data.name,
          description: data.summary,
          image: data.image?.medium,
          // Adjust properties based on the API response structure
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [showId]);

  const addToLibrary = () => {
    // Add functionality to add this movie to the library
  };

  const { title, description, image } = movieData;

  return (
    <div className="movie-card">
      <img src={image} alt={title} className="movie-image" />
      <h2 className="movie-title">{title}</h2>
      <p className="movie-description">{description}</p>
      <button onClick={addToLibrary} className="add-button">
        Add to Library 
      </button>
    </div>
  );
}

export default MovieCard;
