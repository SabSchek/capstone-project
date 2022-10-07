import styled from 'styled-components';
import { useRouter } from 'next/router.js';
import { goods } from '../../data/filter.js';
import Header from '../../Components/Header.js';
import Categories from '../../Components/Categories.js';
import Image from 'next/image.js';

export default function ItemPage() {
  const router = useRouter();
  const { id } = router.query;

  const foundGood = goods.find((good) => good.id === id);

  return (
    <>
      <Header>
        <h1>Donatella</h1>
      </Header>
      <Categories />
      <h2>{foundGood?.name}</h2>
      <Image
        alt=""
        src={foundGood?.images}
        layout="responsive"
        width={20}
        height={20}
      />
      <p>{foundGood?.price}</p>
    </>
  );
}
