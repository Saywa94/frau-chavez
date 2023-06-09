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
      <main className={styles.main}>
        <Slider images={main_images} />

        <div className={styles.content}>
          <div className={styles.center}>
            <h1></h1>
          </div>

          <div>
            <p className={styles.signature}>A Frau Chavez project.</p>
          </div>
        </div>
      </main>
    </>
  );
}
