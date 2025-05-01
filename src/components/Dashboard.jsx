import { CheckSquare, Package } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  const cards = [
    {
      title: 'Task Manager',
      description: 'Manage your daily tasks and stay organized',
      icon: <CheckSquare size={48} className="text-indigo-500" />,
      link: '/tasks'
    },
    {
      title: 'Products',
      description: 'Browse our collection of amazing products',
      icon: <Package size={48} className="text-indigo-500" />,
      link: '/products'
    },
  ];

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          onClick={() => navigate(card.link)}
          className="cursor-pointer bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
        >
          <div className="mb-4">{card.icon}</div>
          <h2 className="text-xl font-semibold">{card.title}</h2>
          <p className="text-gray-500">{card.description}</p>
        </div>
      ))}
    </div>
  );
}
