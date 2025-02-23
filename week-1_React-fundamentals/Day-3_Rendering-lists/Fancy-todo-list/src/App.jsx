import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { Sun, Moon } from "lucide-react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(true); // default to dark mode

  useEffect(() => {
    setTasks(["Learn React", "Build a project", "Read Docs"]);
  }, []);

  const addTask = (task) => {
    if (!task.trim()) return;
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Toggle dark mode by adding/removing a class on document.documentElement
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-900 dark:bg-gray-100 dark:text-gray-900 text-white p-6 transition-colors">
      <div className="w-full max-w-md flex justify-end mb-4">
        <button
          onClick={toggleDarkMode}
          className="p-2 bg-gray-800 dark:bg-gray-200 rounded-md transition-colors"
        >
          {darkMode ? (
            <Sun size={22} className="text-yellow-500" />
          ) : (
            <Moon size={22} className="text-gray-900" />
          )}
        </button>
      </div>
      <h1 className="text-3xl font-bold mt-6 mb-4 text-teal-400">
         Fancy Todo List
      </h1>
      <TodoInput addTask={addTask} />
      <TodoList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
