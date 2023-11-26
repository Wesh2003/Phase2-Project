import React, { useState, useEffect } from 'react'

function Search() {
    const [movies, setMovies] = useState([]);
    const [searchMovie, setSearchMovie] = useState([]);

    useEffect(() => {
    fetch('https://api.tvmaze.com/schedule')
      .then((r) => r.json())
      .then((data) => setMovies(data))
    }, [searchMovie]);

    const filteredMovies = movies.filter((movie) => {
    return movie.description.includes(searchMovie.toLowerCase())
    }
    )

    return (
      
      <div className='Search'>
        <input 
          className='mt-5 border-solid border-2 border-gray-300 ...	block flex-1 bg-gray-100 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  w-full'
          type='text'
          placeholder='Search movies by name...'
          value={searchMovie}
          onChange={(e) => {setSearchMovie(e.target.value)}}
        />
        {filteredMovies}
      </div>
    )
}

export default Search