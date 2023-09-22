// import Image from "next/image";
import styles from "./page.module.css";

import { cinzel, saira } from "./fonts";

export default function Home() {
  return (
    // <main styles={main}>
    <main className={styles.justBackgr}>
      <h1>Тут вместо тега h1  надо вставлять Components</h1>
      <h2 className={saira.className}>Hello Neeeeext saira font</h2>
      <h2 className={cinzel.variable}>Hello Neeeeext cinzel</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        odit explicabo inventore error, facere sapiente maxime ullam dicta
        labore blanditiis magni adipisci fugiat nostrum. Id, similique mollitia!
        Similique, atque molestiae.Lore
      </p>
    </main>
  );
}
