import styled from 'styled-components';

const goods = [
  'Stuhl',
  'Kleid',
  'Fahrrad',
  'Buch',
  'iPhone',
  'Küchenmaschine',
  'Autoradio',
  'Spielzeug',
  'Babybett',
  'Drucker',
  'Schrank',
  'Pizzaroller',
];

function goodItem({ good }) {
  return <li>{good}</li>;
}

function Home({ good }) {
  return (
    <div>
      <h1>List of goods</h1>
      <ul>{goods.map(good)(<goodItem key={good} good={good} />)}</ul>
    </div>
  );
}

export default Home;

// const Button = styled.button`
//   background: yellow;
//   color: purple;
// `;
