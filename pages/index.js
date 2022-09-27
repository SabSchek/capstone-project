import styled from 'styled-components';
import Categories from '../Components/Categories';
import Header from '../Components/Header';
import Ellipse from '../Assets/Ellipse1.svg';
import Image from 'next/image';

const goods = [
  {
    name: 'Stuhl',
    id: '1',
    images:
      'https://img.ebay-kleinanzeigen.de/api/v1/prod-ads/images/3a/3ac6488c-d467-4328-83a8-87eb2333c535?rule=$_59.JPG',
  },
  {
    name: 'Kleid',
    id: '2',
  },
  {
    name: 'Fahrrad',
    id: '3',
  },
  {
    name: 'Buch',
    id: '4',
  },
  {
    name: 'iPhone',
    id: '5',
  },
  {
    name: 'Küchenmaschine',
    id: '6',
  },
  {
    name: 'Autoradio',
    id: '7',
  },
];

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
        <ListContainer>
          <Categories />
          <UlContainer>
            {goods.map((good) => {
              console.log(good);
              return (
                <>
                  <li key={good.id}>{good.name}</li>
                  <Image alt="" src={good.image} width={200} height={350} />;
                </>
              );
            })}
          </UlContainer>
        </ListContainer>
      </AppBody>
    </>
  );
}

export default Home;

const AppBody = styled.div`
  margin: 5px;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
  background-color: lightgray;
  max-width: 390px;
  max-height: 844px;
`;

const ListContainer = styled.div`
  width: 390px;
  height: 844px;

  text-align: center;
`;

const UlContainer = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 80px);
  gap: 10px;
`;
