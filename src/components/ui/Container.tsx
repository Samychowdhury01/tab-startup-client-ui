import React, { ReactNode } from "react";

const Container = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="max-w-7xl mx-auto m-10 p-10">{children}</div>;
};

export default Container;
