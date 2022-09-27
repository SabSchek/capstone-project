import styled from 'styled-components';
import Ellipse from '../public/assets/ellipse1.svg';
import Image from 'next/image';

export default function Categories() {
  return (
    <CatBody>
      <DivContainer>
        <Image src={Ellipse} width={40} height={65} />
      </DivContainer>
      <nav>
        <Nav>In welche richtung soll es gehen?</Nav>
        <Category>Kind</Category>
        <Category>Auto</Category>
        <Category>Haus</Category>
        <Category>Haustiere</Category>
        <Category>Elektronik</Category>
        <Category>Musik</Category>
        <Category>Filme</Category>
      </nav>
    </CatBody>
  );
}
const CatBody = styled.nav`
  width: 390px;
  font-size: 16px;
  color: white;
  display: flex;
  border-bottom-right-radius: 30px;
  font-variant: small-caps;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  display: flex;
  position: absolute;
  background-color: grey;
  width: 390px;
`;

const Category = styled.button`
  margin: 5px;
  border-radius: 7px;
  border-color: rosybrown;
  color: rosybrown;
  border-style: dotted;
  letter-spacing: 0.15rem;
  transition: all 0.3s;
`;

const Nav = styled.h2`
  margin: 5px;
  color: white;
  font-variant: small-caps;
  font-family: Arial, Helvetica, sans-serif;
  text-align: right;
  padding: 20px;
`;

const DivContainer = styled.div`
  margin: 10px;
  size: 10px;
  width: 100px;
  height: 50px;
`;
