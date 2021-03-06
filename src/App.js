import React, { useEffect } from "react";
import SimpleCounter from "./views/SimpleCounter";
import TodoList from "./views/TodoList";
import NameCard from "./views/NameCard";

function App() {
  useEffect(() => {
    return () => {
      console.log("App, useEffect called:");
    };
  }, []);

  return (
    <div className="App">
      <main className="container">
        <SimpleCounter />

        <div className="divider"></div>

        <NameCard />

        <div className="divider"></div>

        <TodoList />
      </main>
    </div>
  );
}

export default App;
