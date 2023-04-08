import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Home.css";

// components
import TaskList from "../../components/TaskList";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const tasksState = useSelector((state) => state.tasks.taskItems);
  const [saludo, setSaludo] = useState("");
  const navigate = useNavigate();
  const totalTasks = `${tasksState.length} Tasks`;

  var fechaActual = new Date();
  var fechaFormateada = fechaActual.toLocaleDateString("en-EN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  var nameDay = fechaActual.toLocaleString("en-EN", { weekday: "long" });

  const getHr = new Date();
  const hora = getHr.getHours();

  useEffect(() => {
    console.log(hora);

    if (hora >= 20 || hora <= 5 || hora == 0) {
      setSaludo("Night");
    } else if (hora >= 6 && hora < 12) {
      setSaludo("Morning");
    } else if (hora >= 12 && hora <= 19) {
      setSaludo("Afternoon");
    } else {
      setSaludo("Day");
    }
  }, [hora]);

  return (
    <div className="w-full flex flex-col gap-2">
      <header className="py-2 flex flex-col md:flex-row md:items-end justify-between  rounded-md p-2">
        <div className="py-6">
          <h1 className="text-left text-6xl md:text-8xl text-blue-500">
            Good <br /> {saludo}
          </h1>
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
      <section className="relative bottom-0 left-0  w-full flex justify-center p-4 ">
        <button
          className="fixed bottom-8 left-auto bg-emerald-400  hover:bg-indigo-600 flex justify-center rounded-full text-xl md:text-lg w-100 p-8 "
          onClick={() => navigate("/create")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
      </section>
    </div>
  );
};

export default Home;
