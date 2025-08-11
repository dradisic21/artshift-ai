import { motion } from "framer-motion";
import "../../styles/Advantages.scss";

export function Advantages() {
  // Definicija varijanti za animaciju
  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: { opacity: 0, x: -30, transition: { duration: 0.5, ease: "easeIn" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
    exit: { opacity: 0, y: 50, transition: { duration: 0.5, ease: "easeIn" } },
  };

  return (
    <div className="advantages-container">
      <motion.div
        className="advantages-desc-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={textVariants}
      >
        <motion.p className="advantages-tagline" variants={textVariants}>
          ADVANTAGES
        </motion.p>
        <motion.h2 className="advantages-title" variants={textVariants}>
          Why Choose Storiya?
        </motion.h2>

        <div className="why-choose-advantages">
          <motion.div
            className="advantages"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={textVariants}
          >
            <img src="/assets/icons/bell-blue.png" alt="icon" />
            <motion.h3 variants={textVariants}>
              Creative Freedom, Simplified
            </motion.h3>
          </motion.div>
          <motion.div
            className="advantages-description"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={descriptionVariants}
          >
            <p>
              Storiya empowers you to effortlessly craft captivating stories
              enhanced by advanced AI. Customize your storytelling, enjoy
              seamless AI-generated illustrations, and experience
              professional-grade narrations. Connect with our vibrant community
              and explore endless creative possibilities. Discover the Storiya
              advantage today!
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="advantages-image-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={imageVariants}
      >
        <img src="/assets/Storiya-app-middle-min.png" alt="edit" />
      </motion.div>
    </div>
  );
}
