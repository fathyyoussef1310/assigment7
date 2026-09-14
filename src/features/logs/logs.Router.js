const {Router} = require('express')
const logsRouter = new Router()
const logController = require('./logs.contoller')
logsRouter.post('/capped' ,logController.createLogs ),
logsRouter.post('/' ,logController.insertLog)

module.exports = logsRouter