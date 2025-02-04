"use client";

import { useEffect } from "react";

const useScrollReveal = () => {
  useEffect(() => {
    // Function to set up the Intersection Observer on all matching elements
    const observeSections = () => {
      const sections = document.querySelectorAll(".section.animate");

      const revealSection = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      };

      const observer = new IntersectionObserver(revealSection, {
        threshold: 0.2, // Trigger when 10% of the section is visible
      });

      sections.forEach((section) => observer.observe(section));

      return observer;
    };

    // Start observing the sections initially
    let intersectionObserver = observeSections();

    // Set up a MutationObserver to detect new .section.animate elements added to the DOM
    const mutationObserver = new MutationObserver((mutations) => {
      let newElementAdded = false;

      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            if (node.matches(".section.animate")) {
              newElementAdded = true;
            } else if (node.querySelector(".section.animate")) {
              newElementAdded = true;
            }
          }
        });
      });

      // If new matching elements were added, re-run the intersection observer
      if (newElementAdded) {
        intersectionObserver.disconnect();
        intersectionObserver = observeSections();
      }
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Cleanup observers on unmount
    return () => {
      intersectionObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
};

export default useScrollReveal;
