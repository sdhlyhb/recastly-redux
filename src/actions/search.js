import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {

  //TODO:  Write an asynchronous action to handle a video search!
  return (dispatch) => {
    searchYouTube({key: YOUTUBE_API_KEY, query: q, max: 5}, (videos) => {
      // This function is able to dispatch other action creators
      dispatch(changeVideoList(videos));
      dispatch(changeVideo(videos[0]));
      return;
    });
  };



};

export default handleVideoSearch;
