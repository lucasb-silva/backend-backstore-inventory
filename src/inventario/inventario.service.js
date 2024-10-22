const { ObjectId } = require('mongodb')
const { getDatabase } = require('../db/database-connection')

function getCollection() {
  return getDatabase().collection('produto')
}

function readAll() {
  // Acessamos a lista de itens na collection do MongoDB
  return getCollection().find().toArray()
}

/**
 * 
 * @param {string} id 
 * @returns 
 */
function readById(id) {
  // Retorna o item na collection usando o ID
  return getCollection().findOne({ _id: new ObjectId(id) })
  
}

function create() {

}

function updateByID() {

}

function deleteByID() {
  
}

module.exports = {
  readAll,
  readById,
  create,
  updateByID,
  deleteByID
}