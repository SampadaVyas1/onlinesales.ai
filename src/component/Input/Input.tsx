import React from "react";
import classes from "./Input.module.scss";
const Input = (props: any) => {
  const { type, value, onChange, className} = props;
  return (
    <input
      className={`${classes.input} ${className}`}
      type={type}
      value={value}
      onChange={(e) => onChange(e)}
    />
  );
};

export default Input;
