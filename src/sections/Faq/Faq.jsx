import "../../styles/Faq.scss";

export function Faq() {
  return (
    <div className="faq-container">
      <div className="faq-titles">
        <p className="faq-tagline">FAQ</p>
        <h2 className="faq-title">Frequently Asked Questions</h2>
      </div>

      <div className="faq-content">
        <div className="faq-question">
          <h2>How does the AI generate images?</h2>
          <p>
            The AI uses advanced algorithms and machine learning models to
            analyze user inputs and preferences, then generates custom images
            based on style, subject, and other parameters you set.
          </p>
        </div>

        <div className="faq-question">
          <h2>Can I customize the generated images?</h2>
          <p>
            Yes, you can tweak various aspects such as colors, styles, and
            elements to refine the generated image. The app provides editing
            tools to help you achieve the desired look.
          </p>
        </div>

        <div className="faq-question">
          <h2>Are the images suitable for commercial use?</h2>
          <p>
            Absolutely. The app generates high-resolution images suitable for
            commercial use, including marketing materials, social media posts,
            and professional printing.
          </p>
        </div>

        <div className="faq-question">
          <h2>How long does it take to create an image?</h2>
          <p>
            Image generation typically takes just a few seconds, but the time
            may vary slightly depending on the complexity of your request.
          </p>
        </div>

        <div className="faq-question">
          <h2>What formats are supported for downloading images?</h2>
          <p>
            You can download images in various formats, such as JPEG, PNG, and
            even vector formats like SVG, depending on your needs.
          </p>
        </div>

        <div className="faq-question">
          <h2>Is there a limit to the number of images I can create?</h2>
          <p>
            The number of images you can create may depend on your subscription
            plan. Check the app's pricing details for more information on usage
            limits.
          </p>
        </div>
      </div>
    </div>
  );
}
