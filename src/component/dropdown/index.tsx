import classes from "./dropdown.module.scss";

const Dropdown = (props: any) => {
  const { label = "", placeholder, options = [], customClass, control } = props;
  return (
    <div className={classes.dropDown}>
      <label className={classes.label}>{label}</label>
      <select name="cars" id="cars" className={classes.select}>
        {options?.map((option: string) => {
          return <>{<option value={option}>{option}</option>}</>;
        })}
      </select>
    </div>
  );
};

export default Dropdown;
