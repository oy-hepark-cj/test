import { Header } from '@test/ui';
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <nav>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/about">어바웃 궈궈</Link>
          </li>
        </ul>
      </nav>

    </div>
  );
};

export default Home;
