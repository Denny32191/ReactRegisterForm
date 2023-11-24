import { createSlice, configureStore } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './RegistrationPage.module.scss';

const registrationSlice = createSlice({
  name: 'registration',
  initialState: {
    name: '',
    phone: '',
    password: '',
  },
  reducers: {
    saveRegistrationInfo: (state, action) => {
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.password = action.payload.password;
    },
  },
});

export const { saveRegistrationInfo } = registrationSlice.actions;

const store = configureStore({
  reducer: {
    registration: registrationSlice.reducer,
  },
});

const RegistrationPage = ({ name }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    password: '',
    avatar: null,
  });
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      avatar: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Валидация данных
    const validationErrors = [];
    if (formData.name.trim() === '') {
      validationErrors.push('Введите имя');
    }
    if (formData.phone.trim() === '') {
      validationErrors.push('Введите телефон');
    }
    if (formData.password.trim() === '') {
      validationErrors.push('Введите пароль');
    }

    // Если есть ошибки валидации
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
    } else {
      // Очистка ошибок
      setErrors([]);

      // Сохранение информации о регистрации в Redux
      store.dispatch(
        saveRegistrationInfo(formData.name, formData.phone, formData.password)
      );

      // Отправка данных на сервер для регистрации

      // Переход на страницу "Личный кабинет" после успешной регистрации
      navigate('/account'); // Обновите путь в соответствии с вашими требованиями
    }
  };

  return (
    <div className={style.wrapper}>
      <h2>Страница регистрации</h2>
      <h3>Зарегистрированное имя: {name}</h3> {/* Вывод зарегистрированного имени */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Имя:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Телефон:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="avatar">Аватар:</label>
          <input
            className={style.input__load}
            type="file"
            id="avatar"
            name="avatar"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit">Зарегистрироваться</button>
      </form>
      {errors.length > 0 && (
        <div>
          <p>При регистрации возникли ошибки:</p>
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      <p>
        Уже зарегистрированы? <Link to="/login">Авторизация</Link>
      </p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: state.registration.name,
});

export default RegistrationPage;