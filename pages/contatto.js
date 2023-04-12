import Head from "next/head";
import Navbar from "../components/navbar";
import styles from "../styles/Contatto.module.css";
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
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";

export default function Contatto() {
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

      <Navbar contatto="true" />
      <main className={styles.main}>
        <section className={`${styles.section} ${styles.section1}`}>
          <h1 className={styles.titleSection}>Contatto</h1>
          <div className={styles.adress}>
            <span>Marilyn Moggi</span>
            <span>Route de Bertigny</span>
            <span>1700 Fribourg</span>
          </div>
          <div className={styles.telEmail}>
            <div className={styles.tel}>
              <MdOutlinePhone style={{ width: "4em", height: "4em" }} />
              <span>0794535656</span>
            </div>
            <div className={styles.email}>
              <MdOutlineEmail style={{ width: "4em", height: "4em" }} />
              <span>
                <Link
                  className={styles.link}
                  href="mailto:marylinmoggi@gmail.com"
                >
                  marylin.moggi@gmail.com
                </Link>
              </span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
