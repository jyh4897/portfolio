import React from "react";
import styles from "./Header.module.css";
import logo from '../images/logo.png'

function Header() {


  

  return (
    <div className={styles.container}>
        <div className={styles.headercontainer}>
        <div>
            <img src={logo} className={styles.logoimg} alt="img" />
        </div>
          <ul className={styles.logincontainer}>
            <li className={styles.LoginBtn}>
                로그인
            </li>
            <li>
                회원가입
            </li>
            <li>
                장바구니
            </li>
          </ul>
      </div>
      <div className={styles.horizon}></div>
      <ul className={styles.navcontainer}>
        <li>
          리빙
        </li>
        <li>
          패션
        </li>
        <li>
          식품
        </li>
        <li>
          헤어,바디
        </li>
      </ul>
      <div className={styles.horizon}></div>
    </div>
  );
}

export default Header;