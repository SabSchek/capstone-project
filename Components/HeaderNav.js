import styled from 'styled-components';
import Ellipse from '../public/assets/ellipse1.svg';
import Image from 'next/image';
import Link from 'next/link';
import BookMarkBlue from '../public/assets/BookMarkBlue.svg';

const categoryList = [
  { name: 'Kleidung', id: 'kleidung' },
  { name: 'Auto', id: 'auto' },
  { name: 'Rad', id: 'raeder' },
  { name: 'Tiere', id: 'tierchen' },
  { name: 'Media', id: 'multimedia' },
  { name: 'Home', id: 'home' },
  { name: 'Bücher', id: 'buecher' },
];

export default function HeaderNav() {
  return (
    <HeaderundNav>
      <Headline>Donatella</Headline>
      <Link href="/">
        <DivContainer>
          <Image src={Ellipse} width={60} height={80} />
        </DivContainer>
      </Link>

      {categoryList.map((categoryPoint) => (
        <p key={categoryPoint.id}>
          <Link href={`/category/${categoryPoint.name}`}>
            <CatLink>{categoryPoint.name}</CatLink>
          </Link>
        </p>
      ))}
      <BookmarkContainer>
        <Image src={BookMarkBlue} width={50} height={50} />
      </BookmarkContainer>
    </HeaderundNav>
  );
}

const HeaderundNav = styled.div`
  z-index: 1;
  height: 74px;
  background-color: green;
  width: 100%;
  font-size: 16px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 2fr;
  grid-template-rows: 2;
  padding-bottom: 4px;
  position: fixed;
  top: 0;
  align-content: center;
`;

const DivContainer = styled.div`
  margin: 1px;
  padding-top: 0.5rem;
  width: 80px;
  height: 30px;
  height: 60px;
  grid-row: 1 / 3;
`;

const BookmarkContainer = styled.div`
  margin: 3px;
  padding-top: 0.5rem;
  width: 80px;
  height: 45px;
  grid-row: 1 / 3;
  grid-column: 9;
`;

const CatLink = styled.a`
  box-shadow: 1px 2px 3px;
  border-radius: 20px;
  border-color: white;
  font-size: 8px;
  color: black;
  background-color: lightgray;
  border-style: solid;
  margin: 5px;
  text-align: center;
  padding: 3px;
`;

const Headline = styled.h1`
  color: #e6dacf;
  font-size: 30px;
  text-align: center;
  font-family: 'Dancing Script', cursive;
  padding-top: 5px;
  margin: 0;
  position: fixed;
  width: 100vw;
  grid-column: 9;
`;
