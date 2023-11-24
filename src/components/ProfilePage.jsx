import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProfilePage.module.scss'

const ProfilePage = ({ name, onLogout }) => {
  return (
    <div className={styles.wrapper}>
      <h2>Здравствуйте, {name}!</h2>
      <button onClick={onLogout}>Выход</button>
      <Link to="/">На главную</Link>
    </div>
  );
};

export default ProfilePage;