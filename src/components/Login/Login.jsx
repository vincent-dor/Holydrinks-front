import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

import { useApp } from '../../contexts/AppProvider';

import './Login.css';

const Login = () => {
  const [error, setError] = useState(null);
  const { setUser } = useApp();
  const navigator = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validateOnChange: false,
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      if (!values.password) {
        errors.password = 'Required';
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
          return isAdmin === 1
            ? navigator('/admin')
            : navigator('/categories');
        })
        .catch(({ response: { data: { message } } }) => {
          setError(message);
          console.log(error);
        });
    },
  });

  return (
    <>
      <main classNAme="login-logo">
      <h1 className="login-title">CONNNEXION</h1>
      <div className="Login">

        <p className="error">{error}</p>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">
            {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
            <input
              id="email"
              name="email"
              type="email"
              placeholder="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </label>
          <label htmlFor="password">
            {formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}
            <input
              id="password"
              name="password"
              type="password"
              placeholder="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </label>


          <div className="login-button">
            <button type="submit" className="button-sub">VALIDER</button>
          </div>
        </form>
      </div>
     </main> 
    </>
  );
};

export default Login;