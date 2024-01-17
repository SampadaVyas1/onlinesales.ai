import React, { useState } from "react";
import FormField from "../FormField/FormField";
import Button from "../Button/Button";
import classes from "./FormBuilder.module.scss";

const FormBuilder = ({ formData, setFormData, onSubmit }: any) => {
  const [formFields, setFormFields] = useState<any>([]);
  const [jsonConfig, setJson] = useState<any>();
  console.log(formFields);

  const addFormField = (fieldType: any) => {
    setFormFields([...formFields, { type: fieldType, label: "" }]);
  };

  const removeFormField = (index: number) => {
    const updatedFormFields = [...formFields];
    updatedFormFields.splice(index, 1);
    setFormFields(updatedFormFields);
  };

  const handleFieldChange = (index: number, key: any, value: any) => {
    const updatedFormFields = [...formFields];
    updatedFormFields[index][key] = value;
    setFormFields(updatedFormFields);
  };
  const saveFormConfiguration = () => {
    const jsonConfig = JSON.stringify(formFields);
    setJson(jsonConfig);
    console.log("Saved form configuration:", jsonConfig);
  };

  const loadFormConfiguration = (jsonConfig: any) => {
    const parsedConfig = JSON.parse(jsonConfig);
    setFormFields(parsedConfig);
  };

  const handleSubmit = () => {
    const formData = formFields.map(({ type, label, options }: any) => ({
      type,
      label,
      options,
    }));

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
      {formFields.map((field: any, index: any) => (
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
          Save Configuration
        </Button>
        <Button
          onClick={() => loadFormConfiguration(jsonConfig)}
          className={classes.subButtons}
        >
          Load Configuration
        </Button>
      </div>
    </div>
  );
};

export default FormBuilder;
