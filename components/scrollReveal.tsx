"use client";

import useScrollReveal from "@/hooks/useScrollReveal";

const ScrollReveal: React.FC = () => {
  useScrollReveal(); // Calls your custom hook
  return null;      // This component doesn't render any visible markup
};

export default ScrollReveal;
