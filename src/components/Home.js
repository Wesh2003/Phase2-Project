import React from "react";
import Recommendation from "./Recommendation";
import MovieCard from "./MovieCard";
function Home() {

  const numberOfMovies = 14; // Amount of MovieCard components
  
  const movieCards = [];
  for (let i = 1; i <= numberOfMovies; i++) {
    movieCards.push(<MovieCard key={i} showId={i} />);
  }

  return (
  <div>
    <h1>Movies Available on This Site</h1>
    <ul className="movie-list">
      {movieCards.map((card, index) => (
        <li key={index}>{card}</li>
        ))}
    </ul>
    
    <br></br>
    <h1>Reccomend Your Own movies that you want added on the site</h1>
    <Recommendation/>


  </div>);
}

export default Home;
