// import Image from "next/image";
import styles from './homepage/page.module.css';

import { cinzel, saira } from './utils/fonts';

import { Container } from '@/components/Container/Container';
import { Title } from './homepage/Title';
import { PhoneModel } from '@/components/phoneModel/PhoneModel';
import { AboutSection } from '@/app/homepage/AboutSection';

export default function Home() {
  return (
    // <main styles={main}>
    <main className={styles.justBackgr}>
      <Container>
        <Title />
        {/* <h1>Тут вместо тега h1 надо вставлять Components</h1>
        <h2 className={saira.className}>Hello Neeeeext saira font</h2>
        <h2 className={cinzel.variable}>Hello Neeeeext cinzel</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium odit explicabo
          inventore error, facere sapiente maxime ullam dicta labore blanditiis magni adipisci
          fugiat nostrum. Id, similique mollitia! Similique, atque molestiae.Lore
        </p> */}

        <PhoneModel />
        <AboutSection />
      </Container>
    </main>
  );
}
