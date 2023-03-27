import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// components
import TaskList from "../../components/TaskList";

const Home = () => {
  const tasksState = useSelector((state) => state.tasks);
  const navigate = useNavigate();
  const totalTasks = `${tasksState.length} Tasks`;
  return (
    <div className="w-full flex flex-col gap-2">
      <header className="py-2  rounded-md p-2">
        <div className="py-6">
          <h1 className="text-left text-6xl text-blue-500">Good Morning</h1>
        </div>
        <section className="flex justify-between py-4">
          <div>
            <p>Today's Monday</p>
            <p>Dec 12.2022</p>
          </div>
          <div>
            <p>75% Done</p>
            <p>Completed Tasks</p>
          </div>
        </section>
      </header>
      <section className="p-3">
        <header className="p-2 border-b-2 border-gray-50">
          <h2 className="text-xl">{totalTasks}</h2>
        </header>
        <div className="py-3">
          <TaskList />
        </div>
      </section>
      <div className="fixed bottom-0 left-0 w-full flex justify-center p-4 ">
        <button
          className="bg-emerald-400  hover:bg-indigo-600 py-3 px-3 rounded-full text-sm w-3/4"
          onClick={() => navigate("/create")}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default Home;
