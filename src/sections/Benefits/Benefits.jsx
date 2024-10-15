import { motion } from "framer-motion";
import "../../styles/Benefits.scss";

export function Benefits() {
  // Definicija varijanti za animaciju
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const textVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } }
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
        <img src="/assets/web_gallery.png" alt="gallery" />
      </motion.div>

      <motion.div
        className="benefits-desc-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={textVariants}
      >
        <motion.p
          className="benefits-tagline"
          variants={textVariants}
        >
          BENEFITS
        </motion.p>
        <motion.h2
          className="benefits-title"
          variants={textVariants}
        >
          High Resolution & Detail
        </motion.h2>

        <div className="image-creation-benefits">
          <motion.div
            className="benefits"
            variants={textVariants}
          >
            <img src="/assets/icons/circle-star.png" alt="icon" />
            <motion.h3
              variants={textVariants}
            >
              Fully Customizable
            </motion.h3>
          </motion.div>
          <motion.div
            className="benefits-description"
            variants={descriptionVariants}
          >
            <p>
              Achieve stunning visuals with unparalleled sharpness and fine
              details. Our technology ensures each image is produced at the
              highest resolution, capturing every nuance with exceptional
              clarity. Perfect for digital displays and professional printing,
              the quality remains consistent across various formats, delivering
              impressive results every time.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
