import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTasks, updateTasks } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";

function TaskForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tasksState = useSelector((state) =>  state.tasks.taskItems);
  console.log(tasksState)
  const params = useParams();

  const [tasks, setTasks] = useState({
    title: "",
    description: "",
  });
  const handleChange = (e) => {
    setTasks({
      ...tasks,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      dispatch(updateTasks(tasks));
      navigate("/");
    } else {
      const { title, description } = tasks;
      if (title != "") {
        dispatch(
          addTasks({
            ...tasks,
            id: uuid(),
          })
        );
        navigate("/");
      } else {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });

        Toast.fire({
          icon: "warning",
          title: "El titulo es obligatorio",
        });
      }
    }
  };

  useEffect(() => {
    if (params.id) {
      setTasks(tasksState.find((task) => task.id == params.id));
    }
  }, []);

  return (
    <div className="w-full h-screen grid place-items-center ">
      <form
        className="bg-slate-800 w-4/5 md:w-1/2 flex flex-col p-3 gap-3 rounded-md"
        onSubmit={handleSubmit}
      >
        <label className="text-sky-500" htmlFor="">Title*</label>
        <input
          name="title"
          placeholder="title"
          type="text"
          onChange={handleChange}
          value={tasks.title}
          className="rounded-sm text-gray-800 py-3 px-1 "
        />
        <label className="text-sky-500"  htmlFor="">Description (opcional)</label>
        <textarea
          name="description"
          placeholder="description"
          value={tasks.description}
          onChange={handleChange}
          className="rounded-sm text-gray-800 h-24 py-3 px-1 resize-none "
        ></textarea>
        <button className="rounded-sm bg-green-400 py-2 px-1">save</button>
      </form>
    </div>
  );
}

export default TaskForm;
