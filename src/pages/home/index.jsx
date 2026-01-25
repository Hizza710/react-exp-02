import React from "react";
import styles from "./style.module.scss";
import Header from "../../layout/Header";
import SideBar from "../../layout/SideBar";
import News from "../../components/News";
import CalendarItem from "../../components/CalenderItem";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  useAuth();

  return (
    <>
      <Header />
      <div className={styles.home}>
        <SideBar />
        <div className={styles.contents}>
          <News />
          <CalendarItem />
        </div>
      </div>
    </>
  );
};

export default Home;