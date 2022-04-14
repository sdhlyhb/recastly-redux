
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
var store = createStore(
  rootReducer,
  {videoList: exampleVideoData,
    currentVideo: exampleVideoData[0]},
  applyMiddleware(thunk) // thunk required in the store and allow your store to interpret your thunks.
);

export default store;