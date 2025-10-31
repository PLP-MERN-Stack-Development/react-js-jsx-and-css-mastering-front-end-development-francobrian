import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  return (
    <nav className="bg-white dark:bg-gray-900 shadow p-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">TaskApp</Link>
        <div className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/tasks">Tasks</Link>
          <Link to="/api">API Demo</Link>
          <button onClick={toggleTheme}>
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}