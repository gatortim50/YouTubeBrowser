import React from 'react';

const VideoDetail = ({ video, metaData, addFavorite, removeFavorite }) => {
  console.log(video, metaData);

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} />
      </div>
      {video.id.videoId !== metaData.id ?
        <div>Loading...</div> :
        <div className="details">
          <button onClick={event => addFavorite(video, event)}>Add to Favorites</button>
          <button onClick={event => removeFavorite(video, event)}>Remove from Favorites</button>
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
          <div>Channel: {video.snippet.channelTitle}</div>
          <div>Views: {metaData.statistics.viewCount}</div>
          <div>Likes: {metaData.statistics.likeCount}</div>
          <div>Dislikes: {metaData.statistics.commentCount}</div>
        </div>
    }
    </div>
  );
};

export default VideoDetail;
