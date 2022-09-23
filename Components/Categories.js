import styled from 'styled-components';

export default function Categories() {
  return (
    <>
      <CatBody>
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
      </CatBody>
    </>
  );
}
const CatBody = styled.div`
  background-color: blueviolet;
`;
