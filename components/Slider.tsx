"use client";
import React, { useRef, useEffect } from "react";
import styles from "./Slider.module.css";
import Head from "next/head";

type ImageInfo = {
  filename: string;
  country: string;
  description: string;
};

export default function Slider({ images }: { images: Array<ImageInfo> }) {
  const indexRef = useRef(0);

  function showNextImage(index: number) {
    const slides = document.querySelectorAll(`.${styles.slide}`);
    const newIndex = index + 1 === slides.length ? 0 : index + 1;

    slides[index].classList.remove(styles.active);
    slides[newIndex].classList.add(styles.active);

    indexRef.current = newIndex;
  }

  useEffect(() => {
    const slideInterval = setInterval(() => {
      showNextImage(indexRef.current);
    }, 6000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <>
      <Head>
        <link rel="preload" href={images[0].filename} as="image" />
      </Head>

      <div className={styles.slider}>
        {images.map(({ filename, description, country }, index) => (
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
          </div>
        ))}
      </div>
    </>
  );
}
