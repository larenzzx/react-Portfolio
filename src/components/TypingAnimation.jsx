import React, { useState, useEffect } from "react";

const TypingAnimation = () => {
  const texts = ["I'm Larenz", "I'm a Developer"];
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0); 
  const [isDeleting, setIsDeleting] = useState(false); 
  const [text, setText] = useState(""); 
  const typingSpeed = 100; 
  const erasingSpeed = 100; 
  const delayBetweenTexts = 200; 

  useEffect(() => {
    const currentText = texts[index];

    if (isDeleting) {
      
      setTimeout(() => {
        setText(currentText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, erasingSpeed);
    } else {
      
      setTimeout(() => {
        setText(currentText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    }

    
    if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => setIsDeleting(true), delayBetweenTexts);
    }

    
    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length); 
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
