import styled from 'styled-components';

export default function Layout({ children }) {
  return (
    <>
      <Main>{children}</Main>
    </>
  );
}

const Main = styled.main`
  margin-top: 120px;
  text-align: center;
`;
