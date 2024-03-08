import styles from "@/styles/Home.module.css";
import Slider from "@/components/Slider";
import Navbar from "@/components/Navbar";

const main_images = [
  {
    filename: "/images/new_york.jpg",
    country: "United States",
    description: "Empire State Building",
    button: "Inglés",
  },
  {
    filename: "/images/torre_eiffel.jpg",
    country: "France",
    description: "Tour Eiffel",
    button: "Francés",
  },
  {
    filename: "/images/rio_janeiro.jpg",
    country: "Brasil",
    description: "Pão de Açúcar",
    button: "Portugués",
  },
  {
    filename: "/images/brandenburger.jpg",
    country: "Deutschland",
    description: "Brandenburger Tor",
    button: "Alemán",
  },
  {
    filename: "/images/machupicchu.jpg",
    country: "Peru",
    description: "Machu Picchu",
    button: "Español",
  },
];

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Navbar />

        <Slider images={main_images} />

        <div className={styles.content}>
          <div className={styles.center}>
            <h1></h1>
          </div>
          <div style={{ minHeight: "25em" }}></div>
          <div>
            <p className={styles.signature}>A Frau Chavez project.</p>
          </div>
        </div>
      </main>
    </>
  );
}
