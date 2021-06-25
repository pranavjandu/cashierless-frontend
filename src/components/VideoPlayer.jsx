import React, { useContext } from "react";

import { SocketContext } from "../Context";

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);

  return (
    <div className="row">
      {callAccepted && !callEnded && (
        <div className="col-md-6 col-sm-12 col-xs-12 col-lg-6">
          <p className="text-white mb-0">{call.name}</p>
          <video
            playsInline
            muted
            ref={userVideo}
            autoPlay
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      )}
      {stream && (
        <div className="col-md-6 col-sm-12 col-xs-12 col-lg-6">
          <p className="text-white mb-0">Self : {name}</p>
          <video
            playsInline
            muted
            ref={myVideo}
            autoPlay
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
