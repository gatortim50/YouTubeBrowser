import actions from './actions';
import update from 'react-addons-update';

const initialState = {
  youtubeResponse: [],
  videos: [],
  selectedVideo: null,
  favoriteVideos: [],
  orderBy: 'relevance',
  metaData: []
};

const YouTubeReducer = (state, action) => {
  state = state || initialState;
  switch (action.type) {
  case 'VIDEO_SEARCH_SUCCESS':
    return update(state, {
      youtubeResponse: { $set: action.data },
      videos: { $set: action.data.items }
    });
  case 'VIDEO_SEARCH_ERROR':
    return state;
  case 'SORT_BY':
    return update(state, {
      orderBy: { $set: action.data }
    });
  case 'SELECT_VIDEO':
    return update(state, {
      selectedVideo: { $set: action.data }
    });
  case 'GET_VIDEO_DETAILS_SUCCESS':
    return update(state, {
      metaData: { $set: action.data.items[0] }
    });
  case 'GET_VIDEO_DETAILS_ERROR':
    return state;
  case 'ADD_FAVORITE':
    return update(state, {
      favoriteVideos: { $set: state.favoriteVideos.concat(action.data) }
    });
  case 'REMOVE_FAVORITE':
    for (let i = 0; i < state.favoriteVideos.length; i += 1) {
      if (state.favoriteVideos[i].id.videoId === action.data.id.videoId) {
        state = update(state, { favoriteVideos: { $splice: [[i, 1]] } });
        break;
      }
    }
    return state;
  default:
    return state;
  }
};

export default YouTubeReducer;
