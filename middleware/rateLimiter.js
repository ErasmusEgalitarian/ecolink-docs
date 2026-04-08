const rateLimit = require('express-rate-limit');

const commonConfig = {
    windowMs: 15 * 60 * 1000, // 15 minutos
    message: { message: "Too many requests, please try again later" },
    standardHeaders: true, // Retorna RateLimit-Limit, etc.
    legacyHeaders: false,
    skip: () => process.env.NODE_ENV === 'test', // Desabilita em testes
};

// Limiter Global: 100 req / 15 min
const globalLimiter = rateLimit({
    ...commonConfig,
    max: 100,
});

// Limiter de Auth: 10 req / 15 min
const authLimiter = rateLimit({
    ...commonConfig,
    max: 10,
});

module.exports = { globalLimiter, authLimiter };