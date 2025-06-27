import React, { useState, useEffect, Suspense } from "react";
import { Button } from "../../ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import "../../styles/Video.scss";

const ReactPlayer = React.lazy(() => import("react-player"));

export function Video({ onClose }) {
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const toggleMute = () => {
    setIsMuted((prevMuted) => !prevMuted);
  };

  
  useEffect(() => {
    setIsVideoLoaded(true);
  }, []);

  return (
    <div className="video-popup-overlay">
      <div className="video-container">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="video-main">
          <Suspense
            fallback={
              <div>
                <img src="/assets/video-thumbnail.jpg" alt="Video thumbnail" />
              </div>
            }
          >
            {isVideoLoaded && (
              <ReactPlayer
                className="react-player"
                url="https://www.youtube.com/watch?v=nrEN-xczPCA"
                width="100%"
                height="100%"
                controls={false}
                playing={true}
                muted={isMuted}
              />
            )}
          </Suspense>
          <Button
            className="muteBtn"
            onClick={toggleMute}
            name={
              isMuted ? (
                <FontAwesomeIcon icon={faVolumeMute} />
              ) : (
                <FontAwesomeIcon icon={faVolumeUp} />
              )
            }
          />
        </div>
      </div>
    </div>
  );
}
