import Taskspace from "./Taskspace";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Users from "./Users";

function App() {
  return (
    <main>
      <nav>
        <h2>This is Todo App</h2>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/taskspace" element={<Taskspace />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
