import styled from 'styled-components';
import Ellipse from '../public/assets/ellipse1.svg';
import Image from 'next/image';
import Link from 'next/link';
import BookMarkBlue from '../public/assets/BookMarkBlue.svg';

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
    </CatNav>
  );
}
const CatNav = styled.nav`
  font-size: 16px;
  display: flex;
  flex-direction: row;
  background-color: #8d8080;
  height: 4.3vh;
  width: 100vw;
  padding-bottom: 4px;
`;

const DivContainer = styled.div`
  margin: 1px;
  padding-top: 0.5rem;
  width: 80px;
  height: 30px;
  display: flex;
  height: 60px;
`;

const BookmarkContainer = styled.div`
  margin: 3px;
  padding-top: 0.5rem;
  width: 80px;
  height: 45px;
  display: flex;
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
