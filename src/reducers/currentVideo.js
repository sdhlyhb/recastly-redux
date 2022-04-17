import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  //fix commit msg

  switch (action.type) {

  case 'CHANGE_VIDEO':
    return action.video;

  // case 'AUTOPLAY_VIDEO':
  //   return {
  //     currentVideo: action.video,
  //     link: action.video.id.videoId + '?autoplay=1'
  //   };
  default:
    return state;
  }

};

export default currentVideoReducer;
