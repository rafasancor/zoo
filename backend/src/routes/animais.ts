import { Router } from 'express';
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  database: process.env.DB_NAME || 'zoo-management-system',
  password: process.env.DB_PASSWORD || '0',
  port: Number(process.env.DB_PORT) || 3306,
});

const router = Router();

router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM animais');
    // console.log('Animais encontrados no banco de dados:', rows);
    res.json(rows);
  } catch (error) {
    console.error('Erro ao listar animais:', error);
    res.status(500).json({ error: 'Erro ao listar animais' });
  }
});

export default router;