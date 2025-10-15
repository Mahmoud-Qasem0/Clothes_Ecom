import React, { JSX, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { Category } from "@components/ecommerce";
import { actGetCategories } from "@store/categories/categoriesSlice";
import Loading from "@components/feedback/Loading/Loading";
import { GridList } from "@components/common";

const Categories: React.FC = (): JSX.Element => {
  const { record, loading, error } = useAppSelector(
    (state) => state.categories
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!record.length) {
      dispatch(actGetCategories());
    }
  }, [dispatch, record]);

  return (
    <Container>
      <Loading status={loading} error={error}>
        <GridList
          record={record}
          renderItems={(record) => <Category {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Categories;
