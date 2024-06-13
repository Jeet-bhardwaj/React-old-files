import MyTodo from "./component/MyTodo";
import EnterTodo from "./component/EnterTodo";
import ListTodo from "./component/ListTodo";
import "./App.css";

function app() {
  const works = [
    {
      id: 1,
      workTodo: "GO GYM",
      date: "1 / 12 / 2021",
    },
    {
      id: 2,
      workTodo: "Learn react",
      date: "23 / 2 / 2024",
    },
    {
      id: 3,
      workTodo: "GO Colloge",
      date: "23 / 2 / 2024",
    },
    {
      id: 4,
      workTodo: "Come back to home and take reast ",
      date: "23 / 2 / 2024",
    },
  ];
  return (
    <div>
      <MyTodo></MyTodo>
      <EnterTodo></EnterTodo>
      <div className="todo_contenar">

        {works.map(items =>(<ListTodo ittodo={items.workTodo} dttodo={items.date}></ListTodo>))}
        
      </div>
    </div>
  );
}

export default app;
