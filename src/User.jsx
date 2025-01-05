import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";

const User = () => {
  const { users, dispatch } = useGlobalContext();
  return (
    <div style={{ maxWidth: "200px", margin: "2rem auto" }}>
      <ul>
        {users.map((item) => (
          <div
            key={item.name}
            style={{
              display: "block",
              marginBottom: "0.5rem",
              textAlign: "center",
            }}
          >
            <Link
              to="/taskspace"
              onClick={() =>
                dispatch({ type: "NavigateTodo", payload: { item } })
              }
              className="btn-user"
            >
              {item.name}
            </Link>
            {/* <button
              className="btn-submit"
              onClick={dispatch({ type: "NavigateTodo", payload: { item } })}
            >
              {item.name}
            </button> */}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default User;
