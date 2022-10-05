import styled from 'styled-components';
import { goods } from '../data/filter';
import DivFrame from '../pages/index';
import ButtonBookmark from './ButtonBookmark';

function ItemFrame({ name, price }) {
  return (
    <>
      <FrameList>
        <Title>{name}</Title>
        <Price>{price}</Price>
        <Button variant="primary">get it</Button>
      </FrameList>
      <ButtonBookmark />
    </>
  );
}

export default ItemFrame;

const Title = styled.h6`
  color: grey;
  margin: 10px;
  padding-top: 3px;
  background-color: white;
  width: 60px;
  height: 20px;
  text-align: center;
`;

const Price = styled.p`
  font-size: 12px;
  color: green;
`;

const Button = styled.button`
  display: flex;
  box-shadow: 1px 2px 3px;
  border-radius: 20px;
  border-color: white;
  font-size: 10px;
  color: black;
  background-color: lightgray;
  border-style: dotted;
  margin-left: 20px;
`;

const FrameList = styled.li`
  width: 80.4px;
  justify-items: center;
  justify-content: center;
`;
