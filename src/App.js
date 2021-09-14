import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

import About from "./components/About";

function App() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTask();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  const fetchTask = async () => {
    const result = await fetch("http://localhost:8000/tasks");
    const data = await result.json();

    return data;
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:8000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = async (task) => {
    const updateTask = { ...task, reminder: !task.reminder };

    const result = await fetch(`http://localhost:8000/tasks/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateTask),
    });
    const data = await result.json();

    setTasks(
      tasks.map((item) =>
        item.id === task.id ? { ...item, reminder: data.reminder } : item
      )
    );
  };

  const addTask = async (task) => {
    const result = await fetch("http://localhost:8000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await result.json();

    setTasks([...tasks, data]);
    //  const id = Math.floor(Math.random()*10000)+1;
    //  const newTask= {id,...task};
    //  setTasks([...tasks,newTask]);
  };
  return (
    <Router>
      <div className="container">
      <Header
                onAdd={() => setShowAddForm(!showAddForm)}
                showAddForm={showAddForm}
                title="TODO App"
              />


        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {showAddForm && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  onToggle={toggleReminder}
                  onDelete={deleteTask}
                  tasks={tasks}
                />
              ) : (
                "No More Tasks"
              )}
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
