import Input from "../Input/Input";
import classes from "./FormField.module.scss";
import Button from "../Button/Button";

const FormField = ({ index, field, onChange, onRemove }: any) => {
  return (
    <div>
      <div>
        <label className={classes.textInputWrapper}>
          <div>
            <div className={classes.label}>{"Enter Your Label Name"}</div>
            <Input
              type="text"
              value={field.label}
              onChange={(e: any) => onChange(index, "label", e.target.value)}
            />
            <div className={classes.label}>Enter placeholder</div>
            <Input
              type="text"
              value={field.placeholder}
              onChange={(e: any) =>
                onChange(index, "placeholder", e.target.value)
              }
            />
            <div className={classes.label}>MinLength</div>
            <Input
              type="number"
              value={field.minLength}
              onChange={(e: any) => {
                onChange(index, "minLength", e.target.value);
              }}
            />
            <div className={classes.label}>Required</div>
            <Input
              type="checkbox"
              value={field.required}
              onChange={(e: any) => {
                onChange(index, "required", e.target.checked);
              }}
            />
          </div>
          <div>
            <div className={classes.label}>MaxLength</div>
            <Input
              type="number"
              value={field.maxLength}
              onChange={(e: any) => {
                onChange(index, "maxLength", e.target.value);
              }}
            />
            <label className={classes.fields}>
              <div
                className={`${classes.labelForlabelField} ${classes.fieldTypelabel} ${classes.label}`}
              >
                Field Type:
              </div>
              <select
                value={field.type}
                onChange={(e) => onChange(index, "type", e.target.value)}
                className={classes.selectField}
              >
                <option value="text">Text Input</option>
                <option value="textarea">Textarea</option>
                <option value="dropdown">Dropdown</option>
                <option value="checkbox">Checkbox</option>
                <option value="radio">Radio Button</option>
                <option value="email">Email Button</option>
              </select>
            </label>
            {field.type === "dropdown" && (
              <label className={classes.dropDownWrapper}>
                <div className={classes.label}>Options:</div>
                <input
                  type="text"
                  value={field.options || ""}
                  onChange={(e) => onChange(index, "options", e.target.value)}
                  placeholder="Option1,Option2,Option3"
                />
              </label>
            )}
            <div className={classes.editRemoveButton}>
              <Button onClick={() => onRemove(index)} className={classes.edit}>
                Remove
              </Button>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default FormField;
