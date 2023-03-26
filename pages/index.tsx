import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Slider from "@/components/Slider";

const main_images = [
  {
    filename: "/images/torre_eiffel.jpg",
    country: "",
    description: "Torre Eiffel",
    main: false,
  },
  {
    filename: "/images/new_york.jpg",
    country: "",
    description: "Manhathan Skyline",
    main: true,
  },
  {
    filename: "/images/brandenburger.jpg",
    country: "",
    description: "Brandenburger",
    main: false,
  },
  {
    filename: "/images/machupicchu.jpg",
    country: "",
    description: "Machu Picchu",
    main: false,
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Kulturwelt</title>
        <meta
          name="description"
          content="Cursos de Idiomas de Frau Chavez Institute"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Slider images={main_images} />

        <div className={styles.content}>
          <div className={styles.center}>
            <h1>Kulturwelt Institut</h1>
          </div>

          <div className={styles.grid}>
            <h3>A Frau Chavez project.</h3>
          </div>
        </div>
      </main>
    </>
  );
}
