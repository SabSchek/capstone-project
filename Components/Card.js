import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { goods } from '../pages/filter';

function BasicCard() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{good.name}</Card.Title>
        <Card.Text>{good.name}</Card.Text>
        <Button variant="primary">get it</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicCard;

const Card = styled.div`
  height: 100px;
  width: 100px;
`;
