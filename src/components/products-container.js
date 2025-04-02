import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux";

function ProductsContainer(props) {
  const productsData = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      {productsData?.loading ? (
        <p>Loading...</p>
      ) : productsData?.error?.length ? (
        <p>{productsData?.error}</p>
      ) : (
        productsData?.products?.length && (
          <ul>
            {" "}
            {productsData?.products?.map((product) => (
              <li>{product?.title}</li>
            ))}{" "}
          </ul>
        )
      )}
    </div>
  );
}

export default ProductsContainer;
