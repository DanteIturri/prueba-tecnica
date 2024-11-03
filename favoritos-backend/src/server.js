import express from 'express';
import mysql from "mysql2";
import cors from 'cors';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'rick-and-morty-api',
  port: 3308,
  multipleStatements: true 
});

db.connect((err) => {
    if (err) {
      console.error('Error al conectar a MySQL:', err);
      return;
    }
    console.log('Conectado a la base de datos MySQL');
});

const app = express();
app	.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/api/characters', (req, res) => {
	db.query('SELECT * FROM characters', (err, results) => {
		if (err) throw err;
		res.json(results);
	});
});
// En tu archivo server.js
app.post('/api/characters', async (req, res) => {
    const { id, name, status, image, species } = req.body;

    const sql = `
        INSERT INTO favorites (id, name, status, image, species)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(sql, [id, name, status, image, species], (err, result) => {
        if (err) {
            console.error("Error al insertar el favorito:", err);
            return res.status(500).json({ message: 'Error al guardar en la base de datos' });
        }
        res.status(200).json({ message: 'Favorito guardado exitosamente' });
    });
});


app.listen(5000, () => {
	console.log('Server is running on port 3000');
});