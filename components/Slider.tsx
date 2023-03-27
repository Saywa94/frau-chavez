import React, { useEffect } from "react";
import styles from "./Slider.module.css";
import Image from "next/image";

import { useState } from "react";

type ImageInfo = {
  filename: string;
  country: string;
  description: string;
  main: boolean;
};

function selectNextImage(images: Array<ImageInfo>) {
  let index = images.findIndex(({ main }) => main === true);
  index = index + 1 === images.length ? -1 : index;
  const newImages = images.map((image, i) => {
    return { ...image, main: i === index + 1 ? true : false };
  });

  return newImages;
}

export default function Slider(props: { images: Array<ImageInfo> }) {
  const [images, setImages] = useState(props.images);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      console.log("useEffect was hit!!");
      setImages(selectNextImage(images));
    }, 7000);
    return () => clearInterval(slideInterval);
  }, [images]);

  function handleClick() {
    setImages(selectNextImage(images));
  }

  return (
    <>
      <div className={styles.slider}>
        {images.map(({ filename, description, main, country }) => {
          return (
            <div
              className={`${styles.slide} ${main ? styles.active : ""}`}
              key={filename}
            >
              <div className={styles.info_container}>
                <span>{description}</span>
                <span>{country}</span>
              </div>
              <Image
                className={styles.image}
                src={filename}
                width={1920}
                height={1080}
                alt={description}
              />
            </div>
          );
        })}
      </div>
      <button onClick={handleClick}>Change</button>
    </>
  );
}
