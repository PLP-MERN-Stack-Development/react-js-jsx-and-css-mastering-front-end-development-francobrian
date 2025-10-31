import { Link } from 'react-router-dom';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-4xl font-bold text-center">Welcome to TaskApp</h1>
      <Card>
        <p className="mb-4">A React app demonstrating modern development practices.</p>
        <div className="flex gap-4">
          <Link to="/tasks"><Button>Task Manager</Button></Link>
          <Link to="/api"><Button variant="secondary">API Demo</Button></Link>
        </div>
      </Card>
    </div>
  );
}
