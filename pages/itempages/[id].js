import styled from 'styled-components';
import { useRouter } from 'next/router.js';
import { goods } from '../../data/filter.js';
import Header from '../../Components/Header.js';
import Categories from '../../Components/Categories.js';
import ItemFrame from '../../Components/ItemFrame.js';
export default function ItemPage() {
  const router = useRouter();
  const { id } = router.query;

  const findGoods = goods.find((good) => good.id === id);

  return (
    <>
      <Header>
        <h1>Donatella</h1>
      </Header>
      <Categories />
      {findGoods.map((good) => {
        return <p key={good.id}>{good.id}</p>;
      })}
    </>
  );
}
