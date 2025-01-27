import React, { useState, useEffect } from "react";

const TypingAnimation = () => {
  const texts = ["I'm Larenz", "I'm a Developer"];
  const [index, setIndex] = useState(0); // Current text index
  const [charIndex, setCharIndex] = useState(0); // Current character index
  const [isDeleting, setIsDeleting] = useState(false); // Typing or deleting state
  const [text, setText] = useState(""); // Text to display
  const typingSpeed = 100; // Speed of typing
  const erasingSpeed = 100; // Speed of erasing
  const delayBetweenTexts = 200; // Pause before switching texts

  useEffect(() => {
    const currentText = texts[index];

    if (isDeleting) {
      // Erasing characters
      setTimeout(() => {
        setText(currentText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, erasingSpeed);
    } else {
      // Typing characters
      setTimeout(() => {
        setText(currentText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    }

    // If finished typing and not deleting
    if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => setIsDeleting(true), delayBetweenTexts);
    }

    // If finished deleting
    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length); // Move to the next text
    }
  }, [charIndex, isDeleting, index, texts]);

  return (
    <div className="flex items-center text-secondary">
      <span>{text}</span>
      <span className="animate-blink ml-1 h-8 md:h-12 w-1 bg-secondary"></span>
    </div>
  );
};

export default TypingAnimation;
