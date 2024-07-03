import Image from "next/image";
import styles from "../styles/adCard.module.css";
import Link from "next/link";

type AdCardProps = {
  title: string;
  price: number;
  picture: string;
  link: string;
  description: string;
  setTotal: (total: number) => void;
  total: number;
};

function AdCard({
  title,
  price,
  description,
  picture,
  link,
  setTotal,
  total,
}: AdCardProps) {
  return (
    <div className={styles.container}>
      <Link className={styles.link} href={`/ads/${link}`}>
        <Image
          className={styles.image}
          src={
            picture
              ? picture
              : "https://upload.wikimedia.org/wikipedia/commons/f/f8/Question_mark_alternate.svg"
          }
          alt={title}
          width={300}
          height={200}
        />
        <div className={styles.text}>
          <div className={styles.title}>{title}</div>
          <div className={styles.price}>{price} €</div>
        </div>
        {description && <p className={styles.desc}>{description}</p>}
      </Link>
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
