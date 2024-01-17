import FormFieldWrapper from "../FormFieldWrapper/FormFieldWrapper";
import classes from "./FormRender.module.scss";
import { IFormField, IFormRender } from "./IFormRender";

const FormRender = (props: IFormRender) => {
  const { formField } = props;
  return (
    <div>
      <h1 className="mainTitle">Render form</h1>
      <div className={classes.formFields}>
        {formField?.map((item: IFormField) => {
          return <FormFieldWrapper fieldData={item} />;
        })}
      </div>
    </div>
  );
};

export default FormRender;
