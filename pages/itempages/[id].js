import styled from 'styled-components';
import { useRouter } from 'next/router.js';
import { goods } from '../../data/filter.js';
import HeaderNav from '../../Components/HeaderNav.js';
import Image from 'next/image.js';

export default function ItemPage() {
  const router = useRouter();
  const { id } = router.query;

  const foundGood = goods.find((good) => good.id === id);

  return (
    <AppBody>
      <HeaderNav />
      <PageItemFrame>
        <h2>{foundGood?.name}</h2>
        <Image
          alt=""
          src={foundGood?.images}
          layout="responsive"
          width={20}
          height={20}
        />
        <p>{foundGood?.price}</p>
      </PageItemFrame>
    </AppBody>
  );
}

const PageItemFrame = styled.div`
  background-color: lightgray;
`;

const ItemPageButton = styled.button``;

const AppBody = styled.div`
  background-color: #596f80;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
`;
