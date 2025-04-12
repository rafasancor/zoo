import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search, Trash2, Edit } from 'lucide-react';
import { Animal, ESPECIES, HABITATS, PAISES } from '../../types';
import { toast } from 'react-hot-toast';

function ListaAnimais() {
  const [animais, setAnimais] = useState<Animal[]>([]);
  const [filtros, setFiltros] = useState({
    especie: '',
    habitat: '',
    paisOrigem: ''
  });

  const handleDelete = async (id: number) => {
    if (window.confirm('Tem certeza que deseja excluir este animal?')) {
      try {
        // TODO: Implementar chamada à API
        toast.success('Animal excluído com sucesso!');
      } catch (error) {
        toast.error('Erro ao excluir animal');
        console.error(error);
      }
    }
  };

  const handleFiltroChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFiltros(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Lista de Animais</h1>
        <Link
          to="/animais/novo"
          className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
        >
          <Plus size={20} />
          <span>Novo Animal</span>
        </Link>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <select
            name="especie"
            value={filtros.especie}
            onChange={handleFiltroChange}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          >
            <option value="">Todas as Espécies</option>
            {ESPECIES.map(especie => (
              <option key={especie} value={especie}>{especie}</option>
            ))}
          </select>

          <select
            name="habitat"
            value={filtros.habitat}
            onChange={handleFiltroChange}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          >
            <option value="">Todos os Habitats</option>
            {HABITATS.map(habitat => (
              <option key={habitat} value={habitat}>{habitat}</option>
            ))}
          </select>

          <select
            name="paisOrigem"
            value={filtros.paisOrigem}
            onChange={handleFiltroChange}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          >
            <option value="">Todos os Países</option>
            {PAISES.map(pais => (
              <option key={pais} value={pais}>{pais}</option>
            ))}
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nome
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Espécie
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Habitat
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  País de Origem
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Data de Nascimento
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {animais.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                    Nenhum animal cadastrado
                  </td>
                </tr>
              ) : (
                animais.map(animal => (
                  <tr key={animal.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{animal.nome}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{animal.especie}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{animal.habitat}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{animal.paisOrigem}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {new Date(animal.dataNascimento).toLocaleDateString('pt-BR')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="flex justify-end space-x-2">
                        <Link
                          to={`/animais/editar/${animal.id}`}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          <Edit size={20} />
                        </Link>
                        <button
                          onClick={() => animal.id && handleDelete(animal.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListaAnimais;