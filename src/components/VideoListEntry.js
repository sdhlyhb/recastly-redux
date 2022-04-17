import React from 'react';
import PropTypes from 'prop-types';

var VideoListEntry = ({video, handleVideoListEntryTitleClick}) => {
  return (
    <div className="video-list-entry">
      <div className="media-left media-middle">
        <img className="media-object" src={video.snippet.thumbnails.default.url} alt="" />
      </div>
      <div className="media-body">
        <button className="toggleBtn" onClick={() => {
          var prevLink = video.id.videoId;
          handleVideoListEntryTitleClick(video);
          video.id.videoId = prevLink + '?autoplay=1';

        } }
        >Play</button>
        <div
          className="video-list-entry-title"
          onClick={() => {
            var curLink = video.id.videoId;
            if (curLink.includes('?autoplay=1')) {
              video.id.videoId = curLink.slice(0, curLink.indexOf('?autoplay=1'));
            }
            handleVideoListEntryTitleClick(video);
          } }
        >
          {video.snippet.title}
        </div>
        <div className="video-list-entry-detail">{video.snippet.description}</div>
      </div>
    </div>
  );
};

VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired
};

export default VideoListEntry;
