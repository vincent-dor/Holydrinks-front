import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useApp } from '../../contexts/AppProvider';
import Header from '../Header/Header';
import FooterAdmin from '../FooterAdmin/FooterAdmin';

import './AdminCreate.css';

const AdminAddProduct = () => {
  const { user } = useApp();
  const { credential } = user;

  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [, setCocktails] = useState([]);
  const [users, setUsers] = useState([]);

  const navigator = useNavigate();

  const getCategories = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/categories`,
      {
        headers: { Authorization: `Bearer ${credential}` },
      }
    );
    setCategories(data);
  };

  const getCocktails = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/cocktails`
    );
    setCocktails(data);
  };

  const getAdmin = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/users`, {
      headers: { Authorization: `Bearer ${credential}` },
    });
    setUsers(data);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    getCategories();
    getCocktails();
    getAdmin();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: '',
      image: '',
      description: '',
      categoryId: '',
      userId: '',
    },
    validateOnChange: false,
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = 'Required';
      }

      if (!values.description) {
        errors.description = 'Required';
      }

      if (!values.image) {
        errors.image = 'Required';
      }

      if (!values.categoryId) {
        errors.categoryId = 'Required';
      }

      if (!values.userId) {
        errors.userId = 'Required';
      }
      return errors;
    },
    onSubmit: (values) => {
      axios
        .post(`${process.env.REACT_APP_API_URL}/cocktails`, values, {
          headers: { Authorization: `Bearer ${credential}` },
        })
        .then(() => {
          navigator('/admin/cocktails');
        })
        .catch(
          ({
            response: {
              data: { message },
            },
          }) => {
            setError(message);
          }
        );
    },
  });

  return (
    <section className="admin-add-cocktail-container">
      <Header />
      <p className="error">{error}</p>
      <form onSubmit={formik.handleSubmit} className="admin-add-cocktail-form">
        <label htmlFor="name">
          Nom du cocktail :
          {formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </label>
        <label htmlFor="user">
          Utilisateur :
          {formik.errors.userId ? (
            <div className="error">{formik.errors.userId}</div>
          ) : null}
          <select
            id="userId"
            name="userId"
            onChange={formik.handleChange}
            value={formik.values.userId}
          >
            <option>Choix</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.firstname}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="category">
          Catégories :
          {formik.errors.categoryId ? (
            <div className="error">{formik.errors.categoryId}</div>
          ) : null}
          <select
            id="categoryId"
            name="categoryId"
            onChange={formik.handleChange}
            value={formik.values.categoryId}
          >
            <option>Catégories</option>
            {categories.map((categorie) => (
              <option key={categorie.id} value={categorie.id}>
                {categorie.name}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="image">
          Image :
          {formik.errors.image ? (
            <div className="error">{formik.errors.image}</div>
          ) : null}
          <input
            id="image"
            name="image"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.image}
          />
        </label>
        <label htmlFor="description">
          Description :
          {formik.errors.description ? (
            <div className="error">{formik.errors.description}</div>
          ) : null}
          <textarea
            id="description"
            name="description"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
        </label>
        <div className="admin-product-button-container">
          <button type="submit">Submit</button>
        </div>
      </form>
      <FooterAdmin />
    </section>
  );
};

export default AdminAddProduct;
