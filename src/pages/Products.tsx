import React, { JSX, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { Container } from "react-bootstrap";
import { Product } from "@components/ecommerce";
import { actGetProducts, cleanUp } from "@store/products/productsSlice";
import { useParams } from "react-router-dom";
import Loading from "@components/feedback/Loading/Loading";
import { GridList } from "@components/common";

const Products: React.FC = (): JSX.Element => {
  const { record, loading, error } = useAppSelector((state) => state.products);
  const param = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(actGetProducts(param.prefix as string));
    return () => {
      dispatch(cleanUp());
    };
  }, [dispatch, param]);

  return (
    <Container>
      <Loading status={loading} error={error}>
        <GridList
          record={record}
          renderItems={(record) => <Product {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Products;
