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
            question: "How does Storiya generate illustrations??",
            answer:
              "Storiya uses advanced AI algorithms to analyze your story's characters and details, creating personalized and unique visual illustrations for each chapter.",
          },
          {
            question: "Can I customize my stories further?",
            answer:
              "Absolutely. You can select fonts, paper styles, image styles, and audio narrations to fully tailor each story to your preferences.",
          },
          {
            question: "Are the stories shareable with others?",
            answer:
              "Yes! Storiya allows you to share your creations with our active community, where your stories can be discovered, rated, and commented on by fellow storytellers.",
          },
          {
            question: "How long does story creation take?",
            answer:
              "Creating a story is fast and intuitive. AI-generated illustrations and narrations typically complete within moments, enabling rapid storytelling and seamless creative flow.",
          },
          {
            question: "What audio narration options do I have?",
            answer:
              "You can choose from 7 different professional-quality AI-generated voices, adding depth and emotion to your stories.",
          },
          {
            question: "Is there a limit to the number of stories I can create?",
            answer:
              "Your story creation limits depend on your subscription plan, providing various levels of access to match your storytelling needs.",
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
