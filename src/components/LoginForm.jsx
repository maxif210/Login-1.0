import React from "react";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Alert from "./Alert";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    error: false,
    msg: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError({
      error: false,
      msg: "",
    });

    if ([email, password].includes("") && password.length < 5) {
      setError({
        error: true,
        msg: "Todos los campos son obligatorios. La contraseña debe ser mayor a 5",
      });
      return;
    }

    const url = `http://localhost:3000/accounts?email=${email}&password=${password}`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
       
        const json = await response.json();
        // const user = json[0];

        if (response.ok) {
          navigate("/layout");
        } else {
          setError({
            error: true,
            msg: "Mail o contraseña incorrecta",
          });
        }
      } catch (error) {
        console.log("error", error);
      }
      setInterval(() => {
        setError({});
      }, 5000);
    };

    fetchData();
  };
  // if(json.length > 0) {
  // } else {
  //   setError({
  //     error: true,
  //     msg: "Mail o contraseña incorrecta"
  //   })
  // }

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
                    <h3 className="mb-5">Iniciar Sesión</h3>

                    {error.error && <Alert error={error} />}

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
                      <NavLink to={"/reset-password"}>
                        ¿Olvidaste tu contraseña?
                      </NavLink>

                      <NavLink to={"/register"}>Regístrate acá</NavLink>
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

export default LoginForm;
