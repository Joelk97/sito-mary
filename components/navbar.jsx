import styles from "./styles/Nav.module.css";
import homeEl from "../public/multilang/home.json";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/legacy/image";

const Navbar = (props) => {
  const { locale, locales, asPath } = useRouter();
  const [active, setActive] = useState(false);
  const [windowSize, setWindowSize] = useState({
    innerWidth: 700,
    innerHeight: 700,
  });
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(getWindowSize());
    };
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <nav className={styles.navbar}>
      <div style={{ zIndex: "11" }} className={styles.burgerIco}>
        <Image
          onClick={() => setActive(!active)}
          src="/burgerIco.svg"
          width="50"
          height="50"
          alt="Burger icon"
        />
      </div>
      {homeEl.navbar
        .filter((l) => l.locale == locale)
        .map((el, i) => {
          return (
            <div
              key={i}
              className={
                active
                  ? [styles.active, styles.navEl].join(" ")
                  : [styles.navEl]
              }
            >
              {!props.home && (
                <Link className={styles.link} href={`/`}>
                  <span>{el.home}</span>
                </Link>
              )}
              {!props.chiSono && (
                <Link className={styles.link} href={`/chi-sono`}>
                  <span>{el.chisono}</span>
                </Link>
              )}
              {!props.attivita && (
                <Link className={styles.link} href={`/attivita-workshop`}>
                  <span>{el.attivitaeworkshop}</span>
                </Link>
              )}
              {!props.contatto && (
                <Link className={styles.link} href={`/contatto`}>
                  <span>{el.contatto}</span>
                </Link>
              )}
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
    </nav>
  );
};
function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

export default Navbar;
