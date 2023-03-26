import Head from "next/head";
import styles from "@/styles/Home.module.css";

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
        <div className={styles.center}>
          <h1>Kulturwelt Institut</h1>
        </div>

        <div className={styles.grid}>
          <h3>A Frau Chavez project.</h3>
        </div>
      </main>
    </>
  );
}
