import React from "react";
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from "./MovieCard";
import {addMovies} from '../actions';
class App extends React.Component {
  componentDidMount(){
    const {store} = this.props;
    store.subscribe(()=>{
      console.log('UPDATED');
      this.forceUpdate();// never use this method
    });
    // make api call
    // dispatch action
    store.dispatch(addMovies(data));
    console.log(this.props.store.getState());
  }
  render(){
    const {list} = this.props.store.getState(); // {list:[], favourites:[]}
    console.log('RENDEr');
    return (
      <div className="App">
        <Navbar/>
        <div className="main">
          <div className="tabs">
            <div className="tab">Movie</div>
            <div className="tab">Favorite</div>
          </div>
          
          <div className="list">
            {list.map( (movie, index)=>(
              <MovieCard movie={movie} key={`movie-${index}`}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
