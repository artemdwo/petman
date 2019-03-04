const PET = {
  add: {
    path: '/pet',
    method: 'POST'
  },
  update: {
    path: '/pet',
    method: 'PUT'
  },
  fingByStatus: {
    path: '/pet/findByStatus?status=$status$',
    method: 'GET'
  },
  findById: {
    path: '/pet/$id$',
    method: 'GET'
  },
  formUpdateById: {
    path: '/pet/$id$',
    method: 'POST'
  },
  delete: {
    path: '/pet/$id$',
    method: 'DELETE'
  },
  uploadImage: {
    path: '/pet/$id$/uploadImage',
    method: 'POST'
  }
}

module.exports = PET
