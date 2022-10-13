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
            /*   <DivFrame key={good.id}> */
            <ItemFrame
              key={good.id}
              name={good.name}
              price={good.price}
              id={good.id}
              imgSrc={good.images}
            />
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
  text-align: center;
`;

const UlContainer = styled.div`
  display: grid;

  gap: 1rem;
  margin-top: 8rem;
  grid-template-columns: 1fr 1fr;
  list-style: none;
  text-align: center;
  gap: 5px;
`;
