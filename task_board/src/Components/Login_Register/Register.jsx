import { TextField } from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { userApi } from "../../Services/UserAPI";

function Register() {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, submitCount, dirtyFields },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const navigate = useNavigate();
  let addUser = async (user) => {
    let response = await userApi.register(user);
    console.log(response.data);
    navigate("/login");
  };
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    addUser(data);
    reset();
  };
  const required = (input) => {
    return (
      <>
        <div className="alert alert-danger text-danger mt-2">
          {input} is required
        </div>
      </>
    );
  };
  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{
          backgroundColor: "lightBlue",
        }}
      >
        <Card className="w-50 p-5 m-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="container">
              <div className="section-title" data-aos="fade-up">
                <h2>Register</h2>
              </div>
            </div>
            <div className="mb-3">
              <TextField
                id="username"
                label="Username"
                variant="filled"
                className="form-control"
                color="primary"
                focused
                {...register("username", {
                  required: true,
                  pattern:
                    /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
                })}
              />
              {errors.username?.type === "required" && required("Username")}
              {errors.username?.type === "pattern" && (
                <div className="alert alert-danger text-danger mt-2">
                  Username should validate the pattern
                  <ul>
                    <li>8-20 characters long</li>
                    <li>contains characters and numbers</li>
                    <li>no _ or . at the beginning</li>
                    <li>no __ or _. or ._ or .. inside</li>
                    <li>no _ or . at the end</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="mb-3">
              <TextField
                id="email"
                label="Email"
                variant="filled"
                className="form-control"
                color="primary"
                focused
                {...register("email", {
                  required: true,
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                })}
              />
              {errors.email?.type === "required" && required("Email")}
              {errors.email?.type === "pattern" && (
                <div className="alert alert-danger text-danger mt-2">
                  Email must match pattern: email@dom.com
                </div>
              )}
            </div>
            <div className="mb-3">
              <TextField
                id="password"
                label="Password"
                variant="filled"
                type={"password"}
                className="form-control"
                color="primary"
                focused
                {...register("password", {
                  required: true,
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                })}
              />
              {errors.password?.type === "required" && required("Password")}
              {errors.password?.type === "pattern" && (
                <div className="alert alert-danger text-danger mt-2">
                  <h6 className="text-danger">
                    Password should contain at least:
                  </h6>
                  <ul>
                    <li>Eight characters</li>
                    <li>One uppercase letter</li>
                    <li>One lowercase letter</li>
                    <li>One number</li>
                    <li>One special character</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="mb-3">
              <TextField
                id="confirmPassword"
                label="Confirm Password"
                variant="filled"
                type={"password"}
                className="form-control"
                color="primary"
                focused
                {...register("confirmPassword", {
                  required: true,
                  validate: (confirm) =>
                    confirm.localeCompare(getValues("password")) === 0,
                })}
              />
              {errors.confirmPassword?.type === "required" &&
                required("Confirm Password")}
              {/* ?.type === "validate" */}
              {errors.confirmPassword?.type === "validate" && (
                <div className="alert alert-danger text-danger mt-2">
                  Confirm Password must match Password
                </div>
              )}
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
}

export default Register;
