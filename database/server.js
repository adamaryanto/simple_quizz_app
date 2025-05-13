import express from 'express'
import cors from 'cors';
import bodyParser from 'body-parser';
import mysql from 'mysql2';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Koneksi ke MySQL (gunakan setting Laragon)
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // default Laragon biasanya kosong
  database: 'auth_db'
});

db.connect((err) => {
  if (err) {
    console.error('Koneksi ke database gagal:', err);
  } else {
    console.log('Terhubung ke database MySQL');
  }
});

// Endpoint registrasi
app.post('/registrasi', (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Lengkapi semua data' });
  }

  const checkQuery = 'SELECT * FROM users WHERE email = ?';
  db.query(checkQuery, [email], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error checking user' });
    }

    if (results.length > 0) {
      return res.status(409).json({ message: 'Email sudah terdaftar' });
    }

    const insertQuery = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.query(insertQuery, [name, email, password], (err) => {
      if (err) {
        return res.status(500).json({ message: 'Gagal menyimpan data' });
      }

      return res.status(201).json({ message: 'Registrasi berhasil' });
    });
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email dan password wajib diisi' });
  }

  const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(query, [email, password], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Terjadi kesalahan server' });
    }

    if (results.length > 0) {
      return res.status(200).json({ message: 'Login berhasil', user: results[0] });
    } else {
      return res.status(401).json({ message: 'Email atau password salah' });
    }
  });
});


app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
