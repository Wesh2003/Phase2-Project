import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/library' element={<L/>}></Route>
      <Route path='/login' element={<L/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
