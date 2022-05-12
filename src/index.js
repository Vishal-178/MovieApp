import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
// import configureStore from 'redux'
import './index.css';
import App from './components/App';
import rootReducer from './reducers/index';


const store = createStore(rootReducer)
console.log('Store',store);
console.log('Before State',store.getState());

// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'Superman'}]
// });

// console.log('After State',store.getState());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App 
      store={store}
    />
  </React.StrictMode>
);

// reportWebVitals();
