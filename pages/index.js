import styled from 'styled-components';
import Categories from '../Components/Categories';
import Header from '../Components/Header';
import Ellipse from '../public/assets/ellipse1.svg';
import Image from 'next/image';
import { goods } from '../pages/filter';
import Car

function Home() {
  return (
    <>
      <AppBody>
        <Header>
          <div>
            <Image src={Ellipse} width={35} height={60} />
          </div>
          <h1>Donatella</h1>
        </Header>
        <Categories />

        <>
          <ListContainer>
            <CardContainer>
              {goods.map((good) => {
                console.log(good);
                return (
                  <>
                    <
                    <li key={good.id}>{good.name}</li>

                    <Image
                      alt="Produkt"
                      src={good.images}
                      width={50}
                      height={60}
                    />
                  </>
                );
              })}
            </CardContainer>
          </ListContainer>
        </>
      </AppBody>
    </>
  );
}

export default Home;

const AppBody = styled.div`
  background-color: #d9d9d9;
  margin: 0;
  padding: 0;
  width: 375px;
  height: 667px;
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const CardContainer = styled.div`
  list-style: none;
  text-align: center;
  grid-column: span 6;
`;
