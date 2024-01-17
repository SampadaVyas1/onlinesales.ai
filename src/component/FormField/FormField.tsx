import React, { useState } from "react";
import Input from "../Input/Input";
import classes from "./FormField.module.scss";
import Button from "../Button/Button";
// @ts-ignore
import Modal from "react-modal";

const FormField = ({ index, field, onChange, onRemove }: any) => {
  const [showedit, setEdit] = useState(false);
  const [editOnclick, setEditOnclick] = useState<any[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [labelField, setLabelField] = useState("Field Label");

  return (
    <div>
      <div>
        <label className={classes.textInputWrapper}>
          <div>{labelField}</div>
          <Input
            type="text"
            value={field.label}
            onChange={(e: any) => onChange(index, "label", e.target.value)}
          />
          <label className={classes.fields}>
            <div
              className={`${classes.labelForlabelField} ${classes.fieldTypelabel}`}
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
            </select>
          </label>
          {field.type === "dropdown" && (
            <label className={classes.textInputWrapper}>
              Options:
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
        </label>
      </div>
    </div>
  );
};

export default FormField;
