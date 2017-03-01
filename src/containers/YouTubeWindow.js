import debounce from 'lodash/debounce';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { videoSearch, sortBySearch, sortBy, selectVideo, getVideoDetails, addFavorite, removeFavorite } from '../redux/actions';
import SearchBar from '../components/SearchBar.js';
import VideoList from '../components/VideoList.js';
import VideoDetail from '../components/VideoDetail.js';
import FavoriteList from '../components/FavoriteList.js';

class YouTubeWindow extends Component {
  videoSearch = (term) => {
    const orderBy = this.props.orderBy;
    this.props.dispatch(videoSearch(term, orderBy));
  }
  handleOrderByChange = (term, e) => {
    const orderBy = e.target.value;
    this.props.dispatch(sortBy(orderBy));
    this.props.dispatch(videoSearch(term, orderBy));
  }
  selectVideo = (video) => {
    this.props.dispatch(getVideoDetails(video));
    this.props.dispatch(selectVideo(video));
  }
  addFavorite = (video, event) => {
    event.stopPropagation();
    this.props.dispatch(addFavorite(video));
  }
  removeFavorite = (video, event) => {
    event.stopPropagation();
    this.props.dispatch(removeFavorite(video));
  }
  render() {
    const debouncedVideoSearch = debounce((term) => { this.videoSearch(term); }, 300);
    return (
      <div>
        <SearchBar
          onSearchTermChange={debouncedVideoSearch} handleOrderByChange={this.handleOrderByChange}
        />
        <FavoriteList
          videos={this.props.favoriteVideos}
          onVideoSelect={selectedVideo => this.selectVideo(selectedVideo)}
        />
        {this.props.selectedVideo && this.props.metaData.statistics ? <VideoDetail
          video={this.props.selectedVideo} metaData={this.props.metaData}
          addFavorite={this.addFavorite} removeFavorite={this.removeFavorite}
        /> : null }
        <VideoList
          onVideoSelect={selectedVideo => this.selectVideo(selectedVideo)}
          videos={this.props.videos}
        />
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    videos: state.videos,
    selectedVideo: state.selectedVideo,
    favoriteVideos: state.favoriteVideos,
    orderBy: state.orderBy,
    metaData: state.metaData
  };
}

export default connect(mapStateToProps)(YouTubeWindow);
