// GetApp.jsx
import { motion } from "framer-motion"; // Uvezite motion
import "../../styles/GetApp.scss";

export function GetApp() {
  // Definicija varijanti za animaciju
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.4, ease: "easeOut" },
    },
  };

  return (
    <div className="get-app-container">
      <div className="get-app-content">
        <div className="get-app">
          <motion.div
            className="text-content"
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            viewport={{ once: true }}
          >
            <h2>Ready To Get Started?</h2>
            <p>Download the App Now and join our Storytelling Community.</p>
            <a
              className="get-app-button"
              href="https://play.google.com/store/apps/details?id=com.cypher.shiftai"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="icon"
                viewBox="0 0 512 512"
              >
                <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
              </svg>
              <span className="texts">
                <span className="text-1">Download App</span>
              </span>
            </a>
          </motion.div>
        </div>

        <div className="mobile-image">
          <img src="assets/storiya-mobiles-bg.jpg" alt="mobiles" />
        </div>
      </div>
    </div>
  );
}
