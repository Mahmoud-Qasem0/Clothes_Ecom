import { TCategory } from "@customTypes/category";
import React, { JSX } from "react";
import { Col, Row } from "react-bootstrap";

type GridListProps = {
  record: TCategory[];
  renderItems: (record: TCategory) => React.ReactNode;
};

const GridList: React.FC<GridListProps> = ({
  record,
  renderItems,
}): JSX.Element => {
  const categoriesList =
    record.length > 0
      ? record.map((cat: TCategory) => (
          <Col
            key={cat.id}
            xs={6}
            md={3}
            className="d-flex justify-content-center mb-5 mt-2">
            {renderItems(cat)}
          </Col>
        ))
      : "There are no Categories";

  return <Row>{categoriesList}</Row>;
};

export default GridList;
