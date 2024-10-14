import CookieConsent from "react-cookie-consent";
import { useNavigate } from "react-router-dom";

export function Cookies() {
  const navigate = useNavigate();

  function handlePrivacyPolicyClick(e) {
    e.preventDefault();
    navigate("/privacy-police");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div>
      <CookieConsent
        location="bottom"
        buttonText="Prihvati"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{
          background: "#db2ed3ff",
          color: "white",
          fontSize: "13px",
          padding: "15px 40px",
          borderRadius: "3px",
        }}
        expires={150}
      >
        <span>
          This website uses cookies to provide the best possible experience user
          experience.{" "}
        </span>
        <span
          onClick={handlePrivacyPolicyClick}
          style={{ color: "#db2ed3ff", cursor: "pointer" }}
        >
          More Information
        </span>
      </CookieConsent>
    </div>
  );
}
