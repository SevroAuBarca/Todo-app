import React from "react";

export const withStorageListener = (WrappedComponent) => {
  return (props) => {
    const [storageChange, setStorageChange] = React.useState(false);

    window.addEventListener("storage", (change) => {
      change.key === "TODOS_V1" && setStorageChange(true);
    });

    const toggleSincronized = () => {
      setStorageChange(false);
      props.sincronized();
    };

    return (
      <WrappedComponent show={storageChange} toggleShow={toggleSincronized} />
    );
  };
};
