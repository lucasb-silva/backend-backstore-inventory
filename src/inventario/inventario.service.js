const { getDatabase } = require("../db/database-connection")

function getCollection() {
  return getDatabase().collection('produto')
}

function readAll() {
  return getCollection().find().toArray()
}

function readById() {
  
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