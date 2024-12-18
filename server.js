const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: 'edakocaman',
    host: 'localhost',
    database: 'MCSS',
    password: '591122',
    port: 5432,
});

const testConnection = async () => {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('PostgreSQL connection successful:', res.rows[0]);
  } catch (err) {
    console.error('PostgreSQL connection failed:', err);
  }
};
testConnection();

// Test endpoint
app.get('/', (req, res) => {
    res.send('Backend is working!');
});

app.get('/api/estates', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM estates');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching estates:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Similarly, add other endpoints to fetch data from other tables in your database
app.get('/api/buildings', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM buildings');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching buildings:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/flats', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM flats');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching flats:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/residents', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM residents');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching residents:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/monthlycharges', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM monthly_charges');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching monthly charges:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/payments', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM payments');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching payments:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
