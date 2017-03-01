import React from 'react';
import FavoriteListItem from './VideoListItem';

const FavoriteList = (props) => {
  console.log(props);
  if (props.videos.length === 0)
  {
    return <div className="add-favorites">Add some favorites!</div>
  }
  const favoriteVideos = props.videos.map((video) => {
    return (
      <FavoriteListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });

  return (
    <div>
    Favorites
    <ul className="col-md-4 list-group">
      {favoriteVideos}
    </ul>
    </div>
  );
};

export default FavoriteList;
