// action is just javascript
// {
    // type: 'ADD_MOVIES'
    // movies: [m1, m2]
// }
// {
//     type:
// }
// action type
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const UN_FAVOURITE = "UN_FAVOURITE";
export const SHOW_FAVOURITE = "SHOW_FAVOURITE";
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";
// action creators 
export function addMovies(movies){
    return{
        type: ADD_MOVIES,
        movies: movies
      }
}

export function addFavourite(movie){
    return{
        type: ADD_FAVOURITE,
        movie: movie
      }
}
export function unFavourite(movie){
    return{
        type: UN_FAVOURITE,
        movie: movie
      }
}

export function setShowFavourite(val){
    return{
        type: SHOW_FAVOURITE,
        val: val
      };
}

export function addMovieToList(movie){
    return{
        type: ADD_MOVIE_TO_LIST,
        movie
    };
}

export function handleMovieSearch(movie){
    const url = `https://www.omdbapi.com/?apikey=123600e6&t=${movie}`;
    return function (dispatch){
        fetch(url)
            .then(response=>response.json())
            .then(movie =>{
            console.log('movie', movie);
            dispatch(addMovieSearchResult(movie))
        })
    }
    
}
export function addMovieSearchResult(movie){
    return{
        type: ADD_SEARCH_RESULT,
        movie
    }
}