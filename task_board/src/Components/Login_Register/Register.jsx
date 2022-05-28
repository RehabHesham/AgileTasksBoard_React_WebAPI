import { TextField } from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Register() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, submitCount, dirtyFields },
  } = useForm({
    defaultValues: {
      name: "",
      age: 0,
      username: "",
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();
  let addUser = async (user) => {
    // let response = await userApi.adduser(user);
    // console.log(response.data);
    navigate("/home");
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
            {/* <h3>Register New User</h3> */}
            <div className="mb-3">
              <TextField
                id="name"
                label="Name"
                variant="filled"
                focused
                {...register("name", {
                  required: true,
                  pattern: /^[a-zA-Z ]+$/,
                })}
                className="form-control"
                color="primary"
              />
              {/* color={
                  errors.name
                    ? "danger"
                    : submitCount > 0 && dirtyFields.name
                    ? "sucess"
                    : "primary"
                } */}
              {errors.name?.type === "required" && required("Name")}
              {errors.name?.type === "pattern" && (
                <div className="alert alert-danger text-danger mt-2">
                  Name should contains only letters
                </div>
              )}
            </div>
            <div className="mb-3">
              {/* <label htmlFor="age">Age</label>
              <input
                id="age"
                label="Filled success"
                variant="filled"
                color="success"
                focused
                {...register("age", {
                  required: true,
                })}
                className="form-control"
                placeholder="Enter age"
                type="number"
                style={{
                  borderColor: errors.age
                    ? "red"
                    : submitCount > 0 && dirtyFields.age
                    ? "green"
                    : "gray",
                }}
              /> */}
              <TextField
                id="age"
                label="Age"
                variant="filled"
                type={"number"}
                className="form-control"
                color="primary"
                focused
                {...register("age", {
                  required: true,
                })}
              />
              {errors.age?.type === "required" && required("Age")}
            </div>
            <div className="mb-3">
              {/* <label htmlFor="username">Username</label>
              <input
                id="username"
                label="Filled success"
                variant="filled"
                color="success"
                focused
                {...register("username", {
                  required: true,
                  pattern:
                    /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
                })}
                className="form-control"
                placeholder="Enter username"
                style={{
                  borderColor: errors.username
                    ? "red"
                    : submitCount > 0 && dirtyFields.username
                    ? "green"
                    : "gray",
                }}
              /> */}
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
              {/* <label htmlFor="email">Email address</label>
              <input
                id="email"
                label="Filled success"
                variant="filled"
                color="success"
                focused
                {...register("email", {
                  required: true,
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                })}
                className="form-control"
                placeholder="Enter email"
                style={{
                  borderColor: errors.email
                    ? "red"
                    : submitCount > 0 && dirtyFields.email
                    ? "green"
                    : "gray",
                }} 
              />*/}
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
              {/* <label htmlFor="password">Password</label>
              <input
                id="password"
                label="Filled success"
                variant="filled"
                color="success"
                focused
                {...register("password", {
                  required: true,
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                })}
                className="form-control"
                placeholder="Enter password"
                type="password"
                style={{
                  borderColor: errors.password
                    ? "red"
                    : submitCount > 0 && dirtyFields.password
                    ? "green"
                    : "gray",
                }}
              /> */}
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
