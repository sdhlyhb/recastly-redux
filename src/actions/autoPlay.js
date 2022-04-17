var autoPlay = (video) => ({
  //TODO:  Return some action object to change the currently playing video.
  type: 'AUTOPLAY_VIDEO',
  video: video,
  link: video.id.videoId + '?autoplay=1'

});

export default autoPlay;
