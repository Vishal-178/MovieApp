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
      }
}