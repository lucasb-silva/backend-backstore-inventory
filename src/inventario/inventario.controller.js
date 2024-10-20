function readAll(req, res) {
  res.send('Read All')
}

function readById(req, res) {
  res.send('Read By ID')
}

function create(req, res) {
  res.send('Create')
}

function updateByID(req, res) {
  res.send('Update By ID')
}

function deleteByID(req, res) {
  res.send('Delete By ID')
}

module.exports = {
  readAll,
  readById,
  create,
  updateByID,
  deleteByID
}