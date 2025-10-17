import { TLoading } from "@customTypes/shared";
import React, { JSX, ReactNode } from "react";

type LoadingProps = {
  status: TLoading;
  error: string | null;
  children: ReactNode;
};
const Loading: React.FC<LoadingProps> = ({
  status,
  error,
  children,
}): JSX.Element => {
  if (status === "pending") {
    return <div>Loading Please Wait</div>;
  }
  if (status === "failed") {
    return <div>{error}</div>;
  }
  return <>{children}</>;
};

export default Loading;
