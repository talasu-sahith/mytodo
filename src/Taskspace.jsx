import { useEffect, useState } from "react";
import Forum from "./Form";
import { nanoid } from "nanoid";
import Todolist from "./Todolist";
const Taskspace = () => {
  const [todo, setTodo] = useState({ id: "", task: "", person: "" });
  const [task, setTask] = useState([]);
  // useEffect(() => {
  //   const todos = [];
  // }, []);
  const handleChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!todo.id) {
      task.push({ ...todo, id: nanoid() });
    } else {
      setTask((prev) => {
        console.log(prev);
        let newtask = prev.map((x) => {
          return x.id === todo.id ? { ...x, person: todo.person } : x;
        });
        return newtask;
      });
      // task.map;
    }
    setTodo({ id: "", task: "", person: "" });
    console.log(task);
  };

  const handleEdit = (task) => {
    setTodo({ id: task.id, task: task.task, person: task.person });
  };
  return (
    <div className="form-template">
      <Forum
        handleChange={handleChange}
        handlesubmit={handlesubmit}
        handleEdit={handleEdit}
        todo={todo}
        task={task}
        setTodo={setTodo}
      />
      <div className="todolist">
        <Todolist todos={task} handleEdit={handleEdit} />
      </div>
    </div>
  );
};

export default Taskspace;
