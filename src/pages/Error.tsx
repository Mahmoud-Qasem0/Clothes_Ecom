import React, { JSX } from "react";
import { Container } from "react-bootstrap";
import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

const Error: React.FC = (): JSX.Element => {
  const error = useRouteError();
  let errorCode: number;
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorCode = error.status;
    errorMessage = error.statusText;
  } else {
    errorCode = 404;
    errorMessage = "Page Not Found";
  }

  return (
    <Container className="notFound d-flex justify-content-center flex-column vh-100">
      <h1>{errorCode}</h1>
      <p>{errorMessage}</p>
      <Link to="/" replace={true}>
        How about going back to safety?
      </Link>
    </Container>
  );
};

export default Error;
