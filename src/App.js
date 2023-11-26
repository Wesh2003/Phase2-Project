import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home'
import Library from './components/Library';
import Login from './components/Login';
import RecommendationList from './components/RecommendationList';
import React from 'react';
import './App.css';


function App() {

  return (
    <div>
      <BrowserRouter>
    <NavBar/>
        <Routes>
            <Route path='/'
            element= {<Home/>}
            />
            <Route path='/home'
              element = {<Home/>}
            />
            <Route path='/library'
              element = {<Library/>}
            />
            <Route path='/login' 
              element = {<Login/>}
            />
            <Route path='/recommendations' 
              element = {<RecommendationList/>}
            />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
