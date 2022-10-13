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
        <ImageDiv>
          <Image
            alt=""
            src={foundGood?.images}
            layout="responsive"
            width={20}
            height={20}
          />
        </ImageDiv>
        <p>{foundGood?.price}</p>
      </PageItemFrame>
      <ButtonContainer>
        <ButtonNextStep>next</ButtonNextStep>
      </ButtonContainer>
    </AppBody>
  );
}

const PageItemFrame = styled.div`
  display: grid;
  place-content: center;
  background-color: lightgray;
  text-align: center;
`;

const ImageDiv = styled.div`
  height: auto;
  width: 30vw;
  justify-content: center;
  border-style: dotted;
`;

const AppBody = styled.div`
  background-color: #596f80;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
`;

const ButtonNextStep = styled.button`
  height: 2rem;
  padding: 0 3rem;
  border-color: grey;
  border-radius: 0mm;
  color: #596f80;
`;

const ButtonContainer = styled.div`
  display: grid;
  place-content: center;
  margin-top: 1rem;
`;
