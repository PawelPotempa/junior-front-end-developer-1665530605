import Dashboard from "./components/Dashboard/Dashboard";
import Layout from "./components/Layout/Layout";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import tasksData from "./data/tasks.json";
import { TasksContext } from "./contexts/TasksContext";

function App() {
  const { taskSlug } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(tasksData);

  useEffect(() => {
    const currentTask = data.find((obj) => obj.slug === taskSlug);
    if (currentTask?.status === "blocked" || currentTask === undefined) {
      navigate(`/${data[0].slug}`);
    }
  }, [data, navigate, taskSlug]);

  return (
    <Layout>
      <TasksContext.Provider value={{ data, setData }}>
        <Dashboard />
      </TasksContext.Provider>
    </Layout>
  );
}

export default App;
