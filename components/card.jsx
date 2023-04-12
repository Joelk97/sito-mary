import Image from "next/legacy/image";
import styles from "./styles/Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={props.image}
          alt={props.alt}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <p className={styles.text}>{props.text}</p>
      <h2 className={styles.button}>{props.button}</h2>
    </div>
  );
};

export default Card;
