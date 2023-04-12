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

const Footer = () => {
  const { locale, locales, asPath } = useRouter();
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messaggio, setMessaggio] = useState("");
  return (
    <footer className={styles.footer}>
      <div className={styles.contactMeFooter}>
        <h1>Contattami!</h1>
        <form className={styles.formContainer} ref={form}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            id="name"
            placeholder="nome"
            required
          ></input>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email"
            name="email"
            id="email"
            required
          ></input>
          <button>Invia</button>
          <input
            style={{ gridColumn: "1/4" }}
            id="messaggio"
            placeholder="messaggio"
            name="messaggio"
            value={messaggio}
            onChange={(e) => setMessaggio(e.target.value)}
          ></input>
        </form>
        <h2 className={styles.copyright}>© Copyright - 2023 Marylin Moggi</h2>
      </div>
      <div className={styles.footerNav}>
        {homeEl.navbar
          .filter((l) => l.locale == locale)
          .map((el, i) => {
            return (
              <div className={styles.footerNavEl} key={i}>
                <Link className={styles.link} href={`/chi-sono`}>
                  <span>{el.chisono}</span>
                </Link>
                <span>{el.attivitaeworkshop}</span>
                <span>{el.contatto}</span>
              </div>
            );
          })}
        <div className={styles.navLang}>
          <Link
            className={`${
              locale == locales?.[0] ? styles.active : styles.languages
            }`}
            href={asPath}
            locale={locales?.[0]}
          >
            <span>{locales?.[0].toUpperCase()}</span>
          </Link>
          <span>|</span>
          <Link
            className={`${
              locale == locales?.[1] ? styles.active : styles.languages
            }`}
            href={asPath}
            locale={locales?.[1]}
          >
            <span>{locales?.[1].toUpperCase()}</span>
          </Link>
          <span>|</span>
          <Link
            className={`${
              locale == locales?.[2] ? styles.active : styles.languages
            }`}
            href={asPath}
            locale={locales?.[2]}
          >
            <span>{locales?.[2].toUpperCase()}</span>
          </Link>
        </div>
        <h2 className={styles.copyrightMobile}>
          © Copyright - 2023 Marylin Moggi
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
