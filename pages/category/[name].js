import styled from 'styled-components';
import { useRouter } from 'next/router.js';
import { goods } from '../../data/filter.js';
import HeaderNav from '../../Components/HeaderNav.js';
import ItemFrame from '../../Components/ItemFrame.js';

export const categoryList = [
  { name: 'Kleidung', id: 'kleidung' },
  { name: 'Auto', id: 'auto' },
  { name: 'Rad', id: 'rad' },
  { name: 'Tiere', id: 'tiere' },
  { name: 'Media', id: 'media' },
  { name: 'Home', id: 'home' },
  { name: 'Bücher', id: 'bücher' },
];

export default function DetailPage() {
  const router = useRouter();
  const { name } = router.query;

  const filteredGoods = goods.filter((good) => good.category === name);

  return (
    <AppBody>
      <HeaderNav />
      <h2>{name}</h2>
      <ArticleWrapper>
        {filteredGoods.map((good) => (
          <ItemFrame
            key={good.id}
            name={good.name}
            price={good.price}
            id={good.id}
            imgSrc={good.images}
          />
        ))}
      </ArticleWrapper>
    </AppBody>
  );
}

const AppBody = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
`;

const ArticleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
