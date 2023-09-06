import styles from "./Logo.module.css";

function Logo() {
  return (
    <span className={styles.logo}>
      <img src="/logo.png" alt="WorldWise logo" />
      <h1>XploreWorld</h1>
    </span>
  );
}

export default Logo;
