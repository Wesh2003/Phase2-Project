import React, { useState } from 'react';
//import MovieCard from './MovieCard'; // Assuming you have a MovieCard component

function Library (){
  const [library, setLibrary] = useState([]);

  const movieDataa = localStorage.getItem('movieCardData')
  const movie = JSON.parse(movieDataa)
  setLibrary([...library, movie]);

  const removeFromLibrary = (movieTitle) => {
    const updatedLibrary = library.filter((movie) => movie.title !== movieTitle);
    setLibrary(updatedLibrary);
  };

  return (
    <div>
      <h2>Library</h2>
      {library.length === 0 ? (
        <p>Your Library is empty.</p>
      ) : (
        <div>
          {library.map((movie) => (
            <div key={movie.title}>
              <MovieCard {...movie} />
              <button onClick={() => removeFromLibrary(movie.title)}>
                Remove from Library
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
    );
    };


export default Library;
