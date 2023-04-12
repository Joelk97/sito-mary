import Image from "next/legacy/image";
import styles from "./styles/Carousel.module.css";

const Carousel = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image
            layout="fill"
            objectFit="cover"
            alt={props.alt}
            src="/img/maryPilates1.png"
          />
        </div>
        <div className={styles.titleHor}>Pilates</div>
        <div className={styles.textes}>
          <div className={styles.subtitle}>Il Pilates è...</div>
          <div className={styles.text}>
            Deserunt qui officia eu labore. Pariatur culpa id ea nulla officia
            in dolore irure exercitation amet reprehenderit sit do proident.
          </div>
        </div>
      </div>
      <div className={styles.arrows}>
        <div className={`${styles.left} ${styles.arrow}`}>
          <Image
            objectFit="contain"
            layout="fill"
            alt="arrow left"
            src="/img/arrow.svg"
          />
        </div>
        <div className={`${styles.right} ${styles.arrow}`}>
          <Image
            objectFit="contain"
            layout="fill"
            alt="arrow left"
            src="/img/arrow.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
