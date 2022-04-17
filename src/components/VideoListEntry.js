import React from 'react';
import PropTypes from 'prop-types';

var VideoListEntry = ({video, handleVideoListEntryTitleClick, handleAutoPlayBtnClick}) => (
  <div className="video-list-entry">
    <div className="media-left media-middle">
      <img className="media-object" src={video.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      <button className="toggleBtn" onClick = {() => { handleVideoListEntryTitleClick(video); handleAutoPlayBtnClick(video); } }
      >Play</button>
      <div
        className="video-list-entry-title"
        onClick={() => handleVideoListEntryTitleClick(video)}
      >
        {video.snippet.title}
      </div>
      <div className="video-list-entry-detail">{video.snippet.description}</div>
    </div>
  </div>
);

VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired
};

export default VideoListEntry;
