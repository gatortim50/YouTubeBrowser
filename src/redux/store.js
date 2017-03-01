import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';

import YouTubeReducer from './reducers';
import { loadState, saveState } from './localStorage';


const persistedState = loadState();

const store = createStore(YouTubeReducer, persistedState, applyMiddleware(thunk));
console.log(store.getState());

store.subscribe(throttle(() => {
  saveState({
    favoriteVideos: store.getState().favoriteVideos
  });
}, 1000));

export default store;
