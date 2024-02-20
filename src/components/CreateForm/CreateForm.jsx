import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { formsService } from '@/api/forms/forms.service';

import { emailPattern, phonePattern, websitePattern } from '@/utils/common';

import styles from './CreateForm.module.css';
import { button } from '../Footer/footer.module.css';

import { cinzel, roboto } from '@/utils/fonts';
import { Checkbox, ConfigProvider } from 'antd';

import sent from '../../assets/images/svg/sent.svg';

export const CreateForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    message: '',
    website: '',
    subscribe: false,
    acceptTerms: false,
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = async e => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.email) {
      setErrorMessage('Please enter the email!');
      return;
    }
    if (!formData.email.match(emailPattern)) {
      setErrorMessage('Please enter a valid email!');
      return;
    }

    if (!formData.phone) {
      setErrorMessage('Please enter the phone number!');
      return;
    }
    if (phonePattern.test(formData.phone) === false) {
      setErrorMessage('Please enter a valid phone number!');
      return;
    }

    if (!formData.website) {
      setErrorMessage('Please enter the website address!');
    }
    if (websitePattern.test(formData.website) === false) {
      setErrorMessage('Please enter avalid website address!');
    }

    if (!formData.message) {
      setErrorMessage('Do not forget to add your message!');
      return;
    }

    // if (formData.subscribe === true) {
    //   console.log('Checked');
    // }

    if (!formData.acceptTerms) {
      setErrorMessage('You have to accept our terms & conditions');
      return;
    }

    const dataToSend = { ...formData };
    delete dataToSend.acceptTerms;

    try {
      await formsService.sendFormData(dataToSend);
      setErrorMessage('Your message is sent! We will respond as soon as possible.');
    } catch (error) {
      setErrorMessage('Something went wrong, please try again later!');
    }
    setFormData({
      email: '',
      phone: '',
      website: '',
      message: '',
      subscribe: false,
      acceptTerms: false,
    });
  };

  return (
    <div className={styles.form_wrapper}>
      <h2 className={styles.form_title}>
        Do you have any questions? Don&#39;t hesitate to contact us!
      </h2>
      <form className={`${styles.form}  ${roboto.variable}`}>
        <div>
          <label htmlFor="name" className={styles.form_label}>
            Email
          </label>
          <div className={styles.gradient}>
            <input
              type="email"
              name="email"
              className={styles.form_input}
              value={formData.email}
              onChange={e => {
                setFormData({ ...formData, email: e.target.value });
              }}
            />
          </div>
        </div>
        <div>
          <label htmlFor="name" className={styles.form_label}>
            Phone
          </label>
          <div className={styles.gradient}>
            <input
              type="tel"
              name="tel"
              className={styles.form_input}
              value={formData.phone}
              onChange={e => {
                setFormData({ ...formData, phone: e.target.value });
              }}
            />
          </div>
        </div>
        <div>
          <label htmlFor="name" className={styles.form_label}>
            Website
          </label>
          <div className={styles.gradient}>
            <input
              type="text"
              name="website"
              className={styles.form_input}
              value={formData.website}
              onChange={e => {
                setFormData({ ...formData, website: e.target.value });
              }}
            />
          </div>
        </div>
        <div>
          <label htmlFor="name" className={styles.form_label}>
            Message
          </label>
          <div className={styles.gradient}>
            <input
              type="text"
              name="message"
              className={styles.form_input}
              value={formData.message}
              onChange={e => {
                setFormData({ ...formData, message: e.target.value });
              }}
            />
          </div>
        </div>
        <div className={styles.checkbox_wrapper}>
          <ConfigProvider
            theme={{
              components: {
                Checkbox: {
                  colorPrimary: 'green',
                  colorBgContainer: 'rgba(4, 66, 62, 0.3)',
                  colorBorder: '#FFFFFF',
                  colorText: '#FFFFFF',
                  paddingContentHorizontalSM: 8,
                  fontSize: 18,
                  fontFamily: 'roboto.variable',
                },
              },
            }}
          >
            <Checkbox
              checked={formData.subscribe}
              onChange={e => {
                setFormData({ ...formData, subscribe: e.target.checked });
              }}
            >
              Subscribe
            </Checkbox>{' '}
            <Checkbox
              checked={formData.acceptTerms}
              onChange={e => {
                setFormData({ ...formData, acceptTerms: e.target.checked });
                console.log(`checked = ${e.target.checked}`);
              }}
            >
              I accept <Link href={''}>the offer agreement</Link> and give{' '}
              <Link href={''}>consent</Link>
              {''} to the processing of my personal data
            </Checkbox>
          </ConfigProvider>
        </div>
        <button className={`${button} ${styles.button}`} onClick={handleFormSubmit}>
          <Image src={sent} alt="Sent icon" className={styles.button_icon}></Image>
          Submit
        </button>
      </form>
      {errorMessage && (
        <p className={`${styles.error} ${roboto.variable} ${styles.link}`}>{errorMessage}</p>
      )}
    </div>
  );
};
