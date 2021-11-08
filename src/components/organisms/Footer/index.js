import React from 'react';
import styles from './styles.module.scss';

const Footer = () => {

  let year = new Date().getFullYear();

  return (
    <footer style={styles}>
      <ul>
        <li>{year}</li>
        <li>©Chuvalskyi Viacheslav</li>
      </ul>
    </footer>
  );
};
export default Footer;