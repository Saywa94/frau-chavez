import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Slider from "@/components/Slider";

const main_images = [
  {
    filename: "/images/new_york.jpg",
    country: "United States",
    description: "Empire State Building",
  },
  {
    filename: "/images/torre_eiffel.jpg",
    country: "France",
    description: "Tour Eiffel",
  },
  {
    filename: "/images/rio_janeiro.jpg",
    country: "Brasil",
    description: "Pão de Açúcar",
  },
  {
    filename: "/images/brandenburger.jpg",
    country: "Deutschland",
    description: "Brandenburger Tor",
  },
  {
    filename: "/images/machupicchu.jpg",
    country: "Peru",
    description: "Machu Picchu",
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
            <h1></h1>
          </div>

          <div className={styles.grid}>
            <h3>A Frau Chavez project.</h3>
          </div>
        </div>
      </main>
    </>
  );
}
