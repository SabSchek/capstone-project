import Header from './Header';
import styled from 'styled-components';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

// const Main = styled.div`
//   background-color: #596f80;
//   margin: 0;
//   padding: 0;
//   width: 375px;
//   height: 667px;
// `;
