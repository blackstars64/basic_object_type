import styles from "../styles/adCard.module.css";

type AdCardProps = {
  title: string;
  price: number;
  image: string;
  link: string;
  setTotal: (total: number) => void;
  total: number;
};

function AdCard({ title, price, image, link, setTotal, total }: AdCardProps) {
  return (
    <div className={styles.container}>
      <a className={styles.link} href={`/ads/${link}`}>
        <img className={styles.image} src={`/images/${image}`} />
        <div className={styles.text}>
          <div className={styles.title}>{title}</div>
          <div className={styles.price}>{price} €</div>
        </div>
      </a>
      <div className={styles.cBtn}>
        <button
          onClick={() => {
            setTotal(total + price);
          }}
          className={styles.button}
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}

export default AdCard;
