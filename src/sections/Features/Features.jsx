import "../../styles/Features.scss"

export function Fetatures() {
    return(
        <div className="features-container">
            <div className="features-image-content">
             <img src="/assets/web_create.png" alt="create" />
            </div>

            <div className="features-desc-content">
                <p className="features-tagline">FEATURES</p>
                <h2 className="features-title">ArtShift Premium</h2>
                <div className="image-creation-features">
                    <div className="features">
                        <img src="/assets/icons/star-05.png" alt="icon" />
                        <h3>Customized Image Creation</h3>
                    </div>
                    <div className="features-description">
                        <p>Generate unique, high-quality images tailored to your preferences, with AI adapting to your specific style and requirements.</p>
                    </div>
                </div>

                <div className="image-creation-features">
                    <div className="features">
                        <img src="/assets/icons/cube-02.png" alt="icon" />
                        <h3>Instant High-Quality Output</h3>
                    </div>
                    <div className="features-description">
                        <p>Experience rapid image generation, delivering stunning visuals within seconds to streamline your creative process.</p>
                    </div>
                </div>

                <div className="image-creation-features">
                    <div className="features">
                        <img src="/assets/icons/cube-04.png" alt="icon" />
                        <h3>Superior Resolution and Detail</h3>
                    </div>
                    <div className="features-description">
                        <p>Produce images with exceptional resolution and intricate detail, ensuring they are suitable for both digital use and professional printing.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}