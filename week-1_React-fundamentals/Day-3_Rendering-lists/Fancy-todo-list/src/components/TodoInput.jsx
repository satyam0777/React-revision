import { useState } from "react";
import { PlusCircle } from "lucide-react";

const TodoInput = ({ addTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = () => {
    addTask(newTask);
    setNewTask("");
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        className="p-2 rounded-md bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 border border-gray-600 dark:border-gray-300 focus:ring-2 focus:ring-teal-400 outline-none transition-colors"
        placeholder="Add a new task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
      />
      <button 
        onClick={handleSubmit} 
        className="p-2 bg-teal-500 hover:bg-teal-600 rounded-md transition-all"
      >
        <PlusCircle size={22} />
      </button>
    </div>
  );
};

export default TodoInput;
