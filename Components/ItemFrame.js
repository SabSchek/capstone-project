import styled from 'styled-components';
import Bookmark from '../Components/ButtonBookmark';
import Image from 'next/image';

function ItemFrame({ name, price, id, imgSrc }) {
  return (
    <Container>
      <Image
        alt="Produkt"
        objectFit="cover"
        src={imgSrc}
        width={60}
        height={70}
      />
      <FrameList>
        <Link href={`/itempages/${id}`} passHref>
          <Title>{name}</Title>
          <Price>{price}</Price>
        </Link>
      </FrameList>
      <Bookmark />
    </Container>
  );
}

export default ItemFrame;

const Container = styled.div`
  display: flex;
  grid-template-columns: 1fr 1fr;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow: hidden;
  box-shadow: 2px 2px 2px 2px violet;
  margin: 0.5rem 1rem;
  text-align: center;
`;

const Title = styled.h6`
  color: grey;
  margin: 10px;
  padding-top: 3px;
  background-color: white;
  width: 60px;
  height: 20px;
  text-align: center;
`;

const Price = styled.p`
  font-size: 12px;
  font-style: italic;
  color: green;
`;

const Button = styled.button`
  display: flex;
  box-shadow: 1px 2px 3px;
  border-radius: 20px;
  border-color: white;
  font-size: 10px;
  color: black;
  background-color: lightgray;
  border-style: dotted;
  margin-left: 20px;
`;

const FrameList = styled.div`
  width: 80.4px;
  justify-items: center;
  justify-content: center;
`;

const Link = styled.a``;
