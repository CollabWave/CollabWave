import Image from 'next/image';
import Link from 'next/link';
import { Form } from 'antd';

import { LeftOutlined } from '@ant-design/icons';

import VerificationInput from 'react-verification-input';
import { Spinner } from '@/components/Spinner/Spinner';

import securityMailImage from '../../../../../assets/images/dashboard/email-security.png';
import securityPhoneImage from '../../../../../assets/images/dashboard/phone-security.png';

import styles from './securitySettings.module.css';
import { montserrat } from '@/utils/fonts';

export const SecurityCodeForm = ({ onBack, onFinish, device }) => {
  let isLoading = false;

  const setSecurityCode = () => {};
  return (
    <div className={`${styles.modal} security-modal`}>
      <Form layout="vertical" requiredMark="optional" onFinish={onFinish}>
        <div className={`${styles.backWrap} security-back ${montserrat.variable}`} onClick={onBack}>
          <LeftOutlined /> <p>Back</p>
        </div>
        <div className={styles.imageWrap}>
          <Image
            width={200}
            src={device === 'email' ? securityMailImage : securityPhoneImage}
            alt="code verification"
          />
        </div>
        <h3 className={`${styles.title} security-title ${montserrat.variable}`}>
          {device === 'email' ? 'Check your mail' : 'Check your phone'}
        </h3>
        <p className={`${styles.text} security-text ${montserrat.variable}`}>
          We have sent a verification code to your {device}
        </p>
        {isLoading ? (
          <Spinner />
        ) : (
          <VerificationInput
            classNames={{
              container: `${styles.input}`,
            }}
            autoFocus
            placeholder=" "
            onChange={setSecurityCode}
          />
        )}
        <Link className={`${styles.link} text-blue ${montserrat.variable}`} href={'/'}>
          Didn't get a verification code?
        </Link>
      </Form>
    </div>
  );
};
