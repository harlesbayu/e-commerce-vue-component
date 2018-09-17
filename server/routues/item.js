const routes = require('express').Router()
const { isAdmin } = require('../middleware')
const { findByName, findAll, filterByCategory, create, update, remove } = require('../controllers/itemController')

routes.get('/', findAll)
routes.get('/categories/:id', filterByCategory)
routes.post('/create', create)
routes.put('/update/:id', update)
routes.delete('/remove/:id', remove)
routes.get('/findByName', findByName)

module.exports = routes