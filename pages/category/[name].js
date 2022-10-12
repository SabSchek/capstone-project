import { useRouter } from 'next/router.js';
import { goods } from '../../data/filter.js';
import HeaderNav from '../../Components/HeaderNav.js';

// export async function getSeverSideProbs(context) {
//   const { id } = context.params;
// }

export default function DetailPage() {
  const router = useRouter();
  const { name } = router.query;

  const filteredGoods = goods.filter((good) => good.category === name);

  return (
    <>
      <HeaderNav />
      <AppBody>
        <h2>{name}</h2>
        {filteredGoods.map((good) => {
          return <p key={good.id}>{good.name}</p>;
        })}
      </AppBody>
    </>
  );
}
