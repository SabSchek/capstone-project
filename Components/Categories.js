import styled from 'styled-components';
import Ellipse from '../public/assets/ellipse1.svg';
import Image from 'next/image';
import Link from 'next/link';

export const categoryList = [
  { name: 'Kleidung', id: 'kleidung' },
  { name: 'Auto', id: 'auto' },
  { name: 'Raeder', id: 'raeder' },
  { name: 'Tiere', id: 'tierchen' },
  { name: 'Media', id: 'multimedia' },
  { name: 'Home', id: 'home' },
  { name: 'Buecher', id: 'buecher' },
];

export default function Categories() {
  return (
    <CatBody>
      <DivContainer>
        <Image src={Ellipse} width={40} height={65} />
      </DivContainer>

      <nav>
        <p>In welche richtung soll es gehen?</p>
        {categoryList.map((categoryPoint) => (
          <p key={categoryPoint.id}>
            <>
              <Link href={`/category/${categoryPoint.name}`}>
                <Button>
                  <a>{categoryPoint.name}</a>
                </Button>
              </Link>
            </>
          </p>
        ))}
      </nav>
    </CatBody>
  );
}
const CatBody = styled.nav`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  border-bottom-right-radius: 30px;
  font-variant: small-caps;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #d9d9d9;
  height: 100px;
`;

const DivContainer = styled.div`
  margin: 10px;
  width: 80px;
  height: 30 px;
  display: flex;
`;

const Button = styled.button`
  border-radius: 7px;
  border-color: rosybrown;
  color: #8d8080;
  border-style: dotted;
  width: 60px;
  margin: 5px;
  text-align: center;
`;
