import styled from 'styled-components';
import Image from 'next/image';
import { goods } from '../data/filter';
import ItemFrame from '../Components/ItemFrame';
import HeaderNav from '../Components/HeaderNav';

function Home() {
  return (
    <>
      <HeaderNav />
      <AppBody>
        <UlContainer>
          {goods.map((good) => {
            return (
              <DivFrame key={good.id}>
                <ItemFrame
                  key={good.id}
                  name={good.name}
                  price={good.price}
                  id={good.id}
                />
                <ImageStyle>
                  <Image
                    alt="Produkt"
                    src={good.images}
                    width={60}
                    height={70}
                  />
                </ImageStyle>
              </DivFrame>
            );
          })}
        </UlContainer>
      </AppBody>
    </>
  );
}

export default Home;

const AppBody = styled.div`
  background-color: #596f80;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
`;

const UlContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  list-style: none;
  text-align: center;
  gap: 5px;
`;

const DivFrame = styled.div`
  display: flex;
  border: solid coral;
  background-color: white;
  box-shadow: black;
  height: 15vh;
  width: 40vw;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  justify-self: left;
`;

const ImageStyle = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
  width: 50px;
`;
