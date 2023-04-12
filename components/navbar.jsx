import styles from "./styles/Nav.module.css";
import homeEl from "../public/multilang/home.json";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = (props) => {
  const { locale, locales, asPath } = useRouter();

  return (
    <nav className={styles.navbar}>
      {homeEl.navbar
        .filter((l) => l.locale == locale)
        .map((el, i) => {
          return (
            <div key={i} className={styles.navEl}>
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

export default Navbar;
