import { useDispatch, useSelector } from "react-redux";
import { useGetProductsQuery } from "../redux/productApiSlice";
import { type AppDispatch, type RootState } from "../redux/store";
import Cards from "./Cards";
import styles from "../style/Products.module.css";
import {loadMore } from "../redux/loadMoreSlice"


function BestSeller() {
  const { limit } = useSelector((state: RootState) => state.loadMore);
  const { isLoading } = useGetProductsQuery({ limit });

  const dispatch = useDispatch<AppDispatch>();

  const handleLoadMore = () => {
    dispatch(loadMore());
  };

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.intro}>
          {/* Intro/Title section */}
          <h4>Featured Products</h4>
          <h3>
            BESTSELLER <span>PRODUCTS</span>
          </h3>
          <p>
            Problems trying to resolve the <span> conflict between </span>
          </p>
        </div>

        <div className={styles.fetchedProducts}>
          {/* Fetched products */}
          <Cards />
        </div>

        <div className={styles.button}>
          <button onClick={handleLoadMore} disabled={isLoading}>
            LOAD MORE PRODUCTS
          </button>
        </div>
      </section>
    </div>
  );
}

export default BestSeller;