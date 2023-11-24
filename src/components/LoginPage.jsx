import React, { useState } from "react";
import styles from './LoginPage.module.scss';
import { Link } from 'react-router-dom';


const ForgotPassword = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Проверка введенных данных
    if (phone === "+7 999 999-99-99" && password === "1234567890") {
      // Успешная авторизация
      setError("");
      // Переход на страницу "Личный кабинет"
      window.location.href = "/personal-account";
    } else {
      // Неудачная авторизация
      setError("Неверный телефон или пароль");
    }
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.page__name}>Страница авторизации</h1>
      <form className={styles.form__register}>
        <input className={styles.input__register}
          type="text"
          placeholder="Телефон"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input className={styles.input__register}
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>
          <input className={styles.input__checkbox}
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          Запомнить меня
        </label>
      </form>
      <div className={styles.errors_password}>{error}</div>
      <button onClick={handleLogin} className={styles.button__connect}>Войти</button>
      <div className={styles.recover}>
      <Link to="./recovery">Забыли пароль?</Link> 
        <Link to="./registration">Регистрация</Link>
      </div>
    </div>
  );
}

export default ForgotPassword;