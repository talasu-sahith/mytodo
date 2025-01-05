import { useEffect, useState } from "react";
import Forum from "./Form";
import { nanoid } from "nanoid";
import Todolist from "./Todolist";
import { useGlobalContext } from "./context";
const Taskspace = () => {
  const { currentuser, currentdata } = useGlobalContext();
  const [todo, setTodo] = useState({ id: "", task: "", person: "" });
  const [task, setTask] = useState(currentdata);
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
          return x.id === todo.id
            ? { ...x, person: todo.person, task: todo.task }
            : x;
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
        todo={todo}
        task={task}
        cuser={currentuser}
        setTodo={setTodo}
      />
      <div className="todolist">
        <Todolist todos={task} handleEdit={handleEdit} />
      </div>
    </div>
  );
};

export default Taskspace;
