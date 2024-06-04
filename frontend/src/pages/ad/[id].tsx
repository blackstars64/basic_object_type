import { useRouter } from "next/router";

function AdDetailComponent() {
  const router = useRouter();
  const { id } = router.query;

  return <p>Display details of ad with id {id}</p>;
}

export default AdDetailComponent;
