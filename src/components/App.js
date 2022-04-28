import React from "react";
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from "./MovieCard";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="main">
        <div className="tabs">
          <div className="tab">Movie</div>
          <div className="tab">Favorite</div>
        </div>
        
        <div className="list">
          {data.map( movies=>(
            <MovieCard movie={movies}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
