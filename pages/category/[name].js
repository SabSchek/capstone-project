import styled from 'styled-components';
import { useRouter } from 'next/router.js';
import { goods } from '../../data/filter.js';
import HeaderNav from '../../Components/HeaderNav.js';

export const categoryList = [
  { name: 'Kleidung', id: 'kleidung' },
  { name: 'Auto', id: 'auto' },
  { name: 'Rad', id: 'rad' },
  { name: 'Tiere', id: 'tierchen' },
  { name: 'Media', id: 'multimedia' },
  { name: 'Home', id: 'home' },
  { name: 'Bücher', id: 'buecher' },
];

export default function DetailPage() {
  const router = useRouter();
  const { name } = router.query;

  const filteredGoods = goods.filter((good) => good.category === name);

  return (
    <AppBody>
      <HeaderNav />
      <h2>{name}</h2>
      {filteredGoods.map((good) => {
        return <p key={good.id}>{good.name}</p>;
      })}
    </AppBody>
  );
}

const AppBody = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
`;
