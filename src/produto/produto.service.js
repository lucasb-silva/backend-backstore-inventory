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

function create(novoItem) {
  // Adicionamos na collection
  return getCollection().insertOne(novoItem)

}

/**
 * 
 * @param {string} id 
 * @returns 
 */
function updateByID(id, novoItem) {
  // Atualizamos o item na collection pelo ID
  return getCollection().updateOne(
    { _id: new ObjectId(id)},
    { $set: novoItem }
  )
}

/**
 * 
 * @param {string} id 
 * @returns 
 */
function deleteByID(id) {
  // Removemos o item na collection usando o ID
  return getCollection().deleteOne({ _id: new ObjectId(id) })
}

module.exports = {
  readAll,
  readById,
  create,
  updateByID,
  deleteByID
}