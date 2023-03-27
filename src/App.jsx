import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//components

import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Home from "./pages/Home/Home";

function App() {
  const listTasks = useSelector((state) => state.tasks);
  console.log(listTasks);

  return (
    <div class="bg-slate-900 h-full min-h-screen md:h-screen text-white">
      <div class="flex  h-full">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<TaskForm />} />
            <Route path="/edit/:id" element={<TaskForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
