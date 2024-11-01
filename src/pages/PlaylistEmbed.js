// PlaylistEmbed.js
import React from 'react';
import '../css/PlaylistEmbed.css'

const PlaylistEmbed = ({ playlistId }) => {
  return (
    <div className="video-container">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
        title="YouTube playlist player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default PlaylistEmbed;
