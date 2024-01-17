import React from "react";
import classes from "./Input.module.scss";
const Input = (props: any) => {
  const {
    type,
    value,
    onChange,
    className,
    label,
    placeholder,
    onClick,
    required,
    minLength,
    maxLength,
    customclass,
  } = props;
  console.log(minLength, maxLength);
  return (
    <div className={`${classes.inputWrapper} `}>
      {label && (
        <div>
          {label} <span className={classes.required}>{required && "*"}</span>
        </div>
      )}
      <input
        className={`${classes.input} ${className}  ${
          type === "checkbox" ? classes[type] : ""
        } ${customclass}`}
        type={type}
        value={value}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        onClick={onClick}
        minLength={Number(minLength)}
        maxLength={Number(maxLength)}
      />
    </div>
  );
};

export default Input;
