import React, { useEffect, useLayoutEffect } from "react";
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

  useLayoutEffect(() => {
    const slideInterval = setInterval(() => {
      setImages(selectNextImage(images));
    }, 7000);
    return () => clearInterval(slideInterval);
  }, [images]);

  // function handleClick() {
  //   setImages(selectNextImage(images));
  // }

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
              <div className={styles.main_title_container}>
                <h1>Kulturwelt Institut</h1>
                <p>Te abre las puertas al mundo y hace realidad tus sueños</p>
              </div>
            </div>
          );
        })}
      </div>
      {/* <button onClick={handleClick}>next</button> */}
    </>
  );
}
