import { useState, useEffect } from 'react';
import React from 'react';

function RecommendationList() {

    const [recommendListData, setRecommendListData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/movies')
          .then((r) => r.json())
          .then((data) => setRecommendListData(data))
    
      }, [])

      const recommendedMovies = recommendListData.map( movie => 
        <li key = {movie.id}>
            <img src = {movie.url} alt='Missing Poster'/>
            <h1>{movie.name}</h1>
            <p>{movie.description}</p>

        </li>
        )

    return (
        <div>
            <h1>Recommended Movies To Add to the Site</h1>
            {recommendedMovies}
        </div>
    )
}

export default RecommendationList;