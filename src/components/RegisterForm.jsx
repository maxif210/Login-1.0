import React from "react";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Alert from "./Alert";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([email, password].includes("") || password.length < 5) {
      alert("Email or password wrong");
      
      // <Alert />
    }

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    };

    const saveAccount = async (email, password) => {
      await fetch("http://localhost:3000/accounts", requestOptions);
    };
    saveAccount();

    // localStorage.setItem("email", email);
    // localStorage.setItem("password", password);
    navigate("/layout");
  };

  return (
    <>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow-2-strong"
                style={{ borderRadius: 1 + "rem" }}
              >
                <form onSubmit={handleSubmit}>
                  <div className="card-body p-5 text-center">
                    <h3 className="mb-5">Regístrate</h3>

                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="typeEmailX-2"
                        className="form-control form-control-lg"
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="on"
                        pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                      />
                      <label className="form-label" htmlFor="typeEmailX-2">
                        Email
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="typePasswordX-2"
                        className="form-control form-control-lg"
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="on"
                      />
                      <label className="form-label" htmlFor="typePasswordX-2">
                        Password
                      </label>
                    </div>

                    <div className="d-flex justify-content-between mb-4">
                      
                      <NavLink to={"/reset-password"} >¿Olvidaste tu contraseña?</NavLink>

                      <NavLink to={"/"}>Iniciar Sesión</NavLink>
                    </div>

                    <button
                      className="btn btn-primary btn-lg btn-block"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterForm;
