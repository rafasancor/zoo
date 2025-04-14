import { Router, Request, Response } from 'express';
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  database: process.env.DB_NAME || 'zoo-management-system',
  password: process.env.DB_PASSWORD || '0',
  port: Number(process.env.DB_PORT) || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const router = Router();

interface Animal {
  nome: string;
  descricao: string;
  data_nascimento: string | Date;
  especie: string;
  habitat: string;
  pais_origem: string;
}

// router.post('/', async (req: Request, res: Response) => {
//   const { nome, descricao, data_nascimento, especie, habitat, pais_origem }: Animal = req.body;

//   // Validação dos campos
//   if (!nome || !descricao || !data_nascimento || !especie || !habitat || !pais_origem) {
//     return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
//   }

//   try {
//     const connection = await pool.getConnection();
    
//     try {
//       const [result] = await connection.query(
//         'INSERT INTO animais (nome, descricao, data_nascimento, especie, habitat, pais_origem) VALUES (?, ?, ?, ?, ?, ?)',
//         [nome, descricao, data_nascimento, especie, habitat, pais_origem]
//       );

//       // Type assertion para o resultado
//       const insertResult = result as mysql.OkPacket;
      
//       if (insertResult.affectedRows > 0) {
//         return res.status(201).json({ 
//           message: 'Animal cadastrado com sucesso!',
//           id: insertResult.insertId 
//         });
//       } else {
//         return res.status(500).json({ error: 'Nenhum registro foi inserido' });
//       }
//     } finally {
//       connection.release();
//     }
//   } catch (error) {
//     console.error('Database error:', error);
    
//     // Verifica se o erro é de duplicidade (por exemplo, animal com mesmo nome)
//     if (error instanceof Error && 'code' in error && error.code === 'ER_DUP_ENTRY') {
//       return res.status(409).json({ error: 'Já existe um animal com este nome' });
//     }
    
//     return res.status(500).json({ 
//       error: 'Erro ao cadastrar animal',
//       details: error instanceof Error ? error.message : 'Erro desconhecido'
//     });
//   }
// });

export default router;