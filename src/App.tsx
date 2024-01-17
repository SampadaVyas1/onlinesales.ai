import { useState } from "react";
import "./App.css";
import FormBuilder from "./component/FormBuilder/FormBuilder";
import FormRender from "./component/FormRender/FormRender";

function App() {
  const [formData, setFormData] = useState([]);
  const [formFields, setFormFields] = useState([]);

  const handleFormSubmit = (data: any) => {
    setFormFields(data);
  };
  return (
    <div className="formWrapper">
      <div className="formBuilder">
        <h1 className="mainTitle">Dynamic Form Generator</h1>
        <FormBuilder
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleFormSubmit}
        />
      </div>
      <div className="formRender">
        <FormRender formField={formFields} />
      </div>
    </div>
  );
}

export default App;
