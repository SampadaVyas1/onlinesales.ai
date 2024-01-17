import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import FormBuilder from "./component/FormBuilder/FormBuilder";
import FormRender from "./component/FormRender/FormRender";

function App() {
  const [formData, setFormData] = useState([]);

  const handleFormSubmit = (data: any) => {
    console.log("Form data submitted:", data);
  };
  return (
    <div>
      <h1 className="mainTitle">Dynamic Form Generator</h1>
      <FormBuilder
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
}

export default App;
