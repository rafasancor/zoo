import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Trash2, Edit } from 'lucide-react';
import { Cuidado } from '../../types';
import { toast } from 'react-hot-toast';

function ListaCuidados() {
  const [cuidados, setCuidados] = useState<Cuidado[]>([]);

  const handleDelete = async (id: number) => {
    if (window.confirm('Tem certeza que deseja excluir este cuidado?')) {
      try {
        // TODO: Implementar chamada à API
        toast.success('Cuidado excluído com sucesso!');
      } catch (error) {
        toast.error('Erro ao excluir cuidado');
        console.error(error);
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Lista de Cuidados</h1>
        <Link
          to="/cuidados/novo"
          className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
        >
          <Plus size={20} />
          <span>Novo Cuidado</span>
        </Link>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nome
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Descrição
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Frequência
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {cuidados.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                    Nenhum cuidado cadastrado
                  </td>
                </tr>
              ) : (
                cuidados.map(cuidado => (
                  <tr key={cuidado.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{cuidado.nome}</td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 line-clamp-2">{cuidado.descricao}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {cuidado.frequencia}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="flex justify-end space-x-2">
                        <Link
                          to={`/cuidados/editar/${cuidado.id}`}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          <Edit size={20} />
                        </Link>
                        <button
                          onClick={() => cuidado.id && handleDelete(cuidado.id)}
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

export default ListaCuidados;