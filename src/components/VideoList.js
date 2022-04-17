import React from 'react';
import PropTypes from 'prop-types';
import VideoListEntry from './VideoListEntry.js';

var VideoList = ({videos, handleVideoListEntryTitleClick,handleAutoPlayBtnClick}) => (
  <div className="video-list">
    {
      videos.map(video => (
        <VideoListEntry
          key={video.etag}
          video={video}
          handleVideoListEntryTitleClick={handleVideoListEntryTitleClick}
          handleAutoPlayBtnClick = {handleAutoPlayBtnClick}
        />
      ))
    }
  </div>
);

VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

export default VideoList;
