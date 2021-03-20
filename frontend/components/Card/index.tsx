import { Card, Button } from "react-bootstrap";
import { Guid } from "guid-typescript";

export interface TodoCardProps {
  id: Guid;
  description: string;
  done: boolean;
}

export const TodoCard = (props: TodoCardProps) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.description}</Card.Title>
        <Card.Text>
          _id: {props.id}
        </Card.Text>
        <Card.Text className="text-end">
          <Button variant="light" className="text-muted">
            {props.done ? "REOPEN" : "CLOSE"}
          </Button>
          <Button variant="light" className="text-muted">
            EDIT
        </Button>
          <Button variant="light" className="text-muted">
            DELETE
        </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
