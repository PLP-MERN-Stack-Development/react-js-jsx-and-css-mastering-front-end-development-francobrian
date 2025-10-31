import { useState, useEffect } from 'react';
import { Search, Loader } from 'lucide-react';
import Card from '../components/UI/Card';

export default function ApiDemo() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">API Demo</h1>
      
      <Card>
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search users..."
            className="w-full pl-10 p-2 border rounded"
          />
        </div>
      </Card>

      {loading && <div className="flex justify-center"><Loader className="animate-spin" /></div>}
      
      <div className="grid gap-4 md:grid-cols-2">
        {filteredUsers.map(user => (
          <Card key={user.id}>
            <h3 className="font-bold">{user.name}</h3>
            <p className="text-gray-600">{user.email}</p>
            <p>{user.company?.name}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}