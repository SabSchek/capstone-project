import styled from 'styled-components';
import { useRouter } from 'next/router.js';
import categoryList from '../../Components/Categories.js';
import { goods } from '../filter.js';

// export async function getSeverSideProbs(context) {
//   const { id } = context.params;
// }

export default function DetailPage() {
  const router = useRouter();
  const { name } = router.query;

  const filteredGoods = goods.filter((good) => good.category === name);

  return (
    <>
      <TitleH1>
        <h1>{name}</h1>
      </TitleH1>
      {filteredGoods.map((good) => {
        return <p key={good.id}>{good.name}</p>;
      })}
    </>
  );
}

const TitleH1 = styled.div`
  background-color: blue;
  margin: 0;
  padding: 0;
  width: 375px;
  height: 667px;
`;
