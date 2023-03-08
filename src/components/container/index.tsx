import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="p-4 max-w-7xl m-auto">{children}</div>;
};

export default Container;
