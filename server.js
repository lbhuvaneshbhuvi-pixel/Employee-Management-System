ServiceWorkerRegistration.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();
const port = 3000;
const pool =new pool({user: 'postgres', host: 'localhost', database: 'employee management system', password: 'bhuvi', port: 5432});
app.use(cors());
app.use(bodyParser.json());
app.post('/api/register', async (req, res) => {
  const { name, email, password } = req.body;
    try {
    const result = await pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *', [name, email, password]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
    try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password]);
    if (result.rows.length > 0) {
      res.status(200).json(result.rows[0]);
    } else {
        res.status(401).json({ error: 'Invalid email or password' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


