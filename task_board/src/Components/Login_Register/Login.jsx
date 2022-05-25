import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, submitCount, dirtyFields },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });
  const [loginErrState, setLoginErrState] = useState(0);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    alert(JSON.stringify(data));
    let result;
    try {
      // result = await userApi.userLogin({
      //   email: data.email,
      //   password: data.password,
      // });
      // console.log(result);
      // dispatch(UserLogin(result.data));
      navigate("/home");
    } catch (err) {
      switch (err.response.status) {
        case 401:
          setLoginErrState(401);
          setTimeout(() => {
            setLoginErrState(false);
          }, 3000);
          break;
        default:
          setLoginErrState(500);
      }
    }
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
                <h2>Login</h2>
              </div>
            </div>
            {/* <h3>Login</h3> */}
            <div className="mb-3">
              {/* <label htmlFor="email">Email address</label>
              <input
                id="email"
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
              /> */}
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
                {...register("password", {
                  required: true,
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
                })}
              />
              {errors.password && required("Password")}
            </div>
            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input m-2"
                  id="remember"
                  {...register("rememberMe")}
                />

                <label className="custom-control-label" htmlFor="remember">
                  Remember me
                </label>
              </div>
            </div>
            {loginErrState === 401 ? (
              <div className="d-grid alert alert-danger text-danger">
                wrong username, email or password
              </div>
            ) : loginErrState === 500 ? (
              <div className="d-grid alert alert-danger text-danger">
                Server Error
              </div>
            ) : null}
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p className="text-right">
              <a className="text-secondary" href="#v">
                Forgot password?
              </a>
            </p>
          </form>
          <div className="text-center">
            <p>__________ OR __________ </p>
            <div className="d-grid text-secondary">
              Don't have an Account? &nbsp;{" "}
              <Link className="link-secondary d-inline" to="/register">
                Register Now!
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Login;
