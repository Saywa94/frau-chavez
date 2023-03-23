import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Frau Chavez Institute</title>
        <meta
          name="description"
          content="Cursos de Idiomas de Frau Chavez Institute"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <h1>Frau Chavez Institute</h1>
        </div>

        <div className={styles.grid}></div>
      </main>
    </>
  );
}
