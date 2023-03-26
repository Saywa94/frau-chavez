import React from "react";
import styles from "./Slider.module.css";
import Image from "next/image";

import { useState } from "react";

type ImageInfo = {
  filename: string;
  country: string;
  description: string;
  main: boolean;
};

export default function Slider(props: { images: Array<ImageInfo> }) {
  const [images, setImages] = useState(props.images);

  function handleClick() {
    let index = images.findIndex(({ main }) => main === true);
    console.log(index);
    index = index + 1 === images.length ? -1 : index;
    const newImages = images.map((image, i) => {
      return { ...image, main: i === index + 1 ? true : false };
    });
    setImages(newImages);
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
                <span>{country}</span>
                <span>{description}</span>
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
