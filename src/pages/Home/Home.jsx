import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Home.css";

// components
import TaskList from "../../components/TaskList";

const Home = () => {
  const tasksState = useSelector((state) => state.tasks);
  const navigate = useNavigate();
  const totalTasks = `${tasksState.length} Tasks`;

  // var fechaActual = new Date();
  // var day = fechaActual.getDate();
  // var nameDay = fechaActual.toLocaleString("en-EN", { weekday: "long" });
  // var month = fechaActual.toLocaleString("en-EN", { month: "long" });
  // var year = fechaActual.getFullYear();

  // let formatFecha = `${day}.${month}.${year}`;

  var fechaActual = new Date();
  var fechaFormateada = fechaActual.toLocaleDateString("en-EN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  var nameDay = fechaActual.toLocaleString("en-EN", { weekday: "long" });
  console.log(fechaFormateada.weekday);

  return (
    <div className="w-full flex flex-col gap-2">
      <header className="py-2  rounded-md p-2">
        <div className="py-6">
          <h1 className="text-left text-6xl text-blue-500">Good Morning</h1>
        </div>
        <section className="flex justify-between py-4">
          <div>
            <p>Today's {nameDay} </p>
            <p>{fechaFormateada}</p>
          </div>
        </section>
      </header>
      <section className="p-3 grid items-center content-center ">
        <header className="p-2 border-b-2 border-gray-50">
          <h2 className="text-xl">{totalTasks}</h2>
        </header>
        <div className="py-3">
          <TaskList />
        </div>
      </section>
      <section className="fixed bottom-0 left-0 w-full flex justify-center p-4 ">
        <button
          className="bg-emerald-400  hover:bg-indigo-600 py-3 px-3 rounded-full text-sm w-3/4 md:w-2/4"
          onClick={() => navigate("/create")}
        >
          Create
        </button>
      </section>
    </div>
  );
};

export default Home;
