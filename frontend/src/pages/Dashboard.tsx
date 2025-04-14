import React from 'react';
import { Link } from 'react-router-dom';
import { PawPrint, Activity, Plus } from 'lucide-react';

function Dashboard() {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Bem-vindo ao ZooManager</h1>
        <p className="mt-2 text-gray-600">Sistema de Gerenciamento de Zoológico do CIEE</p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <PawPrint className="text-green-600" size={24} />
              <h2 className="text-xl font-semibold">Animais</h2>
            </div>
            <Link
              to="/animais/novo"
              className="flex items-center space-x-1 bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              <Plus size={18} />
              <span>Novo Animal</span>
            </Link>
          </div>
          <p className="text-gray-600 mb-4">
            Gerencie o cadastro de animais do zoológico, incluindo informações como espécie,
            habitat e país de origem.
          </p>
          <Link
            to="/animais"
            className="text-green-600 hover:text-green-700 font-medium"
          >
            Ver todos os animais →
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Activity className="text-green-600" size={24} />
              <h2 className="text-xl font-semibold">Cuidados</h2>
            </div>
            <Link
              to="/cuidados/novo"
              className="flex items-center space-x-1 bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              <Plus size={18} />
              <span>Novo Cuidado</span>
            </Link>
          </div>
          <p className="text-gray-600 mb-4">
            Cadastre e gerencie os cuidados necessários para os animais, como alimentação,
            exames veterinários e vacinação.
          </p>
          <Link
            to="/cuidados"
            className="text-green-600 hover:text-green-700 font-medium"
          >
            Ver todos os cuidados →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;