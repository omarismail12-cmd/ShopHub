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
    <main className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {cards.map((card, index) => (
        <div
          key={index}
          onClick={() => navigate(card.link)}
          className="cursor-pointer bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-200"
        >
            <div className='flex items-center justify-center flex-col text-center'>
          <div className="mb-4">{card.icon}</div>
          <h2 className="text-xl font-semibold">{card.title}</h2>
          <p className="text-gray-500">{card.description}</p>
        </div>
        </div>
      ))}
    </div>
    </main>
  );
}
