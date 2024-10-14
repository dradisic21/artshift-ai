import { useState, useEffect } from "react";
import { Nav } from "../../layouts/Nav/Nav";
import { PlayStoreButton } from "../../ui/PlayStoreButton";
import { Video } from "../../components/Video/Video";
import "../../styles/Header.scss";

export function Header() {
  const [isVideoOpen, setVideoOpen] = useState(false);

  const openVideo = () => {
    setVideoOpen(true);
    document.body.classList.add("no-scroll");
  };

  const closeVideo = () => {
    setVideoOpen(false);
    document.body.classList.remove("no-scroll");
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <div className="header-container">
      <Nav />
      <div className="header-content">
        <div className="title-content">
          <h1 className="main-title">
            Make the Best Images with Creative Brilliance
          </h1>

          <p className="main-subtitle">
            ArtShift.ai is a versatile image creation and editing app designed
            to revolutionize your digital art experience.
          </p>

          <div className="buttons-content">
            <PlayStoreButton />
            <div className="video-button" onClick={openVideo}>
              <img src="/assets/icons/play-icon.png" alt="play-icon" />
              <p>Watch Video</p>
            </div>
          </div>
        </div>

        <div className="image-content">
          <div className="img1">
            <img src="/assets/web_create.png" alt="create" />
          </div>
          <div className="img2">
            <img src="/assets/web_edit.png" alt="edit" />
          </div>
          <div className="img3">
            <img src="/assets/web_gallery.png" alt="gallery" />
          </div>
        </div>
      </div>

      {isVideoOpen && <Video onClose={closeVideo} />}
    </div>
  );
}
