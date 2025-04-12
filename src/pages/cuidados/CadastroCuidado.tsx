import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Cuidado, FREQUENCIAS } from '../../types';
import { ArrowLeft } from 'lucide-react';

function CadastroCuidado() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdicao = !!id;

  const [cuidado, setCuidado] = useState<Cuidado>({
    nome: '',
    descricao: '',
    frequencia: 'diária'
  });

  const [errors, setErrors] = useState<Partial<Cuidado>>({});

  const validateForm = () => {
    const newErrors: Partial<Cuidado> = {};
    
    if (!cuidado.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório';
    }
    
    if (!cuidado.descricao.trim()) {
      newErrors.descricao = 'Descrição é obrigatória';
    }
    
    if (!cuidado.frequencia) {
      newErrors.frequencia = 'Frequência é obrigatória';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Por favor, corrija os erros no formulário');
      return;
    }

    try {
      // TODO: Implementar chamada à API
      toast.success(isEdicao ? 'Cuidado atualizado com sucesso!' : 'Cuidado cadastrado com sucesso!');
      navigate('/cuidados');
    } catch (error) {
      toast.error('Erro ao salvar cuidado');
      console.error(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCuidado(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof Cuidado]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <button
          onClick={() => navigate('/cuidados')}
          className="text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-3xl font-bold text-gray-900">
          {isEdicao ? 'Editar Cuidado' : 'Cadastrar Cuidado'}
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6 space-y-6">
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
              Nome do Cuidado
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={cuidado.nome}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md shadow-sm ${
                errors.nome ? 'border-red-300' : 'border-gray-300'
              } focus:border-green-500 focus:ring-green-500`}
            />
            {errors.nome && (
              <p className="mt-1 text-sm text-red-600">{errors.nome}</p>
            )}
          </div>

          <div>
            <label htmlFor="frequencia" className="block text-sm font-medium text-gray-700">
              Frequência
            </label>
            <select
              id="frequencia"
              name="frequencia"
              value={cuidado.frequencia}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md shadow-sm ${
                errors.frequencia ? 'border-red-300' : 'border-gray-300'
              } focus:border-green-500 focus:ring-green-500`}
            >
              {FREQUENCIAS.map(freq => (
                <option key={freq} value={freq}>{freq}</option>
              ))}
            </select>
            {errors.frequencia && (
              <p className="mt-1 text-sm text-red-600">{errors.frequencia}</p>
            )}
          </div>

          <div>
            <label htmlFor="descricao" className="block text-sm font-medium text-gray-700">
              Descrição
            </label>
            <textarea
              id="descricao"
              name="descricao"
              value={cuidado.descricao}
              onChange={handleChange}
              rows={4}
              className={`mt-1 block w-full rounded-md shadow-sm ${
                errors.descricao ? 'border-red-300' : 'border-gray-300'
              } focus:border-green-500 focus:ring-green-500`}
            />
            {errors.descricao && (
              <p className="mt-1 text-sm text-red-600">{errors.descricao}</p>
            )}
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate('/cuidados')}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            {isEdicao ? 'Atualizar' : 'Cadastrar'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CadastroCuidado;