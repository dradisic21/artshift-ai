import { motion } from "framer-motion";
import "../../styles/Advantages.scss";

export function Advantages() {
  // Definicija varijanti za animaciju
  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { opacity: 0, x: -30, transition: { duration: 0.5, ease: "easeIn" } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.5, ease: "easeIn" } }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
    exit: { opacity: 0, y: 50, transition: { duration: 0.5, ease: "easeIn" } }
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
        <motion.p
          className="advantages-tagline"
          variants={textVariants}
        >
          ADVANTAGES
        </motion.p>
        <motion.h2
          className="advantages-title"
          variants={textVariants}
        >
          Why Choose ArtShift?
        </motion.h2>

        <div className="why-choose-advantages">
          <motion.div
            className="advantages"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={textVariants}
          >
            <img src="/assets/icons/bell.png" alt="icon" />
            <motion.h3 variants={textVariants}>Instant High-Quality Output</motion.h3>
          </motion.div>
          <motion.div
            className="advantages-description"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={descriptionVariants}
          >
            <p>
              ArtShift empowers you to effortlessly create stunning visuals with
              advanced AI technology. Customize your designs, enjoy rapid
              output, and achieve high resolution for digital and print. With a
              user-friendly interface and strong community support, you’ll
              unlock endless creative possibilities. Experience the ArtShift
              difference today!
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
        <img src="/assets/web_edit.png" alt="edit" />
      </motion.div>
    </div>
  );
}
