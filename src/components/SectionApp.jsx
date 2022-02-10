import React from "react";

export const SectionApp = ({ classData, render }) => {
  //React.Children.toArray(children).map((child) =>
  //React.cloneElement(child, { loading: loading })
  //);
  return <section className={classData}>{render()}</section>;
};
