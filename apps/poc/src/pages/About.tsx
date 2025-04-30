import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div>
      <h1>[어바웃 컴포넌트]</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">홈으로 궈궈</Link>
          </li>
          <li>
            <Link to="/about">어바웃 (여기)</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default About;