import { useNavigate, Link } from "react-router-dom";
import { AnimationTitle } from "../../components/AnimationTitle/AnimationTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "../../styles/Footer.scss";
import { Subscribe } from "../../components/Subscribe/Subscribe";

export function Footer() {
  const navigate = useNavigate();

  function handlePrivacyPolicyClick(e) {
    e.preventDefault();
    navigate("/privacy-policy");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function handleTermsClick(e) {
    e.preventDefault();
    navigate("/terms-conditions");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-about">
          <div className="footer-animated-logo">
            <Link to="/">
              <AnimationTitle />
            </Link>
          </div>
          <div className="footer-artshift-about">
            <p>
              Storiya is a storytelling application powered by artificial
              intelligence, designed to seamlessly transform your creative ideas
              into engaging stories enriched by AI-generated visuals and
              immersive narrations. Effortlessly customize your storytelling
              experience, share with a vibrant community, and explore limitless
              creative possibilities with Storiya.
            </p>
          </div>
          <div className="social-network">
            <div className="social-icon">
              <Link
                to="https://www.facebook.com/profile.php?id=61556217791400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="icon" icon={faFacebookSquare} />
              </Link>
              <Link
                to="https://www.instagram.com/artshift.ai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="icon" icon={faInstagram} />
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-links">
          <h3>Legal</h3>
          <div className="links">
            <p onClick={handlePrivacyPolicyClick}>Privacy Policy</p>
            <p onClick={handleTermsClick}>Terms & Condition</p>
          </div>
        </div>
        <div className="footer-support_content">
          <h3>Contact</h3>
          <div className="links">
            <a href="mailto:support@storiya.app?subject=Mail from ArtShift Site">
              Support
            </a>
            <a href="mailto:marketing@storiya.app?subject=Mail from ArtShift Site">
              Marketing
            </a>
          </div>
        </div>
        <div>
          <Subscribe />
        </div>
      </div>

      <div className="copyright">
        <p>
          COPYRIGHT &copy; {new Date().getFullYear()}. ARTSHIFT - ALL RIGHTS
          RESERVED.
        </p>
        <p>
          POWERED BY{" "}
          <a
            href="https://www.idirection.hr"
            target="_blank"
            rel="noopener noreferrer"
          >
            IDIRECTION
          </a>
        </p>
      </div>
    </div>
  );
}
