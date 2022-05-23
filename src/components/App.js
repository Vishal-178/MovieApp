import React from "react";
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from "./MovieCard";
import {addMovies, setShowFavourite} from '../actions';
import {StoreContext, connect} from '../index';
class App extends React.Component {
  componentDidMount(){
    this.props.dispatch(addMovies(data));
    
  }
  isMovieFavourite = (movie)=>{
    const {movies} = this.props;
    const index = movies.favourites.indexOf(movie);
    if(index!==-1){
      //fouund the movie
      return true;
    }
    return false
  }
  
  onChangeTab=(value)=>{
    this.props.dispatch(setShowFavourite(value))
  }
  render(){
    const {movies, search} = this.props;// {movies:{}, search:{}}
    const {list, favourites, showFavourites} = movies;//this.props.store.getState(); 
    const displayMovies = showFavourites ? favourites : list;
    return (
      <div className="App">
        <Navbar search={search} />
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
              dispatch={this.props.dispatch} 
              isFavourite = {this.isMovieFavourite(movie)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

class AppWrapper extends React.Component{
  render(){
    return(
      <StoreContext.Consumer>
        {(store)=><App store={store}/>}
      </StoreContext.Consumer>
    );
  }
}
function mapStateToProps(state){
  return{
    movies:state.movies,
    search: state.movies
  }
}

const connectedAppComponent = connect(mapStateToProps)(App);
export default connectedAppComponent;
