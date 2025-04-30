import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>[홈 컴포넌트]</h1>
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
