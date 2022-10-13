import styled from 'styled-components';
import Image from 'next/image';
import { goods } from '../data/filter';
import ItemFrame from '../Components/ItemFrame';
import HeaderNav from '../Components/HeaderNav';

function Home() {
  return (
    <AppBody>
      <HeaderNav />
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
                <Image alt="Produkt" src={good.images} width={60} height={70} />
              </ImageStyle>
            </DivFrame>
          );
        })}
      </UlContainer>
    </AppBody>
  );
}

export default Home;

const AppBody = styled.div`
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
  border: solid white;
  background-color: white;
  box-shadow: grey;
  height: 10vh;
  width: 30vw;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 2px 2px 2px 2px violet;
  justify-self: center;
  margin: 10px;
`;

const ImageStyle = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
  width: 50px;
`;
