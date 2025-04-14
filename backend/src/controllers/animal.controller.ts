import { Request, Response } from 'express';
import { db } from '../database';
import { ResultSetHeader } from 'mysql2';

export const criarAnimal = (req: Request, res: Response) => {
  const { nome, especie } = req.body;

  db.query<ResultSetHeader>(
    'INSERT INTO animais (nome, especie) VALUES (?, ?)',
    [nome, especie],
    (err, results) => {
      if (err) return res.status(500).json({ erro: err });
      res.status(201).json({ id: results.insertId, nome, especie });
    }
  );
};

export const listarAnimais = (req: Request, res: Response) => {
  db.query('SELECT * FROM animais', (err, results) => {
    if (err) return res.status(500).json({ erro: err });
    res.json(results);
  });
};
