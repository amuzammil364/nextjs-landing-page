import Link from 'next/link';
import styles from "./languageSwitcher.module.css";

const LanguageSwitcher = () => {
  return (
    <div className={styles.language_switcher_container}>
      <div><Link href="/en">EN</Link></div>
      <div><Link href="/sv">SV</Link></div>
    </div>
  );
};

export default LanguageSwitcher;
