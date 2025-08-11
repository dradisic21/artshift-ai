import { motion } from "framer-motion";
import "../../styles/Features.scss";

export function Features() {
  // Varijante animacije za slike
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  // Varijante animacije za tekst
  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="features-container">
      <motion.div
        className="features-image-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={imageVariants}
      >
        <img src="/assets/Storiya-app-min.png" alt="create" />
      </motion.div>

      <div className="features-desc-content">
        <motion.p
          className="features-tagline"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={textVariants}
        >
          FEATURES
        </motion.p>
        <motion.h2
          className="features-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={textVariants}
        >
          Storiya Highlights
        </motion.h2>

        <div className="image-creation-features">
          <motion.div
            className="features"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={imageVariants}
          >
            <img src="/assets/icons/star-05-blue.png" alt="icon" />
            <motion.h3 variants={textVariants}>
              Effortless Story Creation
            </motion.h3>
          </motion.div>
          <motion.div
            className="features-description"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={textVariants}
          >
            <p>
              Create engaging stories easily with intuitive tools. Customize
              your narratives, choose unique fonts and paper styles, and build
              up to 10 beautifully illustrated chapters.
            </p>
          </motion.div>
        </div>

        <div className="image-creation-features">
          <motion.div
            className="features"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={imageVariants}
          >
            <img src="/assets/icons/cube-02-blue.png" alt="icon" />
            <motion.h3 variants={textVariants}>
              AI-Generated Illustrations
            </motion.h3>
          </motion.div>
          <motion.div
            className="features-description"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={textVariants}
          >
            <p>
              Each chapter comes alive with stunning, original AI-generated
              visuals. Simply provide your character descriptions and watch your
              stories visually flourish.
            </p>
          </motion.div>
        </div>

        <div className="image-creation-features">
          <motion.div
            className="features"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={imageVariants}
          >
            <img src="/assets/icons/cube-04-blue.png" alt="icon" />
            <motion.h3 variants={textVariants}>
              Immersive AI Narrations
            </motion.h3>
          </motion.div>
          <motion.div
            className="features-description"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={textVariants}
          >
            <p>
              Select from 7 high-quality AI voices to add rich, lifelike audio
              narration to your stories, enhancing the storytelling experience.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
