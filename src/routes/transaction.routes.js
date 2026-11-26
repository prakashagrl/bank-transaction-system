const express = require('express')
const authMiddleware = require('../middleware/auth.middleware')

const router = express.Router()

/**
 * - POST /api/transactions
 * - Create a new transaction
 */

router.post('/', authMiddleware.authMiddleware)

module.exports = router