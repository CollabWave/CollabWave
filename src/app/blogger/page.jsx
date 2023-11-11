'use client';
import Image from 'next/image';
import styles from './blogger.module.css';
import { cinzel, roboto } from '@/utils/fonts';
// import { Button } from '@/components/Button/button';
import { useState } from 'react';
import Link from 'next/link';
export default function Blogger() {
  const [hoveredIcon, setHoveredIcon] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    message: '',
    website: '',
    subscribe: '',
    accept: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleLinkMouseEnter = iconName => {
    setHoveredIcon(iconName);
  };

  const handleLinkMouseLeave = () => {
    setHoveredIcon('');
  };

  const phoneRegex =
    /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm;

  const handleFormSubmit = e => {
    e.preventDefault();
    setErrorMessage('');
    if (!formData.name) {
      setErrorMessage('Please enter the name!');
      return;
    }
    if (/\d/.test(formData.name)) {
      setErrorMessage('Please enter a valid name!');
      return;
    }
    if (!formData.phone) {
      setErrorMessage('Please enter the phone number!');
      return;
    }
    if (phoneRegex.test(formData.phone) === false) {
      setErrorMessage('Please enter a valid phone number!');
      return;
    }
    if (!formData.email) {
      setErrorMessage('Please enter the email!');
      return;
    }
    if (!formData.email.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi)) {
      setErrorMessage('Please enter a valid email!');
      return;
    }
    if (!formData.message) {
      setErrorMessage('Do not forget to add your message!');
      return;
    }
    console.log(formData);
    setErrorMessage('Your message is sent! We will respond as soon as possible.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };
  // const [isPressed, setIsPressed] = useState(false);
  return (
    <div className={styles.container}>
      <div className={`${styles.blogger} `}>
        <div className={styles.blogger_hero}>
          <h1 className={styles.bloggerTitle}>Select premium brands to collaborate with</h1>
          <div className={styles.div_btn}>
            {' '}
            <btn
              // isOpen={isPressed}
              // setIsOpen={setIsPressed}
              // btn_styles={styles.btn_blogger}
              className={styles.btn_blogger}
            >
              Become an influencer
            </btn>
            <btn
              //  isOpen={isPressed} setIsOpen={setIsPressed} btn_styles={styles.btn_blogger}
              className={styles.btn_blogger}
            >
              Become an ?????
            </btn>
          </div>
        </div>
        <div className={styles.div_icons}>
          <section className={styles.cards}>
            <div className={styles.container}>
              <div className={styles.cards_wrapper}>
                <div className={styles.angle_wrapper}>
                  <div className={styles.card}>
                    <Image
                      className={styles.card_img}
                      src="/blogger/nike.png"
                      alt=""
                      width={450}
                      height={400}
                    />
                  </div>
                </div>

                <div className={styles.angle_wrapper}>
                  <div className={styles.card}>
                    <Image
                      className={styles.card_img}
                      src="/blogger/apple.png"
                      alt=""
                      width={850}
                      height={800}
                    />
                  </div>
                </div>

                <div className={styles.angle_wrapper}>
                  <div className={styles.card}>
                    <Image
                      className={styles.card_img}
                      src="/blogger/puma.png"
                      alt=""
                      width={250}
                      height={100}
                    />
                  </div>
                </div>

                <div className={styles.angle_wrapper}>
                  <div className={styles.card}>
                    <Image
                      className={styles.card_img}
                      src="/blogger/mcd.png"
                      alt=""
                      width={250}
                      height={100}
                    />
                  </div>
                </div>
                <div className={styles.angle_wrapper}>
                  <div className={styles.card}>
                    <Image
                      className={styles.card_img}
                      src="/blogger/cola480.png"
                      alt=""
                      width={250}
                      height={100}
                    />
                  </div>
                </div>

                <div className={styles.angle_wrapper}>
                  <div className={styles.card}>
                    <Image
                      className={styles.card_img}
                      src="/blogger/adidas.png"
                      alt=""
                      width={450}
                      height={400}
                    />
                  </div>
                </div>

                <div className={styles.angle_wrapper}>
                  <div className={styles.card}>
                    <Image
                      className={styles.card_img}
                      src="/blogger/burger.png"
                      alt=""
                      width={250}
                      height={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <span className={styles.span_very_long}></span>
      <div className={styles.how}>
        <div className={styles.div_line}>
          <span className={styles.span_short}></span>
          <h2 className={styles.h2_how}>HOW CAN I USE IT?</h2>
          <span className={styles.span_long}></span>
        </div>
        <div className={styles.div_p}>
          {' '}
          <p className={styles.p}>
            You don’t need a massive following to work with top-tier brands. Even if you have only
            <span className={styles.p_span}> 1000 followers</span>, you can still choose which
            famous global brands to promote as an influencer. With your loyal followers, you can
            earn a commission on every sale you generate.
          </p>
        </div>
      </div>
      <div className={styles.how}>
        <div className={styles.div_line}>
          <span className={styles.span_long}></span>
          <h2 className={styles.h2_how}>FEATURES</h2>
          <span className={styles.span_short}></span>
        </div>
        <div className={styles.div_features}>
          {' '}
          <div className={styles.features_card}>
            <Image
              // className={styles.features_card_img}
              src="/blogger/two_peoples.png"
              alt=""
              width={104}
              height={104}
            />
            <p className={styles.p}>
              Our platform is where creativity meets commerce. For our bloggers, we provide many
              opportunities.
            </p>
          </div>
          <div className={styles.features_card}>
            <Image
              className={styles.features_card_img}
              src="/blogger/rupor.png"
              alt=""
              width={104}
              height={104}
            />
            <p className={styles.p}>
              Visibility: With our broad brand partnerships, your ideas and content will get the
              attention they deserve. You will be able to share your unique voice with millions of
              people around.
            </p>
          </div>
          <div className={styles.features_card}>
            <Image
              className={styles.features_card_img}
              src="/blogger/money.png"
              alt=""
              width={104}
              height={104}
            />
            <p className={styles.p}>
              Earnings: We value your creative energy and offer fair monetization. With our
              platform, your hobby can become a source of additional income, and sometimes the main
              income.
            </p>
          </div>
          <div className={styles.features_card}>
            <Image
              className={styles.features_card_img}
              src="/blogger/analytics.png"
              alt=""
              width={104}
              height={104}
            />
            <p className={styles.p}>
              Analytics: We provide you with unique tools to analyse your content. You will be able
              to study the reactions of your audience, understand their interests and better adapt
              to their needs.
            </p>
          </div>
          <div className={styles.features_card}>
            <Image
              className={styles.features_card_img}
              src="/blogger/world.png"
              alt=""
              width={100}
              height={104}
            />
            <p className={styles.p}>
              Network: The platform connects you with like-minded people and industry professionals.
              Sharing experiences, learning new things, and maybe even inspiration for future
              projects.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.how}>
        <div className={styles.div_line}>
          <span className={styles.span_short}></span>
          <h2 className={styles.h2_how}>AFTER PARTY</h2>
          <span className={styles.span_long}></span>
        </div>
        <div className={styles.div_p}>
          <p className={styles.p}>
            You can enjoy our app, earn money, and collaborate with other bloggers. The only
            downside is that it can be addictive.
          </p>
        </div>
      </div>
      <div className={styles.div_line}>
        <span className={styles.span_short}></span>
        <h2 className={styles.h2_how}>Do you have any questions? Don’t hesitate to contact us!</h2>
        <span className={styles.span_short}></span>
      </div>
      <form className={styles.form}>
        <div className={styles.formWrap}>
          <div className={styles.inputsWrap}>
            <label className={styles.label}>
              Email
              <input
                className={`${styles.input} ${styles.link} ${roboto.variable}`}
                type="email"
                value={formData.email}
                placeholder="Email*"
                onChange={e => {
                  setFormData({ ...formData, email: e.target.value });
                }}
              />
            </label>
          </div>
          <div className={styles.inputsWrap}>
            <label className={styles.label}>
              Phone{' '}
              <input
                className={`${styles.input} ${styles.link} ${roboto.variable}`}
                type="tel"
                value={formData.phone}
                placeholder="Phone*"
                onChange={e => {
                  setFormData({ ...formData, phone: e.target.value });
                }}
              />
            </label>
          </div>
          <div className={styles.inputsWrap}>
            <label className={styles.label}>
              Website
              <input
                className={`${styles.input} ${styles.link} ${roboto.variable}`}
                value={formData.name}
                type="text"
                placeholder="Website*"
                onChange={e => {
                  setFormData({ ...formData, name: e.target.value });
                }}
              />
            </label>
          </div>
          <div className={styles.inputsWrap}>
            <label className={styles.label}>
              Message
              <input
                className={`${styles.input} ${styles.link} ${roboto.variable}`}
                value={formData.message}
                placeholder="Message"
                onChange={e => {
                  setFormData({ ...formData, message: e.target.value });
                }}
              />
            </label>
          </div>
          <label className={styles.label_checkbox}>
            <input
              className={styles.checkbox}
              // className={`${styles.input} ${styles.link} ${roboto.variable}`}
              type="checkbox"
              name="Subscribe"
              value={formData.subscribe}
            />
            Subscribe
          </label>
          <label className={styles.label_checkbox}>
            <input
              className={styles.checkbox}
              // className={`${styles.input} ${styles.link} ${roboto.variable}`}
              type="checkbox"
              name="accept"
              value={formData.accept}
            />
            <div>
              {' '}
              I accept
              <Link className={styles.checkbox_link} href={''}>
                {' '}
                the offer agreement
              </Link>{' '}
              and give{' '}
              <Link className={styles.checkbox_link} href={''}>
                consent
              </Link>{' '}
              to the processing of my personal data
            </div>
          </label>
        </div>
        <button className={`${styles.button} ${roboto.variable}`} onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
