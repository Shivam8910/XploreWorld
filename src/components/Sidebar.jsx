import styles from "./Sidebar.module.css";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className={styles.sidebar}>
        <AppNav />
        <Outlet />

        <footer className={styles.footer}>
          <p className={styles.copyright}>
            &copy; Copyright {new Date().getFullYear()} by XploreWorld Inc.
          </p>
        </footer>
      </div>
    </>
  );
}

export default Sidebar;
