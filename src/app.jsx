import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import TaskManager from './pages/TaskManager';
import ApiDemo from './pages/ApiDemo';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TaskManager />} />
        <Route path="/api" element={<ApiDemo />} />
      </Routes>
    </Layout>
  );
}

export default App;