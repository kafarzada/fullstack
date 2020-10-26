const express = require('express')
const router = express.Router()
const controller = require('../controllers/analytics')
const passport = require('passport')

router.get('/overview', passport.authenticate('jwt', {session: false}), controller.overview)
router.get('/analytcis', passport.authenticate('jwt', {session: false}), controller.analytic)

module.exports = router