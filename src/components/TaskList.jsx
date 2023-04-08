import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTasks } from "../features/tasks/taskSlice";
import { useNavigate, useParams } from "react-router-dom";

function TaskList() {
  const tasks = useSelector((state) => state.tasks.taskItems);
  console.log('task', tasks)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const handleDelete = (id) => {
    dispatch(deleteTasks(id));
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {
          tasks.length < 1 && <h3 className="text-sky-500 text-2xl text-center">Add a new task...</h3>
        }
        {tasks.map((task) => (
          <div key={task.id} className="bg-slate-800 w-full p-3 rounded-md ">
            <header className="flex justify-between">
              <h3 className="text-sky-500 text-lg">{task.title}</h3>
              <div className="flex flex-row-reverse gap-2">
                <button
                  className="bg-red-600 rounded-sm py-1 px-2"
                  onClick={() => {
                    handleDelete(task.id);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-trash"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ffffff"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="10" y1="11" x2="10" y2="17" />
                    <line x1="14" y1="11" x2="14" y2="17" />
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                  </svg>
                </button>
                <button
                  className="bg-gray-600 rounded-sm py-1 px-2"
                  onClick={() => {
                    navigate(`/edit/${task.id}`);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-edit"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ffffff"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                    <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                    <line x1="16" y1="5" x2="19" y2="8" />
                  </svg>
                </button>
              </div>
            </header>
            <div className=" w-full py-3 px-0">
              <p>{task.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
