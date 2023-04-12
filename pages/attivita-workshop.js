import Head from "next/head";
import Navbar from "../components/navbar";
import styles from "../styles/Attivita.module.css";
import Image from "next/legacy/image";
import Carousel from "../components/carouselHome";
import Card from "../components/card";
import Card2 from "../components/card2";
import Collage from "../components/collage";
import homeEl from "../public/multilang/home.json";
import { useRouter } from "next/router";
import Link from "next/link";
import { useRef, useState } from "react";
import Footer from "../components/Footer";

export default function AttivitaWorkshop() {
  const { locale, locales, asPath } = useRouter();
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messaggio, setMessaggio] = useState("");
  return (
    <>
      <Head>
        <title>Marylin Moggi</title>
        <meta
          name="description"
          content="Danza, pilates e meditazione con Marylin Moggi"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar attivita="true" />
      <main className={styles.main}>
        <section className={`${styles.section} ${styles.section1}`}>
          <h1 className={styles.titleSection}>Attività e workshop</h1>
          <div className={styles.cards}>
            <Card
              button="Pilates"
              text="Occaecat elit aute irure quis aliqua sint magna ex et eiusmod voluptate exercitation."
              alt="Immagine"
              image="/img/maryNatura.jpg"
            />
            <Card
              button="Pilates"
              text="Occaecat elit aute irure quis aliqua sint magna ex et eiusmod voluptate exercitation."
              alt="Immagine"
              image="/img/maryNatura.jpg"
            />
            <Card
              button="Pilates"
              text="Occaecat elit aute irure quis aliqua sint magna ex et eiusmod voluptate exercitation."
              alt="Immagine"
              image="/img/maryNatura.jpg"
            />
            <Card
              button="Pilates"
              text="Occaecat elit aute irure quis aliqua sint magna ex et eiusmod voluptate exercitation."
              alt="Immagine"
              image="/img/maryNatura.jpg"
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
