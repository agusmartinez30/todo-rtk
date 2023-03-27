import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTasks, updateTasks } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function TaskForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tasksState = useSelector(state => state.tasks)
  const params = useParams()

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
    if(params.id){
      dispatch(updateTasks(tasks))
    }else{

      dispatch(
        addTasks({
          ...tasks,
          id: uuid(),
        })
      );
    }
    navigate("/");
  };

  useEffect(() => {
   console.log(params.id)
   if(params.id){
    setTasks(tasksState.find(task => task.id === params.id))
   }
  }, [])
  

  return (
    <form className="bg-sky-800 w-4/5 md:w-1/2 flex flex-col p-3 gap-3 rounded-md" onSubmit={handleSubmit}>
      <label htmlFor="">Title</label>
      <input
        name="title"
        placeholder="title"
        type="text"
        onChange={handleChange}
        value={tasks.title}
        className="rounded-sm text-gray-800 py-3 px-1"
      />
      <label htmlFor="">Description</label>
      <textarea
        name="description"
        placeholder="description"
        value={tasks.description}
        onChange={handleChange}
        className="rounded-sm text-gray-800 py-3 px-1 resize-none "
      ></textarea>
      <button className="  rounded-sm hover:bg-green-300 py-2 px-1">save</button>
    </form>
  );
}

export default TaskForm;
