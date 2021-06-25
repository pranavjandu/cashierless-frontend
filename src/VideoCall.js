import React from "react";
import Base from "./core/Base";
import VideoPlayer from "./components/VideoPlayer";
import Notifications from "./components/Notifications";
import Sidebar from "./components/Sidebar";
import { ContextProvider } from "./Context";

const VideoCall = () => {
  return (
    <ContextProvider>
      <Base title="" description="" titleClass="d-none">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
            <VideoPlayer></VideoPlayer>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <Sidebar>
              <Notifications></Notifications>
            </Sidebar>
          </div>
        </div>
      </Base>
    </ContextProvider>
  );
};

export default VideoCall;
