import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useApp } from '../../contexts/AppProvider';
import Header from '../Header/Header';
import FooterAdmin from '../FooterAdmin/FooterAdmin';

import './AdminEdit.css';

const AdminEdit = () => {
  const { user } = useApp();
  const { credential } = user;
  const { id: cocktailId } = useParams();

  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [description, setDescription] = useState();
  const [categoryId, setCategoryId] = useState();
  const [userId, setUserId] = useState();

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
      `${process.env.REACT_APP_API_URL}/cocktails/${cocktailId}`
    );
    setName(data.name);
    setImage(data.image);
    setDescription(data.description);
    setCategoryId(data.categoryId);
    setUserId(data.userId);
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

  const submitHandler = (e) => {
    e.preventDefault();
    const values = {
      name,
      description,
      image,
      categoryId,
      userId,
    };
    axios
      .put(`${process.env.REACT_APP_API_URL}/cocktails/${cocktailId}`, values, {
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
  };

  return (
    <section className="admin-edit-cocktail-container">
      <Header />
      <p className="error">{error}</p>
      <form onSubmit={submitHandler} className="admin-edit-cocktail-form">
        <label htmlFor="name" className="label-edit">
          Nom du cocktail :
          <input
            id="name"
            name="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label htmlFor="user" className="label-edit">
          Utilisateur :
          <select
            id="userId"
            name="userId"
            onChange={(e) => setUserId(e.target.value)}
            value={userId}
          >
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.firstname}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="category" className="label-edit">
          Catégories :
          <select
            id="categoryId"
            name="categoryId"
            onChange={(e) => setCategoryId(e.target.value)}
            value={categoryId}
          >
            <option>Catégories</option>
            {categories.map((categorie) => (
              <option key={categorie.id} value={categorie.id}>
                {categorie.name}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="image" className="label-edit">
          Image:
          <textarea
            id="image"
            name="image"
            type="text"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <label htmlFor="description" className="label-edit">
          Description :
          <textarea
            id="description"
            name="description"
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </label>
        <div className="admin-edit-button-container">
          <button type="submit" className="edit-button">
            Submit
          </button>
          </div>
      </form>
      <FooterAdmin />
    </section>
  );
};

export default AdminEdit;
