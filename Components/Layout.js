import Header from './Header';
import styled from 'styled-components';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
}

const Main = styled.main`
  background-color: #596f80;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
`;
