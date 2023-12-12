"use client";
import React, { useRef, useEffect, useState } from "react";
import styles from "./Slider.module.css";

type ImageInfo = {
  filename: string;
  country: string;
  description: string;
  button: string;
};

export default function Slider({ images }: { images: Array<ImageInfo> }) {
  const indexRef = useRef(0);
  const [clicks, setClicks] = useState(0);

  function showNextImage(index: number) {
    const slides = document.querySelectorAll(`.${styles.slide}`);
    const newIndex = index + 1 === slides.length ? 0 : index + 1;

    slides[index].classList.remove(styles.active);
    slides[newIndex].classList.add(styles.active);

    indexRef.current = newIndex;
  }
  function showPreviousImage(index: number) {
    const slides = document.querySelectorAll(`.${styles.slide}`);
    const newIndex = index === 0 ? slides.length - 1 : index - 1;

    slides[index].classList.remove(styles.active);
    slides[newIndex].classList.add(styles.active);

    indexRef.current = newIndex;
  }

  useEffect(() => {
    const slideInterval = setInterval(() => {
      showNextImage(indexRef.current);
    }, 6000);
    return () => clearInterval(slideInterval);
  }, [clicks]);

  return (
    <>
      <div className={styles.slider}>
        <div className={styles.navigation}>
          <span
            className={styles.back_button}
            onClick={() => {
              showPreviousImage(indexRef.current);
              setClicks((c) => c + 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 6l-6 6l6 6" />
            </svg>
          </span>
          <span
            className={styles.next_button}
            onClick={() => {
              showNextImage(indexRef.current);
              setClicks((c) => c + 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 6l6 6l-6 6" />
            </svg>
          </span>
        </div>
        {images.map(({ filename, description, country, button }, index) => (
          <div
            className={`${styles.slide} ${index === 0 ? styles.active : ""}`}
            key={filename}
          >
            <div className={styles.info_container}>
              <span>{description}</span>
              <span>{country}</span>
            </div>
            <img
              className={styles.image}
              src={filename}
              width={1920}
              height={1080}
              alt={description}
            />
            <div className={styles.main_title_container}>
              <h1>Kulturwelt Institut</h1>
              <p>Te abre las puertas al mundo y hace realidad tus sueños</p>
            </div>
            <div className={styles.main_button_container}>
              <button className={styles.main_button}>{button}</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
