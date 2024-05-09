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
      <h1 className={styles.error}>Сталася помилка</h1>
      <h2 className={styles.title}>Крок 1</h2>
      <p className={styles.text}>
        Якщо помилка сталася на кроку #1, перевірте правильність email, скоріше за все помилка тут.
        Можливо ви вже зареєстровані, спробуйте перейти на сторінку Login
      </p>
      <h2 className={styles.title}>Крок 2</h2>
      <p className={styles.text}>
        Якщо помилка сталася на кроку #2, перевірте чи вірно ви обрали платформу, та переконайтесь
        що у вас є 1000 підписників на ній
      </p>
      <button onClick={handleClearLocalStorage}>Повернутись на головну сторінку </button>
    </div>
  );
};

export default RegErrorPage;
