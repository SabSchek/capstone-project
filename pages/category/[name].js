import styled from 'styled-components';
import { useRouter } from 'next/router.js';
import { goods } from '../../data/filter.js';
import Header from '../../Components/Header.js';
import Categories from '../../Components/Categories.js';

// export async function getSeverSideProbs(context) {
//   const { id } = context.params;
// }

export default function DetailPage() {
  const router = useRouter();
  const { name } = router.query;

  const filteredGoods = goods.filter((good) => good.category === name);

  return (
    <AppBody>
      <Header>
        <h1>Donatella</h1>
      </Header>
      <Categories />
      <h2>{name}</h2>
      {filteredGoods.map((good) => {
        return <p key={good.id}>{good.name}</p>;
      })}
    </AppBody>
  );
}
const AppBody = styled.div`
  background-color: #596f80;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
`;
