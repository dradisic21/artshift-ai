import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Button } from "../../ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import "../../styles/Video.scss";

export function Video({ onClose }) {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted((prevMuted) => !prevMuted);
  };

  return (
    <div className="video-popup-overlay">
      <div className="video-container">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="video-main">
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=I_cFjQz_DzI"
            width="100%"
            height="100%"
            controls={false}
            autoplay={true}
            muted={isMuted}
          />
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
