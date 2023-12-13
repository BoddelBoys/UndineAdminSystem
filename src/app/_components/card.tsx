import React, { ReactNode } from "react";

interface CardProp {
  title: string;
  children: ReactNode;
}

const Card = (props: CardProp) => {
  const { title } = props;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title justify-center">{title}</h2>
        {props.children}
      </div>
    </div>
  );
};

export default Card;
