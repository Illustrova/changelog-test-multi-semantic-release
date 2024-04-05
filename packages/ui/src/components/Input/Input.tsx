import React from "react";

type InputProps = {
  label: string;
};

export const Input = (props: InputProps) => {
  return <input value={props.label} />;
};
