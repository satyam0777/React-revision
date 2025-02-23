import { motion, AnimatePresence } from "framer-motion";
import { Trash2 } from "lucide-react";

const TodoList = ({ tasks, deleteTask }) => {
  return (
    <div className="w-full max-w-md">
      <AnimatePresence>
        {tasks.map((task, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-gray-800 dark:bg-gray-300 p-3 rounded-lg mb-2 flex justify-between items-center shadow-lg hover:scale-[1.02] transition-all"
          >
            <span className="text-lg dark:text-gray-900">{task}</span>
            <button 
              onClick={() => deleteTask(index)} 
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 size={20} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TodoList;
