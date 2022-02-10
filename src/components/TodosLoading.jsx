import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const TodosLoading = () => {
  return (
    <div className="todo-li glassmorphism-effect">
      <span className={`todo-li-item glassmorphism-effect`}>
        {" "}
        <Skeleton
          height={52}
          width={40}
          baseColor={"rgba(255, 255, 255, 0.1)"}
        />
      </span>
      <p className={`todo-li-item text `}>
        <Skeleton
          height={52}
          width={260}
          baseColor={"rgba(255, 255, 255, 0.1)"}
        />
      </p>
      <span className={`todo-li-item exit glassmorphism-effect`}>
        <Skeleton
          height={52}
          width={40}
          baseColor={"rgba(255, 255, 255, 0.1)"}
        />
      </span>
    </div>
  );
};
