import styles from "../styles/AdCard.module.css";

type AdCardProps = {
  title: string;
  price: number;
  image: string;
  link: string;
};

function AdCard({ title, price, image, link }: AdCardProps) {
  return (
    <div className={styles.container}>
      <a className={styles.link} href={`/ads/${link}`}>
        <img className={styles.image} src={`/images/${image}`} />
        <div className={styles.text}>
          <div className={styles.title}>{title}</div>
          <div className={styles.price}>{price} €</div>
        </div>
      </a>
    </div>
  );
}

export default AdCard;
