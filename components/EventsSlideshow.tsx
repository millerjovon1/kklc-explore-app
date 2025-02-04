"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import styles from "@/styles/components/EventSlideshow.module.css";
import { eventsData } from "@/data/events";

const EventsSlideshow: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slideTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Navigate to next/previous slide
  const nextSlide = (n: number) => {
    if (slideTimerRef.current) {
      clearTimeout(slideTimerRef.current);
    }
    setSlideIndex((prev) => (prev + n + eventsData.length) % eventsData.length);
  };

  // Jump to a specific slide
  const goToSlide = (n: number) => {
    if (slideTimerRef.current) {
      clearTimeout(slideTimerRef.current);
    }
    setSlideIndex(n);
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    slideTimerRef.current = setTimeout(() => {
      setSlideIndex((prev) => (prev + 1) % eventsData.length);
    }, 5000);

    return () => {
      if (slideTimerRef.current) {
        clearTimeout(slideTimerRef.current);
      }
    };
  }, [slideIndex]);

  return (
    <div className={styles.slideshowContainer}>
      <section className="section animate">
      {eventsData.map((event, index) => (
        <div
          key={event.id}
          className={`${styles.mySlides} ${
            index === slideIndex ? styles.activeSlide : ""
          } ${styles.fade}`}
        >
          <div className={styles.numbertext}>
            {index + 1} / {eventsData.length}
          </div>
          <Image
            src={event.image}
            alt={`event ${index + 1}`}
            layout="responsive"
            width={800}
            height={600}
            className={styles.eventPhoto}
          />
          <div className={styles.text}>{event.caption}</div>
        </div>
      ))}

      <a className={styles.prev} onClick={() => nextSlide(-1)}>
        &#10094;
      </a>
      <a className={styles.next} onClick={() => nextSlide(1)}>
        &#10095;
      </a>

      <div className={styles.dotsContainer}>
        {eventsData.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === slideIndex ? styles.activeDot : ""
            }`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </section>
    </div>
  );
};

export default EventsSlideshow;
