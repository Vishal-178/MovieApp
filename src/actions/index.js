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

export function addMovies(movies){
    return{
        type: "ADD_MOVIES",
        movies: movies
      }
}