import TextArea from "../TextArea/TextArea";
import Dropdown from "../dropdown";
import Input from "../Input/Input";
import classes from "./FormFieldWrapper.module.scss";
import { IFormFieldWrapper } from "./IFormFieldWrapper";

const FormFieldWrapper = (props: IFormFieldWrapper) => {
  const { fieldData } = props;

  const handleOnChange = (event: any) => {
    console.log(event.target.value);
  };

  const renderFormField = (field: any) => {
    console.log(field);
    const { type } = field;
    switch (type) {
      case "textarea":
        return (
          <TextArea
            placeholder={field?.placeholder}
            required={field?.required}
            label={field?.label}
            maxLength={field?.maxLength}
          />
        );
      case "dropdown":
        return (
          <Dropdown
            placeholder={field?.placeholder}
            label={field?.label}
            options={field?.options}
          />
        );

      case "email":
        return <Input label={field?.label} type="email" />;
      case "radio":
        return (
          <Input
            label={field?.label}
            type="radio"
            customclass={classes.radio}
          />
        );
      default:
        return (
          <Input
            label={field?.label}
            onChange={handleOnChange}
            required={field?.required}
            type={field?.type}
            placeholder={field?.placeholder}
            minLength={field?.minLength}
            maxLength={field?.maxLength}
          />
        );
    }
  };
  return <div>{renderFormField(fieldData)}</div>;
};

export default FormFieldWrapper;
