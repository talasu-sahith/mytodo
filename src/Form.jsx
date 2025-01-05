import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
const Forum = ({ handlesubmit, handleChange, handleEdit, todo, task }) => {
  return (
    <>
      <Form onSubmit={handlesubmit} className="form1">
        <Form.Group className="mb-3">
          <Form.Label htmlFor="task">Enter task</Form.Label>
          <Form.Control
            type="text"
            id="task"
            name="task"
            value={todo.task}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="task">Assigned to</Form.Label>
          <Form.Control
            type="text"
            id="person"
            name="person"
            value={todo.person}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <Button className="btn-submit" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Forum;
