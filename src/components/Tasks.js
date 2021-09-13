import React from "react";

const tasksList = [
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
];
const Tasks = () => {
  return <>
  {tasksList.map((task)=>(
  <h3 key={task.id}>{task.text}</h3>
  ))}
  </>;
};

export default Tasks;
