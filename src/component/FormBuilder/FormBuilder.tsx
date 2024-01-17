import { useState } from "react";
import FormField from "../FormField/FormField";
import Button from "../Button/Button";
import classes from "./FormBuilder.module.scss";
import { IFormBuilder } from "./IFormBuilder";

const FormBuilder = ({ onSubmit }: IFormBuilder) => {
  const [formFields, setFormFields] = useState<any[]>([]);
  const [jsonConfig, setJson] = useState<string>();

  const addFormField = (fieldType: any) => {
    setFormFields([
      ...formFields,
      {
        type: fieldType,
        label: "",
        placeholder: "",
        required: false,
        minLength: 0,
        maxLength: 0,
      },
    ]);
  };

  const removeFormField = (index: number) => {
    const updatedFormFields = [...formFields];
    updatedFormFields.splice(index, 1);
    setFormFields(updatedFormFields);
  };

  const handleFieldChange = (index: number, key: number, value: any) => {
    const updatedFormFields = [...formFields];

    updatedFormFields[index][key] = value;
    setFormFields(updatedFormFields);
  };
  const saveFormConfiguration = () => {
    const jsonConfig = JSON.stringify(formFields);
    setJson(jsonConfig);
  };

  const handleSubmit = () => {
    const formData = formFields.map(
      ({
        type,
        label,
        options,
        placeholder,
        required,
        minLength,
        maxLength,
      }: any) => ({
        type,
        label,
        options: options?.split(","),
        placeholder,
        required,
        minLength,
        maxLength,
      })
    );

    onSubmit(formData);
  };

  return (
    <div className={classes.containerWrapper}>
      <div className={classes.buttonsContainer}>
        <Button onClick={() => addFormField("text")}>Add Text Input</Button>
        <Button onClick={() => addFormField("textarea")}>Add Textarea</Button>
        <Button onClick={() => addFormField("dropdown")}>Add Dropdown</Button>
        <Button onClick={() => addFormField("checkbox")}>Add Checkbox</Button>
        <Button onClick={() => addFormField("radio")}>Add Radio Button</Button>
      </div>
      {formFields.map((field: any, index: number) => (
        <FormField
          key={index}
          index={index}
          field={field}
          onChange={handleFieldChange}
          onRemove={removeFormField}
        />
      ))}
      <div className={classes.buttons}>
        <Button onClick={handleSubmit} className={classes.subButtons}>
          Submit Form
        </Button>
        <Button onClick={saveFormConfiguration} className={classes.subButtons}>
          Get Json
        </Button>
      </div>
      {jsonConfig && (
        <div className={classes.jsonData}>
          JsonData
          <div>{jsonConfig}</div>
        </div>
      )}
    </div>
  );
};

export default FormBuilder;
