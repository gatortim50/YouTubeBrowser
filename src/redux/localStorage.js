
const initialState = {
  youtubeResponse: [],
  videos: [],
  selectedVideo: null,
  favoriteVideos: [],
  orderBy: 'relevance',
  metaData: []
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('favoriteVideos');
    if (serializedState === null) {
      return undefined;
    }
    const persistedState = initialState;
    persistedState.favoriteVideos = JSON.parse(serializedState);
    console.log(persistedState);
    return persistedState;
  } catch (err) {
    console.log('load error', err);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.favoriteVideos);
    localStorage.setItem('favoriteVideos', serializedState);
  } catch (err) {
    console.log('save error', err)
  }
};

export default localStorage;

