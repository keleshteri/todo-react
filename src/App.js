import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "meet",
      day: "today 2021",
      reminder: true,
    },
    {
      id: 2,
      text: "react project",
      day: "today 2021",
      reminder: false,
    },
    {
      id: 3,
      text: "vue project",
      day: "today 2021",
      reminder: false,
    },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const toggleReminder = (id) => {
      console.log(id);
     setTasks(
         tasks.map(
             (task)=> task.id === id? { ...task, reminder:!task.reminder}:task
            ),
             
         );
  };
  return (
    <div className="container">
      <Header title="TODO App" />
      {tasks.length > 0 ? (
        <Tasks onToggle={toggleReminder} onDelete={deleteTask} tasks={tasks} />
      ) : (
        "No More Tasks"
      )}
    </div>
  );
}

export default App;
