import React from 'react';
import Image from 'next/image';
import styles from './RegistrationExtended.module.css';
const registrationExtended = () => {
  return (
    <div className={styles.container}>
      <h1>Tell about yuorself!</h1>
      <form className={styles.form}>
        <label htmlFor="name">First name</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="name">Last name</label>
        <input type="text" id="lastname" name="lastname" />
        <label htmlFor="nickname">ickname</label>
        <input type="text" id="nickname" name="nickname" />
        <label htmlFor="name">Citi</label>
        <input type="text" id="citi" name="citi" />
        <label htmlFor="name">Social link</label>
        <input type="text" id="sociallink" name="sociallink" />
        <label htmlFor="name">Blog category</label>
        <input type="text" id="category" name="category" />
      </form>
    </div>
  );
};
export default registrationExtended;
