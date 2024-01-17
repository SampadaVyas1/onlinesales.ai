import React from "react";
import classes from "./Button.module.scss";
const Button = (props: any) => {
  const { children, onClick, className } = props;
  return (
    <div className={`${classes.buttonWrapper} ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
