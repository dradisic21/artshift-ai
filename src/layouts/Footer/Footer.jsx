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
              ArtShift is an application powered by artificial intelligence to
              generate unique images based on your preferences. Using advanced
              algorithms, it adjusts visual elements to match your style and
              needs, whether you're creating digital sketches, illustrations or
              high-quality prints. ArtShift delivers stunning results in
              seconds, simplifying the creative process for designers, artists
              and enthusiasts.
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
            <a href="mailto:support@artshift.ai?subject=Mail from ArtShift Site">
              Support
            </a>
            <a href="mailto:marketing@artshift.ai?subject=Mail from ArtShift Site">
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
  POWERED BY <a href="https://www.idirection.hr" target="_blank" rel="noopener noreferrer">IDIRECTION</a>
</p>

      </div>
    </div>
  );
}
