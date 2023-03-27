import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTasks } from "../features/tasks/taskSlice";
import { useNavigate, useParams } from "react-router-dom";

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const handleDelete = (id) => {
    dispatch(deleteTasks(id));
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <div key={task.id} className="bg-slate-800 w-full p-3 rounded-md">
            <header className="flex justify-between">
              <h3 className="text-sky-500 text-lg">{task.title}</h3>
              <div className="flex flex-row-reverse gap-2">
                <button
                  className="bg-red-600 rounded-sm py-1 px-2"
                  onClick={() => {
                    handleDelete(task.id);
                  }}
                >
                  delete
                </button>
                <button
                  className="bg-gray-600 rounded-sm py-1 px-2"
                  onClick={() => {
                    navigate(`/edit/${task.id}`);
                  }}
                >
                  edit
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
