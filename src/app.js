const express = require('express')
const cookieParser = require('cookie-parser')



const app = express()


app.use(express.json())
app.use(cookieParser())

/**
 * - routes required
 */
const authRouter = require('../src/routes/auth.routes')
const accountRouter = require("../src/routes/account.routes")
const transactionRoutes = require('../src/routes/transaction.routes')



/**
 * - use routes
 */

app.get("/", (req, res) => {
    res.send("Ledger Service is up and running")
})

app.use('/api/auth', authRouter)
app.use('/api/accounts', accountRouter)
app.use('/api/transactions', transactionRoutes)



module.exports = app