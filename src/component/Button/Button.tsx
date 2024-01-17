import classes from "./Button.module.scss";
import { IButton } from "./IButton";
const Button = (props: IButton) => {
  const { children, onClick, className } = props;
  return (
    <button
      className={`${classes.buttonWrapper} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
