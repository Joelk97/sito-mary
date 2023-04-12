import Head from "next/head";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
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

export default function Home() {
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

      <Navbar home="true" />
      <main className={styles.main}>
        <section className={`${styles.section} ${styles.section1}`}>
          <div className={styles.headerCont}>
            <div className={styles.imgHeader}>
              <Image
                alt="Immagine"
                src="/img/maryNatura.jpg"
                layout="fill"
                objectFit="cover"
                style={{
                  borderBottomLeftRadius: "25vw",
                  borderTopLeftRadius: "25vw",
                }}
              />
            </div>
            <div className={styles.textHeader}>
              <h1>Danza e pilates</h1>
              <h2>con Marylin</h2>
            </div>
          </div>
        </section>
        <section className={`${styles.section} ${styles.section2}`}>
          <Carousel />
        </section>
        <section className={`${styles.section} ${styles.section3}`}>
          <h1 className={`${styles.titleSection} ${styles.titleSection3}`}>
            Novità e workshop
          </h1>
          <div className={`${styles.cardsSection3} ${styles.cards}`}>
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
        <section className={`${styles.section} ${styles.section4}`}>
          <h1 className={`${styles.titleSection} ${styles.titleSection4}`}>
            Su cosa lavoro
          </h1>
          <div className={`${styles.cardsSection4} ${styles.cards}`}>
            <Card2
              button="Mobilità"
              image="/img/mobilita.png"
              alt="Mobitlià"
              text="Elit elit exercitation officia reprehenderit veniam eiusmod voluptate nisi."
            />
            <Card2
              button="Forza"
              image="/img/forza.png"
              alt="Forza"
              text="Elit elit exercitation officia reprehenderit veniam eiusmod voluptate nisi."
            />
            <Card2
              button="Benessere"
              image="/img/benessere.png"
              alt="Benessere"
              text="Elit elit exercitation officia reprehenderit veniam eiusmod voluptate nisi."
            />
          </div>
        </section>
        <section className={`${styles.section} ${styles.section5}`}>
          <Collage
            alt1="image1"
            alt2="image1"
            alt3="image1"
            src1="/img/collageph2.png"
            src2="/img/maryPilates1.png"
            src3="/img/maryNatura.jpg"
          />
          <div className={`${styles.textSection5}`}>
            <span>Ciao!</span>
            <h1>Io sono Marylin Moggi</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className={styles.logoSection5}>
            <Image
              style={{ opacity: "20%" }}
              layout="fill"
              objectFit="contain"
              alt="yogaimg"
              src="/img/yoga.png"
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
