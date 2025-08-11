import { motion } from "framer-motion";
import "../../styles/Benefits.scss";

export function Benefits() {
  // Definicija varijanti za animaciju
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  return (
    <div className="benefits-container">
      <motion.div
        className="benefits-image-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={imageVariants}
      >
        <img src="/assets/Storiya-app-narative-min.png" alt="gallery" />
      </motion.div>

      <motion.div
        className="benefits-desc-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={textVariants}
      >
        <motion.p className="benefits-tagline" variants={textVariants}>
          BENEFITS
        </motion.p>
        <motion.h2 className="benefits-title" variants={textVariants}>
          Stunning AI-Enhanced Stories
        </motion.h2>

        <div className="image-creation-benefits">
          <motion.div className="benefits" variants={textVariants}>
            <img src="/assets/icons/circle-star-blue.png" alt="icon" />
            <motion.h3 variants={textVariants}>
              Fully Personalized Storytelling
            </motion.h3>
          </motion.div>
          <motion.div
            className="benefits-description"
            variants={descriptionVariants}
          >
            <p>
              Transform your ideas into visually impressive, narratively
              engaging stories. Our AI ensures each narrative is enriched with
              tailored illustrations and immersive audio, resulting in polished,
              professional-quality stories ideal for sharing and enjoyment.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
