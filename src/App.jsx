import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//components

import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Home from "./pages/Home/Home";

function App() {

  return (
    <div class="bg-slate-900 h-full min-h-screen md:h-full text-white">
      <div class="flex  h-full p-6">
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
