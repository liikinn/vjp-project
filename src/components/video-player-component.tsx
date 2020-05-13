import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer: React.FC = () => {
  return (
    <div
      style={{
        position: "relative",
        paddingTop: "56.25%" /* Player ratio: 100 / (1280 / 720) */,
      }}
    >
      <ReactPlayer
        style={{ position: "absolute", top: 0, left: 0 }}
        light="thumbnail.png"
        url="H4-video.mp4"
        width="100%"
        height="100%"
        controls
      />
    </div>
  );
};

export { VideoPlayer };
