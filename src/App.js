import Dashboard from "./components/Dashboard/Dashboard";
import Layout from "./components/Layout/Layout";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import tasksData from "./data/tasks.json";

function App() {
  const { taskSlug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const currentTask = tasksData.find((obj) => obj.slug === taskSlug);
    if (currentTask.status === "blocked") {
      navigate(`/${tasksData[0].slug}`);
    }
  }, [navigate, taskSlug]);

  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
}

export default App;
