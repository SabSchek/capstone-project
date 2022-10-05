import styled from 'styled-components';
import Categories from '../Components/Categories';

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

// function goodItem({ good }) {
//   return <li>{goods}</li>;
// }

function Home({ good }) {
  return (
    <>
      <Categories />

      <div className="listGoods">
        <h2>List of goods</h2>
        <ul>
          <li>Stuhl</li>
          <li>Kleid</li>
          <li>Fahrrad</li>
          <li>Buch</li>
          <li>iPhone</li>
          <li>Küchenmaschine</li>
          <li>Autoradio</li>
          <li>Spielzeug</li>
          <li>Babybett</li>
          <li>Drucken</li>
          <li>Schrank</li>
          <li>Pizzaroller</li>
        </ul>
      </div>
    </>
  );
}

export default Home;

// const Button = styled.button`
//   background: yellow;
//   color: purple;
// `;
