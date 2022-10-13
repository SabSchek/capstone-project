import styled from 'styled-components';
import HeaderNav from './HeaderNav';

export default function Layout({ children }) {
  return (
    <>
      <HeaderNav />
      <Main>{children}</Main>
    </>
  );
}

const Main = styled.main`
  margin-top: 116px;
`;
