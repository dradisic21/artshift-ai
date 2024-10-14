import React, { useEffect, useState } from "react";

export function AnimationTitle() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const text = "ArtShift.ai";
    let i = currentIndex;

    const interval = setInterval(() => {
      const title = document.getElementById("animated-text");

      if (i === 0) {
        title.innerHTML = "";
      } else {
        title.innerHTML = text.substring(0, i);
      }

      i++;

      if (i > text.length) {
        clearInterval(interval);

        if (currentIndex === text.length) {
          setTimeout(() => {
            setCurrentIndex(0);
          }, 500);
        }
      } else {
        setCurrentIndex(i);
      }
    }, 400);

    return () => clearInterval(interval);
  }, [currentIndex]);



  return (
    <div className="title">
      <span id="animated-text"></span>
    </div>
  );
}
