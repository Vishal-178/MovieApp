import { combineReducers } from 'redux';
import {ADD_MOVIES, ADD_FAVOURITE, UN_FAVOURITE, SHOW_FAVOURITE} from '../actions';

const initialMoviesState = {
    list:[],
    favourites:[],
    showFavourites: false
}
console.log('oooooooo',initialMoviesState);
export function movies (state=initialMoviesState, action){
    // if(action.type === ADD_MOVIES){
    //     return {
    //         ...state,
    //         list:action.movies
    //     };
    // }
    // return state;
    console.log('MOVIE REDUCER');
    console.log('action-----',action);
    
    switch(action.type){
        case ADD_MOVIES:
            return {
                ...state,
                list:action.movies
            };
        case ADD_FAVOURITE:
            return{
                ...state,
                favourites:[action.movie,...state.favourites]
            }
        case UN_FAVOURITE:
            const filterArray = state.favourites.filter(
                movie => movie.Title !== action.movie.Title
            );

            return{
                ...state,
                favourites:filterArray
                
            }
        case SHOW_FAVOURITE:
            return{
                ...state,
                showFavourites: action.val
            }
        default:
            return state
    }
    
}
const initialSearchState={
    result:{}
}
export function search (state=initialMoviesState,action){
    console.log('SEARCH REDUCER');
    return state;
}

const initialRootState = {
    movies: initialMoviesState,
    search: initialSearchState
};

// export function rootReducer (state = initialRootState, action){
//     return{
//         movies: movies(state.movies, action),
//         search: search(state.search, action)
//     }
// }
// instead of using like upper function we can use combineReducers() provided by redux;
export default combineReducers({
    movies: movies,
    search: search
});