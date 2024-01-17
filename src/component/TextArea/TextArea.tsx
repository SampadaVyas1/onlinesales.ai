import React from "react";
import classes from "./text-area.module.scss";
import { ITextAreaProps } from "./text-area";

const TextArea = (props: any) => {
  const { placeholder, required, label, maxLength } = props;

  return (
    <div
      className={`${classes.resetDefaultStyle} ${classes.componentWrapper} `}
    >
      <label>
        {label}
        <span className={classes.required}>{required && "*"}</span>
      </label>
      <textarea
        placeholder={placeholder}
        maxLength={maxLength}
        className={classes.componentWrapper}
      />
    </div>
  );
};

export default TextArea;
