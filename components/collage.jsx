import Image from "next/legacy/image";
import styles from "./styles/Collage.module.css";

const Collage = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.image1}>
        <Image
          layout="fill"
          objectFit="cover"
          src={props.src1}
          alt={props.alt1}
        />
      </div>
      <div className={styles.image2}>
        <Image
          layout="fill"
          objectFit="cover"
          src={props.src2}
          alt={props.alt2}
        />
      </div>
      <div className={styles.image3}>
        <Image
          layout="fill"
          objectFit="cover"
          src={props.src3}
          alt={props.alt3}
        />
      </div>
    </div>
  );
};

export default Collage;
