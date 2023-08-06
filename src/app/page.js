import Link from "next/link";
import styles from './styles.module.css'
import global from './globals.css'

export default function Home() {
  return (
    <div>
      <nav className={styles.nav}>
        <div>
          <p className={styles.logo}>Ma<span className={styles.orange}>r</span>y</p>
        </div>
        <ul className={styles.ul}>
          <li>Portfolio</li>
          <li>Blog</li>
          <li>Hire Me</li>
        </ul>
      </nav>
    </div>
  );
}
