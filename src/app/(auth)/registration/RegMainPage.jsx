'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
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
import './globals.css';
// import { setClientType, setRegistrationStep } from '../../../../../redux/auth/authSlice';
import { setClientType, setRegistrationStep } from '@/redux/auth/authSlice';
import { authService } from '@/api/auth/register.service';

const Registration = () => {
  const dispatch = useDispatch();
  const clientType = useSelector(state => state.auth.clientType);
  const registrationStep = useSelector(state => state.auth.registrationStep);
  // const [formInputData, setFormInputData] = useState({});
  const [blogDataFetch, setBlogDataFetch] = useState(null);
  const [verifyBlog, setVerifyBlog] = useState(null);
  const [dataStatus, setDataStatus] = useState('');
  const [userId, setUserId] = useState('');

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
  const handleVerificationBlogData = async blogData => {
    if (registrationStep === 3) {
      try {
        const verificationResponse = await authService.verifyUser(userId, userDataSocMedia);
        console.log('Verification successful', verificationResponse.data);
      } catch (error) {
        setDataStatus('Error');
        console.error('Verification failed', error);
      }
    }
    console.log('Received data in parent component:', blogData);
  };

  const handleRegistrationBlogData = async blogData => {
    setBlogDataFetch(prevBlogData => ({
      ...prevBlogData,
      ...blogData,
    }));

    const combinedData = {
      ...blogData,
      ...blogDataFetch,
    };

    console.log('blogData', blogData);
    console.log('blogDataFetch', blogDataFetch);

    if (registrationStep === 2) {
      try {
        const response = await authService.registerUser(combinedData);
        console.log('Registration successful', response.data);
        setDataStatus('success');
        setUserId(response.data.data._id);
        console.log(response.data.data._id);
      } catch (error) {
        setDataStatus('Error');
        console.error('Registration failed', error);
      }
    }
    if (registrationStep === 3) {
      console.log('step3');
      try {
        const verificationResponse = await authService.verifyUser(userId, blogData);
        console.log('Verification successful', verificationResponse.data);
      } catch (error) {
        setDataStatus('Error');
        console.error('Verification failed', error);
      }
    }
  };
  console.log(userId);
  const handleClientSelection = selectedClient => {
    dispatch(setClientType(selectedClient));
  };

  // const handleFormInputChange = data => {
  //   setFormInputData(prevState => {
  //     const newData = { ...prevState, ...data };
  //     handleNextClick(newData);
  //     return newData;
  //   });
  // };
  return (
    <body className={styles.body}>
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
    </body>
  );
};

export default Registration;
