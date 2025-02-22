import React, { useState, useEffect } from "react";
import "./index.css";
function App() {
  // Counter State
  const [count, setCount] = useState(0);
  // Dark Mode Toggle
  const [darkMode, setDarkMode] = useState(true);
  // API Data State
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch API Data using useEffect
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div  className={`${
      darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
    } min-h-screen flex flex-col items-center justify-center`}>
      
      {/* Title */}
      <h1 className="text-3xl font-bold my-4">Fancy Counter App </h1>

      {/* Dark Mode Toggle */}
      <button
  onClick={() => {
    setDarkMode(!darkMode);
    console.log("Dark mode is now:", !darkMode);
  }}
  className="mb-4 px-4 py-2 rounded-lg bg-blue-500 text-white shadow-lg hover:bg-blue-600"
>
  {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
</button>

      {/* Counter Section */}
      <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center">
        <h2 className="text-2xl font-semibold">Counter: {count}</h2>
        <div className="flex gap-2 mt-4">
          <button onClick={() => setCount(count + 1)} className="px-4 py-2 bg-green-500 text-red-500 rounded-lg">+1</button>
          <button onClick={() => setCount(count - 1)} className="px-4 py-2 bg-red-500 text-white rounded-lg">-1</button>
          <button onClick={() => setCount(0)} className="px-4 py-2 bg-gray-500 text-white rounded-lg">Reset</button>
          <button onClick={() => setCount(count * 2)} className="px-4 py-2 bg-blue-500 text-white rounded-lg">x2</button>
          <button onClick={() => setCount(Math.floor(count / 2))} className="px-4 py-2 bg-purple-500 text-white rounded-lg">½</button>
        </div>
      </div>

      {/* API Data Section */}
      <div className="mt-8 w-96 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold">Fetched Users 👥</h2>
        {loading ? (
          <p className="text-blue-500">Loading...</p>
        ) : (
          <ul className="mt-2">
            {users.slice(0, 5).map((user) => (
              <li key={user.id} className="border-b py-2">
                {user.name} - {user.email}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;