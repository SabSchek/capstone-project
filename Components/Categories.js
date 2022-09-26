import styled from 'styled-components';

export default function Categories() {
  return (
    <CatBody>
      <nav>
        <h1>Kategorien</h1>
        <a>Kind</a>
        <a>Auto</a>
        <a>Haus</a>
        <a>Mode</a>
        <a>Beauty</a>
        <a>Haustiere</a>
        <a>Elektronik</a>
        <a>Musik</a>
        <a>Filme</a>
      </nav>
    </CatBody>
  );
}
const CatBody = styled.nav`
  background-color: lavender;
`;
