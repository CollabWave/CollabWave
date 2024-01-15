'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './Registration.module.css';
import blogger from '../../../image/blogger.jpeg';
import brand from '../../../image/brand.jpeg';
import RegistrationBlog from '../registrationBlog/RegistrationBlog';
import RegistrationBrand from '../registrationBrand/RegistrationBrand';
import RegistrationForm from '../registrationForm/RegistrationForm';
import RegistrationExtended from '../registrationExtended/RegistrationExtended';
import RegistrationBrandNextStep from '../RegistrationBrandNextStep/RegistrationBrandNextStep';
import RegistrationBrandInfo from '../RegistrationBrandInfo/RegistrationBrandInfo';

import { useDispatch, useSelector } from 'react-redux';
// import { setClientType, setRegistrationStep } from '../../../../../redux/auth/authSlice';
import { setClientType, setRegistrationStep } from '@/redux/auth/authSlice';
import { authService } from '@/api/auth/register.service';

const Registration = () => {
  const dispatch = useDispatch();
  const clientType = useSelector(state => state.auth.clientType);
  const registrationStep = useSelector(state => state.auth.registrationStep);
  const [verify, setVerify] = useState(false);
  const [blogDataFetch, setBlogDataFetch] = useState(null);
  const [dataStatus, setDataStatus] = useState('');
  const [userId, setUserId] = useState('');

  const router = useRouter();

  const handleNextClick = () => {
    if (registrationStep === 0) {
      dispatch(setRegistrationStep(1));
    }
    if (registrationStep === 1) {
      dispatch(setRegistrationStep(2));
    }
  };

  // const handleRegistrationBlogData = blogData => {
  //   setBlogDataFetch(prevBlogData => ({
  //     ...prevBlogData,
  //     ...blogData,
  //   }));
  // };
  // const handleVerificationBlogData = async blogData => {
  //   if (registrationStep === 3) {
  //     try {
  //       const verificationResponse = await authService.verifyUser(userId, userDataSocMedia);
  //       console.log('Verification successful', verificationResponse.data);
  //     } catch (error) {
  //       setDataStatus('Error');
  //       console.error('Verification failed', error);
  //     }
  //   }
  //   console.log('Received data in parent component:', blogData);
  // };

  const handleRegistrationBlogData = async blogData => {
    setBlogDataFetch(prevBlogData => ({
      ...prevBlogData,
      ...blogData,
    }));

    const combinedData = {
      ...blogData,
      ...blogDataFetch,
    };

    if (registrationStep === 2) {
      try {
        const response = await authService.registerUser(combinedData);

        setDataStatus('success');
        setUserId(response.data.data._id);
      } catch (error) {
        setDataStatus('Error');
        console.error('Registration failed', error);
      }
    }
    if (registrationStep === 3) {
      try {
        const verificationResponse = await authService.verifyUser(userId, { info: blogData });
        console.log('Verification successful', verificationResponse.data);
        setVerify(true);
        if (verificationResponse.data.data.verify) {
          try {
            // Отримайте значення email та password з combinedData
            const { email, password } = combinedData;
            const loginResponse = await authService.loginUser({ email, password });
            console.log('Login successful', loginResponse.data);
            router.push('/dashboard'); //переход на дашборд
            // Додайте інші дії, які вам потрібні після успішного входу
          } catch (error) {
            console.error('Login failed', error);
            // Додайте обробку помилок аутентифікації
          }
        }
      } catch (error) {
        setDataStatus('Error');
        console.error('Verification failed', error);
      }
    }
    // if (registrationStep === 4) {
    //   try {
    //     // Отримайте значення email та password з combinedData
    //     const { email, password } = combinedData;
    //     const loginResponse = await authService.loginUser({ email, password });
    //     console.log('Login successful', loginResponse.data);
    //     router.push('/dashboard'); //переход на дашборд
    //     // Додайте інші дії, які вам потрібні після успішного входу
    //   } catch (error) {
    //     console.error('Login failed', error);
    //     // Додайте обробку помилок аутентифікації
    //   }
    // }
  };

  const handleClientSelection = selectedClient => {
    dispatch(setClientType(selectedClient));
  };

  return (
    <>
      {registrationStep === 0 && clientType === '' && (
        <div className={styles.container}>
          <ul className={styles.ul}>
            <li
              className={styles.li}
              data-tooltip="Блогер"
              onClick={() => {
                handleClientSelection('blog');
                handleNextClick();
              }}
            >
              <Image src={blogger} alt="blogger" width="400" />
            </li>
            <li
              className={styles.li}
              data-tooltip="Бренд"
              onClick={() => {
                handleClientSelection('brand'); // Змінено з 'blog' на 'brand'
                handleNextClick();
              }}
            >
              <Image src={brand} alt="brand" width="400" />
            </li>
          </ul>
        </div>
      )}
      {registrationStep === 1 && clientType === 'blog' && (
        <RegistrationForm
          onNextClick={handleRegistrationBlogData}
          // onInputChange={handleFormInputChange}
        />
      )}
      {registrationStep === 2 && clientType === 'blog' && (
        <RegistrationExtended onNextClick={handleRegistrationBlogData} />
      )}
      {registrationStep === 3 && clientType === 'blog' && (
        // dataStatus === 'success' &&
        <RegistrationBlog onNextClick={handleRegistrationBlogData} />
      )}
      {registrationStep === 1 && clientType === 'brand' && (
        <RegistrationBrand onNextClick={handleRegistrationBlogData} />
      )}
      {registrationStep === 2 && clientType === 'brand' && (
        <RegistrationBrandNextStep onNextClick={handleRegistrationBlogData} />
      )}
      {registrationStep === 3 && clientType === 'brand' && (
        // dataStatus === 'success' &&
        <RegistrationBrandInfo onNextClick={handleRegistrationBlogData} />
      )}
    </>
  );
};

export default Registration;
