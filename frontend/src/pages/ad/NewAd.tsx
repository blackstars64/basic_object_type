import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import styles from "@/styles/NewAd.module.css";

const toBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

function NewAd() {
  const router = useRouter();
  const form = useRef<HTMLFormElement>(null);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3005/api/category").then((response) => {
      setCategories(response.data);
    });
  }, []);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    let b64 = "";
    const file: File | null = form.photo.files[0] || null;

    if (file) {
      try {
        b64 = await toBase64(file);
      } catch (error) {
        console.error("Error converting file to base64:", error);
      }
    }

    const priceNumb: number = parseInt(form.price.value || "0");

    type Ad = {
      title: string;
      description: string;
      price: number;
      picture: string;
      location: string;
      createdAt: string;
      category: { name: string };
      tags: { name: string };
    };

    const data: Ad = {
      title: form.title.value,
      description: form.description.value,
      price: priceNumb,
      picture: b64,
      location: form.location.value,
      createdAt: new Date().toISOString(),
      category: { name: form.category.value },
      tags: { name: "test" },
    };

    console.log("data", data);

    const response = axios.post("http://localhost:3005/api/ads", data);

    form.reset();

    router.push("/");
  };

  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
      ref={form}
      className={styles.form}
    >
      <label className={styles.label}>
        Titre de l&apos;annonce
        <input className={styles.input} type="text" name="title" id="title" />
      </label>
      <label className={styles.label}>
        Description
        <input
          className={styles.input}
          type="text"
          name="description"
          id="description"
        />
      </label>
      <label className={styles.label}>
        Prix
        <input className={styles.input} type="text" name="price" id="price" />
      </label>
      <label className={styles.label}>
        Photo
        <input className={styles.file} type="file" name="photo" id="photo" />
      </label>
      <label className={styles.label}>
        Localisation
        <input
          className={styles.input}
          type="text"
          name="location"
          id="location"
        />
      </label>
      <label className={styles.label}>
        Category
        <select className={styles.select} name="category" id="category">
          {categories.map((category: any) => (
            <option
              className={styles.option}
              key={category.id}
              value={category.name}
            >
              {category.name}
            </option>
          ))}
        </select>
      </label>
      <button type="submit" className={styles.button}>
        Créer l&apos;annonce
      </button>
    </form>
  );
}

export default NewAd;
