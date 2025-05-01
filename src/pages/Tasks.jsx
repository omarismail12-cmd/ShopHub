import { useState } from "react";
import { Trash, X } from "lucide-react";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (title.trim() === "") return;
    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
    setTitle("");
    setDescription("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        📝 Task Manager
      </h2>

      <div className="bg-white p-4 rounded shadow mb-6">
        <input
          className="border p-2 w-full mb-2 rounded"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="border p-2 w-full mb-4 rounded"
          placeholder="Enter task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          onClick={addTask}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          + Add Task
        </button>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Tasks</h3>
        <div className="flex gap-2">
          <button
            className={`px-3 py-1 rounded ${filter === "all" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`px-3 py-1 rounded ${filter === "completed" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
          <button
            className={`px-3 py-1 rounded ${filter === "incomplete" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
            onClick={() => setFilter("incomplete")}
          >
            Incomplete
          </button>
        </div>
      </div>

      {filteredTasks.map(task => (
        <div
          key={task.id}
          className="bg-white p-4 mb-3 rounded shadow flex justify-between items-start"
        >
          <div>
            <button onClick={() => toggleTask(task.id)} className="mr-3 text-gray-600 hover:text-black">
              <X className={`inline-block ${task.completed ? "text-green-500" : ""}`} />
            </button>
            <strong className={task.completed ? "line-through" : ""}>{task.title}</strong>
            <div className="text-sm text-gray-500">{task.description}</div>
          </div>
          <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:text-red-700">
            <Trash />
          </button>
        </div>
      ))}
    </div>
  );
}
