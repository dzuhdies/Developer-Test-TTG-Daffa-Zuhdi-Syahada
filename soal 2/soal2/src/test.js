import mysql from 'mysql2/promise';
import 'dotenv/config';

async function main() {
  try {
    console.log('Trying connect to DB:', {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      db: process.env.DB_NAME,
    });

    const conn = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT || 3306),
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });

    const [rows] = await conn.query('SELECT 1 AS ok');
    console.log('DB OK:', rows);
    await conn.end();
  } catch (err) {
    console.error('DB ERROR:', err.code, err.message);
    if (err.sqlMessage) console.error('SQL:', err.sqlMessage);
  }
}

main();
