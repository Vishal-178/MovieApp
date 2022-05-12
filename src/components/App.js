import React from "react";
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from "./MovieCard";
import {addMovies, setShowFavourite} from '../actions';
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
  isMovieFavourite = (movie)=>{
    const {movies} = this.props.store.getState();
    const index = movies.favourites.indexOf(movie);
    if(index!==-1){
      //fouund the movie
      return true;
    }
    return false
  }
  
  onChangeTab=(value)=>{
    this.props.store.dispatch(setShowFavourite(value))
  }
  render(){
    const {movies} = this.props.store.getState();// {movies:{}, search:{}}
    const {list, favourites, showFavourites} = movies;//this.props.store.getState(); 
    const displayMovies = showFavourites ? favourites : list;
    return (
      <div className="App">
        <Navbar/>
        <div className="main">
          <div className="tabs">
            <div className="tab" onClick={()=>{this.onChangeTab(false)}}>Movie</div>
            <div className="tab" onClick={()=>{this.onChangeTab(true)}}>Favorite</div>
          </div>
          
          <div className="list">
            {displayMovies.map( (movie, index)=>(
              <MovieCard 
              movie={movie} 
              key={`movie-${index}`} 
              dispatch={this.props.store.dispatch} 
              getState={this.props.store.getState()}
              isFavourite = {this.isMovieFavourite(movie)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
