const Todolist = ({ todos, handleEdit }) => {
  return (
    <ul>
      {todos.map((x) => (
        <li key={x.id}>
          <div className="todoItem">
            {x.task} - {x.person}
            <button className="btn-edit" onClick={() => handleEdit(x)}>
              Edit
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Todolist;
