import { useFormik } from "formik";
import { useNavigate, Link} from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import { useApp } from "../../contexts/AppProvider";
import HolyDrinks from "../../assets/HolyDrinks.png";

import "./Login.css";

const Login = () => {
  const [error, setError] = useState(null);
  const { setUser } = useApp();
  const navigator = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validateOnChange: false,
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      if (!values.password) {
        errors.password = "Required";
      }

      return errors;
    },
    onSubmit: (values) => {
      axios
        .post(`${process.env.REACT_APP_API_URL}/users/login`, values)
        .then(({ data: { credential, id, isAdmin } }) => {
          setUser({
            credential,
            id,
            isAdmin,
          });
          return isAdmin === 1 ? navigator("/admin") : navigator("/categories");
        })
        .catch(
          ({
            response: {
              data: { message },
            },
          }) => {
            setError(message);
            console.log(error);
          }
        );
    },
  });

  return (
    <>
      <main className="login-logo">
        <img src={HolyDrinks} alt="holydrinks" />
      </main>
      <div className="login-container">
        <h1 className="login-title">Connexion</h1>
        <div className="form-container">
          <p className="error">{error}</p>
          <form onSubmit={formik.handleSubmit} className="login">
            <label htmlFor="email">
              {formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className="login-email"
              />
            </label>
            <label htmlFor="password">
              {formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
              ) : null}
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                onChange={formik.handleChange}
                value={formik.values.password}
                className="login-password"
              />
            </label>

            <div className="login-button">
              <button type="submit" className="login-submit">
                VALIDER
              </button>
            </div>
          </form>
        </div>
        <Link to="/">
          <button type="submit" className="login-submit">
            Retour sur Home
          </button>
        </Link>
      </div>
    </>
  );
};

export default Login;
