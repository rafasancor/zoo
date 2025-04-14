import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Animal, ESPECIES, HABITATS, PAISES } from '../../types';
import { ArrowLeft } from 'lucide-react';

function CadastroAnimal() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdicao = !!id;

  const [animal, setAnimal] = useState<Animal>({
    nome: '',
    descricao: '',
    dataNascimento: '',
    especie: '',
    habitat: '',
    paisOrigem: ''
  });

  const [errors, setErrors] = useState<Partial<Animal>>({});

  const validateForm = () => {
    const newErrors: Partial<Animal> = {};
    
    if (!animal.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório';
    }
    
    if (!animal.descricao.trim()) {
      newErrors.descricao = 'Descrição é obrigatória';
    }
    
    if (!animal.dataNascimento) {
      newErrors.dataNascimento = 'Data de nascimento é obrigatória';
    } else {
      const dataNascimento = new Date(animal.dataNascimento);
      if (dataNascimento > new Date()) {
        newErrors.dataNascimento = 'Data de nascimento não pode ser futura';
      }
    }
    
    if (!animal.especie) {
      newErrors.especie = 'Espécie é obrigatória';
    }
    
    if (!animal.habitat) {
      newErrors.habitat = 'Habitat é obrigatório';
    }
    
    if (!animal.paisOrigem) {
      newErrors.paisOrigem = 'País de origem é obrigatório';
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
      console.log('Enviando dados para o backend:', animal);
  
      const response = await fetch('http://localhost:3000/api/animais', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(animal),
      });
  
      if (!response.ok) {
        throw new Error('Erro ao cadastrar animal');
      }
  
      toast.success(isEdicao ? 'Animal atualizado com sucesso!' : 'Animal cadastrado com sucesso!');
      navigate('/animais');
    } catch (error) {
      toast.error('Erro ao salvar animal');
      console.error(error);
    }
  };
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAnimal(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof Animal]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <button
          onClick={() => navigate('/animais')}
          className="text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-3xl font-bold text-gray-900">
          {isEdicao ? 'Editar Animal' : 'Cadastrar Animal'}
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={animal.nome}
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
            <label htmlFor="dataNascimento" className="block text-sm font-medium text-gray-700">
              Data de Nascimento
            </label>
            <input
              type="date"
              id="dataNascimento"
              name="dataNascimento"
              value={animal.dataNascimento}
              onChange={handleChange}
              max={new Date().toISOString().split('T')[0]}
              className={`mt-1 block w-full rounded-md shadow-sm ${
                errors.dataNascimento ? 'border-red-300' : 'border-gray-300'
              } focus:border-green-500 focus:ring-green-500`}
            />
            {errors.dataNascimento && (
              <p className="mt-1 text-sm text-red-600">{errors.dataNascimento}</p>
            )}
          </div>

          <div>
            <label htmlFor="especie" className="block text-sm font-medium text-gray-700">
              Espécie
            </label>
            <select
              id="especie"
              name="especie"
              value={animal.especie}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md shadow-sm ${
                errors.especie ? 'border-red-300' : 'border-gray-300'
              } focus:border-green-500 focus:ring-green-500`}
            >
              <option value="">Selecione uma espécie</option>
              {ESPECIES.map(especie => (
                <option key={especie} value={especie}>{especie}</option>
              ))}
            </select>
            {errors.especie && (
              <p className="mt-1 text-sm text-red-600">{errors.especie}</p>
            )}
          </div>

          <div>
            <label htmlFor="habitat" className="block text-sm font-medium text-gray-700">
              Habitat
            </label>
            <select
              id="habitat"
              name="habitat"
              value={animal.habitat}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md shadow-sm ${
                errors.habitat ? 'border-red-300' : 'border-gray-300'
              } focus:border-green-500 focus:ring-green-500`}
            >
              <option value="">Selecione um habitat</option>
              {HABITATS.map(habitat => (
                <option key={habitat} value={habitat}>{habitat}</option>
              ))}
            </select>
            {errors.habitat && (
              <p className="mt-1 text-sm text-red-600">{errors.habitat}</p>
            )}
          </div>

          <div>
            <label htmlFor="paisOrigem" className="block text-sm font-medium text-gray-700">
              País de Origem
            </label>
            <select
              id="paisOrigem"
              name="paisOrigem"
              value={animal.paisOrigem}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md shadow-sm ${
                errors.paisOrigem ? 'border-red-300' : 'border-gray-300'
              } focus:border-green-500 focus:ring-green-500`}
            >
              <option value="">Selecione um país</option>
              {PAISES.map(pais => (
                <option key={pais} value={pais}>{pais}</option>
              ))}
            </select>
            {errors.paisOrigem && (
              <p className="mt-1 text-sm text-red-600">{errors.paisOrigem}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <label htmlFor="descricao" className="block text-sm font-medium text-gray-700">
              Descrição
            </label>
            <textarea
              id="descricao"
              name="descricao"
              value={animal.descricao}
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
            onClick={() => navigate('/animais')}
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

export default CadastroAnimal;