import React from 'react';
import styles from './RegError.module.css';

const RegErrorPage = () => {
  // Функція для очищення локального хосту
  const handleClearLocalStorage = () => {
    // Очищення локального хосту
    localStorage.clear();
    // Перенаправлення на початкову сторінку або іншу відповідну сторінку
    window.location.href = '/';
  };

  return (
    <div>
      <h1 className={styles.error}>Error</h1>
      <button onClick={handleClearLocalStorage}>OK :( </button>
    </div>
  );
};

export default RegErrorPage;
