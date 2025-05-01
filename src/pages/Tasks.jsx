import { useState } from "react";
import { Trash } from "lucide-react";

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
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        📝 Task Manager
      </h2>

      {/* Task Input Card */}
      <div className="bg-white p-6 rounded-2xl shadow border mb-6">
        <label className="block font-semibold mb-1">Task Title</label>
        <input
          className="border border-gray-300 p-3 w-full mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="block font-semibold mb-1">Description</label>
        <textarea
          className="border border-gray-300 p-3 w-full mb-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          onClick={addTask}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium"
        >
          + Add Task
        </button>
      </div>

      {/* Filter Buttons */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Tasks</h3>
        <div className="flex gap-2 mt-2">
          <button
            className={`px-4 py-1.5 rounded-md font-medium ${
              filter === "all"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`px-4 py-1.5 rounded-md font-medium ${
              filter === "completed"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
          <button
            className={`px-4 py-1.5 rounded-md font-medium ${
              filter === "incomplete"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setFilter("incomplete")}
          >
            Incomplete
          </button>
        </div>
      </div>

      {/* Task List */}
      {filteredTasks.map((task) => (
        <div
          key={task.id}
          className="bg-white p-4 mb-3 rounded-xl shadow flex justify-between items-center"
        >
          <div className="flex items-center gap-3">
            <button onClick={() => toggleTask(task.id)}>
              <span
                className={`w-6 h-6 inline-block rounded-full flex items-center justify-center border-2 text-sm font-bold ${
                  task.completed
                    ? "border-green-500 bg-green-100 text-green-600"
                    : "border-gray-300 text-gray-400"
                }`}
              >
                ✓
              </span>
            </button>
            <div>
              <strong
                className={`block ${
                  task.completed ? "line-through text-gray-500" : ""
                }`}
              >
                {task.title}
              </strong>
              <div className="text-sm text-gray-500">{task.description}</div>
            </div>
          </div>
          <button
            onClick={() => deleteTask(task.id)}
            className="text-red-500 hover:text-red-700"
          >
            <Trash />
          </button>
        </div>
      ))}
    </div>
  );
}
