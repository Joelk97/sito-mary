import Image from "next/legacy/image";
import styles from "./styles/Card2.module.css";

const Card2 = (props) => {
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
      <h2 className={styles.button}>{props.button}</h2>
      <p className={styles.text}>{props.text}</p>
    </div>
  );
};

export default Card2;
