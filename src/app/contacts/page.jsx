import { cinzel, saira } from "../utils/fonts";
import styles from "../homepage/page.module.css";

export default function ContactPage() {
  return (
    <div className={styles.main}>
      <h1 className={saira.className}>This is contact Page saira font</h1>
      <h1 className={cinzel.className}>This is contact Page cinzel font</h1>
    </div>
  );
}
