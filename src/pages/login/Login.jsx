import React from "react";
import "./login.scss";
import logo from "../../assets/logo.png";
import {
  FormRenderer,
  componentTypes,
} from "@data-driven-forms/react-form-renderer";
import LoginSchema from "./loginSchema";
import TextField from "@data-driven-forms/mui-component-mapper/text-field";
import CHECKBOX from "@data-driven-forms/mui-component-mapper/checkbox";
import LoginFormTemplate from "./FormTemplate";
import LoginFormFieldMapper from "./FieldMapper";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const initialValues = {
    username: "",
    password: "",
  };
  const navigate = useNavigate();

  const FormcomponentMapper = {
    [componentTypes.TEXT_FIELD]: TextField,
    [componentTypes.CHECKBOX]: CHECKBOX,
    "login-form": LoginFormFieldMapper,
  };

  const handleSubmit = (values) => {
    navigate("/");
    console.log(values);
  };
  return (
    <>
      <div className="login-wrapper">
        <div className="login-box">
          <img src={logo} alt="logo" />
          <div className="form-rendered">
            <h2>Admin Login</h2>
            <FormRenderer
              schema={LoginSchema}
              initialValues={initialValues}
              FormTemplate={LoginFormTemplate}
              onSubmit={(values)=>handleSubmit(values)}
              componentMapper={FormcomponentMapper}
            />
          </div>
        </div>
      </div>
    </>
  );
}
