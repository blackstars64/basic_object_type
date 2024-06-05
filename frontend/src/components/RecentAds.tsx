import { useState } from "react";
import AdCard from "./AdCard";
import style from "../styles/recentAds.module.css";

type Ad = {
  title: string;
  price: number;
  image: string;
  link: string;
};

function RecentAds() {
  const [total, setTotal] = useState<number>(0);

  const ads: Ad[] = [
    { title: "Table", price: 120, image: "table.webp", link: "table" },
    {
      title: "Dame-jeanne",
      price: 75,
      image: "dame-jeanne.webp",
      link: "dame-jeanne",
    },
    {
      title: "Vide-poche",
      price: 4,
      image: "vide-poche.webp",
      link: "vide-poche",
    },
    {
      title: "Vaisselier",
      price: 900,
      image: "vaisselier.webp",
      link: "vaisselier",
    },
    { title: "Bougie", price: 8, image: "bougie.webp", link: "bougie" },
    {
      title: "Porte-magazine",
      price: 45,
      image: "porte-magazine.webp",
      link: "porte-magazine",
    },
  ];

  type Total = {
    total: number;
    setTotal: (total: number) => void;
  };

  return (
    <>
      <div className={style.contenairTAndP}>
        <h2>Annonces récentes</h2>
        <p>Prix total: {total}€</p>
      </div>
      <section className="recent-ads">
        {ads.map((ad: Ad, index: number) => (
          <AdCard key={index} {...ad} setTotal={setTotal} total={total} />
        ))}
      </section>
    </>
  );
}

export default RecentAds;
