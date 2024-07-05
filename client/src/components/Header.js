import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ResponsiveHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
  
  h1 {
    font-size: 2rem;
    margin: 0;
  }



const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;