import styled from 'styled-components';
import Ellipse from '../public/assets/ellipse1.svg';
import Image from 'next/image';
import Link from 'next/link';

export const categoryList = [
  { name: 'Kleidung', id: 'kleidung' },
  { name: 'Auto', id: 'auto' },
  { name: 'Rad', id: 'raeder' },
  { name: 'Tiere', id: 'tierchen' },
  { name: 'Media', id: 'multimedia' },
  { name: 'Home', id: 'home' },
  { name: 'Bücher', id: 'buecher' },
];

export default function Categories() {
  return (
    <CatNav>
      <DivContainer>
        <Image src={Ellipse} width={40} height={50} />
      </DivContainer>

      {categoryList.map((categoryPoint) => (
        <p key={categoryPoint.id}>
          <>
            <Link href={`/category/${categoryPoint.name}`}>
              <CatLink>{categoryPoint.name}</CatLink>
            </Link>
          </>
        </p>
      ))}
    </CatNav>
  );
}
const CatNav = styled.nav`
  font-size: 16px;
  display: flex;
  flex-direction: row;
  background-color: #8d8080;
  height: 38px;
  max-width: 375px;
  padding-bottom: 4px;
`;

const DivContainer = styled.div`
  margin: 10px;
  width: 80px;
  height: 30px;
  display: flex;
  height: 60px;
`;

const CatLink = styled.a`
  box-shadow: 1px 2px 3px;
  border-radius: 20px;
  border-color: white;
  font-size: 10px;
  color: black;
  background-color: lightgray;
  border-style: solid;
  margin: 5px;
  text-align: center;
  padding: 3px;
`;
