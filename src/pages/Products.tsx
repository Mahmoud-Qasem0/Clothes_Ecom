import React, { JSX, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { Col, Container, Row } from "react-bootstrap";
import { Product } from "@components/ecommerce";
import { actGetProducts, cleanUp } from "@store/products/productsSlice";
import { useParams } from "react-router-dom";
import Loading from "@components/feedback/Loading/Loading";

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

  const productsList =
    record.length > 0
      ? record.map((product) => (
          <Col
            key={product.id}
            xs={6}
            md={3}
            className="d-flex justify-content-center mb-5 mt-2">
            <Product {...product} />
          </Col>
        ))
      : "There are no Products";

  return (
    <Container>
      <Loading status={loading} error={error}>
        <Row>{productsList}</Row>
      </Loading>
    </Container>
  );
};

export default Products;
