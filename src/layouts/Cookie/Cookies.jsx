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
        buttonText="Accept"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#f6f6f6" }}
        buttonStyle={{
          background: "#1b6a9e",
          color: "white",
          fontSize: "13px",
          padding: "15px 40px",
          borderRadius: "3px",
        }}
        expires={150}
      >
        <span  style={{ color: "#6e6e6e", cursor: "pointer" }}>
          This website uses cookies to provide the best possible experience user
          experience.{" "}
        </span>
        <span
          onClick={handlePrivacyPolicyClick}
          style={{ color: "#1b6a9e", cursor: "pointer" }}
        >
          More Information
        </span>
      </CookieConsent>
    </div>
  );
}
