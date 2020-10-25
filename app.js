const express = require('express')
const app = express()
const authRoutes = require('./routes/auth')
const analyticsRoutes = require('./routes/analytics')
const categoryroutes = require('./routes/category')
const orderRoutes = require('./routes/order')
const positionRoutes = require('./routes/position')



app.use('/api/auth', authRoutes)
app.use('/api/analytics', analyticsRoutes)
app.use('/api/category', categoryroutes)
app.use('/api/order', orderRoutes)
app.use('/api/position', positionRoutes)

module.exports = app