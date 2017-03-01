
const API_KEY = 'AIzaSyAwSvY1uLxx-74v3dPxYy6vzkqyaiO6P5s';

export const SORT_BY = 'SORT_BY';
export const sortBy = (data) => {
  return {
    type: SORT_BY,
    data
  };
};

export const SELECT_VIDEO = 'SELECT_VIDEO';
export const selectVideo = (data) => {
  return {
    type: SELECT_VIDEO,
    data
  };
};

export const ADD_FAVORITE = 'ADD_FAVORITE';
export const addFavorite = (data) => {
  return {
    type: ADD_FAVORITE,
    data
  };
};

export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const removeFavorite = (data) => {
  return {
    type: REMOVE_FAVORITE,
    data
  };
};

export const VIDEO_SEARCH_SUCCESS = 'VIDEO_SEARCH_SUCCESS';
export const videoSearchSuccess = (data) => {
  return {
    type: VIDEO_SEARCH_SUCCESS,
    data
  };
};

export const VIDEO_SEARCH_ERROR = 'VIDEO_SEARCH_ERROR';
export const videoSearchError = (error) => {
  return {
    type: VIDEO_SEARCH_ERROR,
    error
  };
};

export const videoSearch = (term, orderBy) => {
  return (dispatch) => {
    const url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + term + '&order=' + orderBy + '&type=video' + '&key=' + API_KEY;
    return fetch(url)
    .then((response) => {
      if (response.status < 200 || response.status >= 300) {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return response;
    })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          return dispatch(
                videoSearchSuccess(data)
            );
        })
        .catch((error) => {
          return dispatch(
                videoSearchError(error)
            );
        });
  };
};

export const GET_VIDEO_DETAILS_SUCCESS = 'GET_VIDEO_DETAILS_SUCCESS';
export const getVideoDetailsSuccess = (data) => {
  return {
    type: GET_VIDEO_DETAILS_SUCCESS,
    data
  };
};

export const GET_VIDEO_DETAILS_ERROR = 'GET_VIDEO_DETAILS_ERROR';
export const getVideoDetailsError = (error) => {
  return {
    type: GET_VIDEO_DETAILS_ERROR,
    error
  };
};

export const getVideoDetails = (video) => {
  return (dispatch) => {
    const id = video.id.videoId;
    const part = 'snippet,contentDetails,statistics';
    const url = 'https://www.googleapis.com/youtube/v3/videos?part=' + part + '&id=' + id + '&key=' + API_KEY;
    return fetch(url)
    .then((response) => {
      if (response.status < 200 || response.status >= 300) {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return response;
    })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          return dispatch(
                getVideoDetailsSuccess(data)
            );
        })
        .catch((error) => {
          return dispatch(
                getVideoDetailsError(error)
            );
        });
  };
};




