import { motion } from "framer-motion";
import "../../styles/Faq.scss";

export function Faq() {
  // Definicija varijanti za animaciju
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const questionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.4, // Odgoda za svaki element
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="faq-container">
      <motion.div
        className="faq-titles"
        initial="hidden"
        whileInView="visible"
        variants={titleVariants}
        viewport={{ once: true }}
      >
        <p className="faq-tagline">FAQ</p>
        <h2 className="faq-title">Frequently Asked Questions</h2>
      </motion.div>

      <div className="faq-content">
        {[
          {
            question: "How does the AI generate images?",
            answer:
              "The AI uses advanced algorithms and machine learning models to analyze user inputs and preferences, then generates custom images based on style, subject, and other parameters you set.",
          },
          {
            question: "Can I customize the generated images?",
            answer:
              "Yes, you can tweak various aspects such as colors, styles, and elements to refine the generated image. The app provides editing tools to help you achieve the desired look.",
          },
          {
            question: "Are the images suitable for commercial use?",
            answer:
              "Absolutely. The app generates high-resolution images suitable for commercial use, including marketing materials, social media posts, and professional printing.",
          },
          {
            question: "How long does it take to create an image?",
            answer:
              "Image generation typically takes just a few seconds, but the time may vary slightly depending on the complexity of your request.",
          },
          {
            question: "What formats are supported for downloading images?",
            answer:
              "You can download images in various formats, such as JPEG, PNG, and even vector formats like SVG, depending on your needs.",
          },
          {
            question: "Is there a limit to the number of images I can create?",
            answer:
              "The number of images you can create may depend on your subscription plan. Check the app's pricing details for more information on usage limits.",
          },
        ].map((faq, index) => (
          <motion.div
            className="faq-question"
            key={index}
            custom={index + 1} // Prenosimo redni broj za kalkulaciju kašnjenja
            initial="hidden"
            whileInView="visible"
            variants={questionVariants}
            viewport={{ once: true }}
          >
            <h2>{faq.question}</h2>
            <p>{faq.answer}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
