import { motion } from "framer-motion";
import "../../styles/Features.scss";

export function Features() {
    // Varijante animacije za slike
    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
    };

    // Varijante animacije za tekst
    const textVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
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
                <img src="/assets/web_create.png" alt="create" />
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
                    ArtShift Premium
                </motion.h2>
                
                <div className="image-creation-features">
                    <motion.div
                        className="features"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        variants={imageVariants}
                    >
                        <img src="/assets/icons/star-05.png" alt="icon" />
                        <motion.h3 variants={textVariants}>Customized Image Creation</motion.h3>
                    </motion.div>
                    <motion.div
                        className="features-description"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        variants={textVariants}
                    >
                        <p>Generate unique, high-quality images tailored to your preferences, with AI adapting to your specific style and requirements.</p>
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
                        <img src="/assets/icons/cube-02.png" alt="icon" />
                        <motion.h3 variants={textVariants}>Instant High-Quality Output</motion.h3>
                    </motion.div>
                    <motion.div
                        className="features-description"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        variants={textVariants}
                    >
                        <p>Experience rapid image generation, delivering stunning visuals within seconds to streamline your creative process.</p>
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
                        <img src="/assets/icons/cube-04.png" alt="icon" />
                        <motion.h3 variants={textVariants}>Superior Resolution and Detail</motion.h3>
                    </motion.div>
                    <motion.div
                        className="features-description"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        variants={textVariants}
                    >
                        <p>Produce images with exceptional resolution and intricate detail, ensuring they are suitable for both digital use and professional printing.</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
