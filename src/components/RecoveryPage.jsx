import React, { useState } from 'react';
import styles from './RecoveryPage.module.scss'
import { Link } from 'react-router-dom';

const RecoveryPage = () => {

    const [phone, setPhone] = useState('');
    const [smsCode, setSmsCode] = useState('');

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);

    };
    const handleSmsCodeChange = (e) => {
        setSmsCode(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className={styles.wrapper}>
          <h2>Страница восстановления пароля</h2>
          <form onSubmit={handleSubmit}>
            <h3 className={styles.recover__step}>Шаг 1:</h3>
            <label >
              Телефон:
              <input type="text" value={phone} onChange={handlePhoneChange} />
            </label>
            <h3 className={styles.recover__step}>Шаг 2:</h3>
            <label>
              Код из СМС:
              <input type="text" value={smsCode} onChange={handleSmsCodeChange} />
            </label>
            <br />
            <button type="submit">Восстановить пароль</button>
          </form>
          <div>
            <Link to="#">Вспомнил пароль!</Link> 
            <Link to="./registration">Регистрация</Link>
          </div>
        </div>
      );
    };
export default RecoveryPage;