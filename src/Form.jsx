import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
const Forum = ({ handlesubmit, handleChange, todo, task, cuser, setTodo }) => {
  const { dispatch } = useGlobalContext();
  return (
    <>
      <div
        style={{ textAlign: "right", display: "flex", justifyContent: "right" }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "white",
            display: "flex",
            alignContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Button
            className="btn-submit"
            type="button"
            onClick={() =>
              dispatch({ type: "NavigateHome", payload: { task, cuser } })
            }
          >
            Home
          </Button>
        </Link>
        <p style={{ maxWidth: "300px" }}>Current User is {cuser}</p>
      </div>
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
        <div style={{ display: "flex", justifyContent: "right" }}>
          <Button
            className="btn-submit"
            style={{ marginRight: "1rem" }}
            type="button"
            onClick={() => setTodo({ id: "", task: "", person: "" })}
          >
            Reset
          </Button>

          <Button className="btn-submit" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </>
  );
};

export default Forum;
