import { Header } from '@test/ui';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './home.module.scss';
import Image from 'next/image';
import Img1 from '../../public/images/wellness1.jpeg';

const Home: React.FC = () => {

  return (
    <div>
      <Header />
      <nav>
        <ul className={styles.ul}>
          <li>
            <Link to="/about">웰니스에 대하여...</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.imgContainer}>
        <Image src={Img1} alt="wellness1" width={300} />
      </div>
    </div>
  );
};

export default Home;
