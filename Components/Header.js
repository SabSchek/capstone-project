import styled from 'styled-components';

export default function Header() {
  return <Headline>Donatella</Headline>;
}

const Headline = styled.h1`
  color: white;
  font-size: 30px;
  text-align: center;
  font-family: 'Dancing Script', cursive;
  padding-top: 0;
  margin: 0;
  background-color: #8d8080;
`;
