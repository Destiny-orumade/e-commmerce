import { useGetProductsQuery } from "../redux/productApiSlice";
import Spinners from "./Spinners";
import styles from "../style/Cards.module.css";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

function Card() {
  const { limit } = useSelector((state: RootState) => state.loadMore);
  const { isLoading, data, isError } = useGetProductsQuery({ limit });

  console.log(data);

  const storeProduct = data?.products.map((products) => (
    <div className={styles.productParent} key={products.id}>
      <img src={products.thumbnail} alt={`Image of ${products.title}`} />
      <div className={styles.productText}>
        <h5>{products.title}</h5>
        <p>{products.description}</p>
        <h4>
          <span className={styles.ProductPrice}>${products.price}</span>{" "}
          <span className={styles.ProductDiscount}>
            ${products.discountPercentage}
          </span>
        </h4>
      </div>
    </div>
  ));

  if (isLoading) {
    return (
      <div className={styles.spin}>
        <Spinners />
      </div>
    );
  }

  if (isError) {
    return (
      <>
        <div className={styles.spin}>Error Fetching Products...</div>
      </>
    );
  }

  return <>{storeProduct}</>;
}

export default Card;