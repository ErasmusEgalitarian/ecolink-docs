const express = require('express');
const app = express();
const { globalLimiter, authLimiter } = require('./middleware/rateLimiter');

app.use(express.json());

// Global limit
app.use(globalLimiter);

app.use('/api/auth', authLimiter);

app.get('/api/public', (req, res) => res.send('Global Route (100 req/15min)'));
app.post('/api/auth/login', (req, res) => res.send('Auth Route (10 req/15min)'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on ${PORT}`));