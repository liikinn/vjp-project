import React from "react";

import { VideoPlayer } from "./video-player-component";

const Home: React.FC = () => {
  return (
    <div>
      <div>Etusivu</div>
      <VideoPlayer />
    </div>
  );
};

export { Home };
