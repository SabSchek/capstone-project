import styled from 'styled-components';
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
    images:
      'https://img.ebay-kleinanzeigen.de/api/v1/prod-ads/images/e5/e5e01e13-f598-4991-8616-7e306c9e1595?rule=$_59.JPG',
  },
  {
    name: 'Fahrrad',
    id: '3',
    images:
      'https://img.ebay-kleinanzeigen.de/api/v1/prod-ads/images/08/08214155-c8b9-4f5a-8a46-249e86a7cad4?rule=$_59.JPG',
  },
  {
    name: 'Buch',
    id: '4',
    images:
      'https://img.ebay-kleinanzeigen.de/api/v1/prod-ads/images/2f/2f54e674-140c-41d0-bace-352c9459d293?rule=$_59.JPG',
  },
  {
    name: 'iPhone',
    id: '5',
    images:
      'https://img.ebay-kleinanzeigen.de/api/v1/prod-ads/images/b0/b08d3452-0cfc-4e06-8f68-67a79f468a16?rule=$_59.JPG',
  },
  {
    name: 'Küchenmaschine',
    id: '6',
    images:
      'https://img.ebay-kleinanzeigen.de/api/v1/prod-ads/images/52/529f768c-34b5-4c0b-b56c-ed20fd7c87d6?rule=$_59.JPG',
  },
  {
    name: 'Autoradio',
    id: '7',
    images:
      'https://img.ebay-kleinanzeigen.de/api/v1/prod-ads/images/fb/fb2d59c4-353d-4f3e-9fec-39da678b8bf4?rule=$_59.JPG',
  },
];

export default function ListContainer() {
  return (
    <UlContainer>
      {goods.map((good) => {
        console.log(good);
        return (
          <>
            <li key={good.id}>
              <Image alt="Produkt" src={good.images} width={40} height={50} />
            </li>
          </>
        );
      })}
    </UlContainer>
  );
}

const UlContainer = styled.ul`
  list-style: none;
  color: white;
  padding: 30px 30px;
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  color: white;
`;
