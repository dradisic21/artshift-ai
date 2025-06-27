import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

  // Definicija varijanti za animaciju
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  return (
    <div className="header-container">
      <Nav />
      <div className="header-content">
        <motion.div
          className="title-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={titleVariants}
        >
          <motion.h1 className="main-title" variants={titleVariants}>
            Bring Your Stories to Life with AI Magic
          </motion.h1>

          <motion.p className="main-subtitle" variants={subtitleVariants}>
            Storiya is an innovative storytelling app designed to transform your
            creativity into captivating AI-illustrated narratives and immersive
            audio experiences.
          </motion.p>

          <motion.div className="buttons-content" variants={buttonVariants}>
            <PlayStoreButton />
            <motion.div
              className="video-button"
              onClick={openVideo}
              variants={buttonVariants}
            >
              <img src="/assets/icons/play-icon.png" alt="play-icon" />
              <p>Watch Video</p>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="image-content">
          <motion.div
            className="img1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={imageVariants}
          >
            <img src="/assets/Storiya-homepage-min.png" alt="edit" />
          </motion.div>
          <motion.div
            className="img2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={imageVariants}
          >
            <img src="/assets/Storiya-app-min.png" alt="create" />
          </motion.div>
          <motion.div
            className="img3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={imageVariants}
          >
            <img src="/assets/Storiya-app-narative-min.png" alt="gallery" />
          </motion.div>
        </div>
      </div>

      {isVideoOpen && <Video onClose={closeVideo} />}
    </div>
  );
}
