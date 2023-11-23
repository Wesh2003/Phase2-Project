import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  const numberOfMovies = 14; // Amount of MovieCard components
  
  const movieCards = [];
  for (let i = 1; i <= numberOfMovies; i++) {
    movieCards.push(<MovieCard key={i} showId={i} />);
  }

  return (
    <div className="App">
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/library' element={<L/>}></Route>
      <Route path='/login' element={<L/>}></Route>
    </Routes>

    <ul className="movie-list">
        {movieCards.map((card, index) => (
          <li key={index}>{card}</li>
        ))}
      </ul>
     ;
  
    </div>
  );
}

export default App;
