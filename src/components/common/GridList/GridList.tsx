import React, { JSX } from "react";
import { Col, Row } from "react-bootstrap";

type GridListProps<T> = {
  record: T[];
  renderItems: (record: T) => React.ReactNode;
};

type HasId = { id?: number }

const GridList = <T extends HasId>({
  record,
  renderItems,
}: GridListProps<T>): JSX.Element => {
  const itemsList =
    record.length > 0
      ? record.map((item) => (
          <Col
            key={item.id}
            xs={6}
            md={3}
            className="d-flex justify-content-center mb-5 mt-2">
            {renderItems(item)}
          </Col>
        ))
      : "There are no Categories";

  return <Row>{itemsList}</Row>;
};

export default GridList;
