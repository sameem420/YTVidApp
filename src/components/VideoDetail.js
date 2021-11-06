import React from "react";
import Skeleton from "react-loading-skeleton";

function VideoDetail({ video }) {
  if (!video) {
    return <Skeleton count={3} />;
  }

  const videoSRC = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSRC} title={video.snippet.title} />
      </div>
      <div className="ui segment">
        <h1 className="ui header">{video.snippet.title}</h1>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
}

export default VideoDetail;
