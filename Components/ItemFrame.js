import styled from 'styled-components';

function ItemFrame({ name, price }) {
  return (
    <li>
      <Title>{name}</Title>
      <Price>{price}</Price>
      <Button variant="primary">get it</Button>
    </li>
  );
}

export default ItemFrame;

const Title = styled.h5`
  color: grey;
  margin: 0;
  padding: 0;
  background-color: white;
`;

const Price = styled.p`
  font-size: 8px;
`;

const Button = styled.button`
  display: flex;
  box-shadow: 1px 2px 3px;
  border-radius: 20px;
  border-color: white;
  font-size: 10px;
  color: black;
  background-color: lightgray;
  border-style: solid;
  margin: 5px;
  text-align: center;
  padding: 3px;
  border-radius: 10px;
`;
