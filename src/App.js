import "./App.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/main/Main";
import { useState, useEffect } from "react";
import { getLocalTasks, setLocalTasks } from "./data";

function App() {
  const [tasks, setTasks] = useState(getLocalTasks() || []);

  useEffect(() => {
		setLocalTasks(tasks)
	}, [tasks])

  return (
    <Router>
        <Header />
        <Main tasks={tasks} setTasks={setTasks} />
        <Footer tasks={tasks} />
    </Router>
  );
}

export default App;
