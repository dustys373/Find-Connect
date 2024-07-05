import styled from 'styled-components';

const ResponsiveHeader = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;