import Head from "next/head";
import Navbar from "../components/navbar";
import styles from "../styles/Chisono.module.css";
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

export default function Chisono() {
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

      <Navbar chiSono="true" />
      <main className={styles.main}>
        <section className={`${styles.section} ${styles.section1}`}>
          <h1 className={styles.titleSection}>Ciao, sono Marylin!</h1>
          <div className={styles.chiSonoImage}>
            <Image
              layout="fill"
              objectFit="cover"
              alt="ciao"
              src="/img/maryNatura.jpg"
            />
          </div>
        </section>
        <section className={`${styles.section} ${styles.section2}`}>
          <h1 className={styles.titleSection}>Qua sta scritto un titolo</h1>
          <p>
            Eu laboris incididunt do fugiat nostrud velit. Et sint cillum
            laboris qui ea. Laborum duis ullamco eiusmod nostrud nisi esse amet
            velit veniam ea sunt do amet adipisicing. Non quis do irure cillum
            exercitation quis exercitation reprehenderit et Lorem enim qui. Id
            culpa et ea voluptate occaecat proident Lorem. Nulla proident dolor
            pariatur eiusmod magna et aute ea exercitation laborum sit ipsum.
            Ipsum nulla adipisicing nostrud anim do proident velit fugiat qui id
            exercitation nisi.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
