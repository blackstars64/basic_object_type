import AdCard from "./AdCard";

type Ad = {
  title: string;
  price: number;
  image: string;
  link: string;
};

function RecentAds() {
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

  return (
    <>
      <h2>Annonces récentes</h2>
      <section className="recent-ads">
        {ads.map((ad) => (
          <AdCard
            key={ad.title}
            title={ad.title}
            price={ad.price}
            image={ad.image}
            link={ad.link}
          />
        ))}
      </section>
    </>
  );
}

export default RecentAds;
