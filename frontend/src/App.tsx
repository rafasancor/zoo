import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import ListaAnimais from './pages/animais/ListaAnimais';
import CadastroAnimal from './pages/animais/CadastroAnimal';
import ListaCuidados from './pages/cuidados/ListaCuidados';
import CadastroCuidado from './pages/cuidados/CadastroCuidado';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/animais" element={<ListaAnimais />} />
            <Route path="/animais/novo" element={<CadastroAnimal />} />
            <Route path="/animais/editar/:id" element={<CadastroAnimal />} />
            <Route path="/cuidados" element={<ListaCuidados />} />
            <Route path="/cuidados/novo" element={<CadastroCuidado />} />
            <Route path="/cuidados/editar/:id" element={<CadastroCuidado />} />
          </Routes>
        </main>
        <Toaster position="top-right" />
      </div>
    </BrowserRouter>
  );
}

export default App;