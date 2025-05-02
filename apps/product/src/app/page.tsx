'use client';
import { Header } from '@test/ui';
import styles from './page.module.scss';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <Header />
        <div className="container">
          app router를 사용하는 상품 (product) 앱입니다.
        </div>
      </div>
    </div>
  );
}
