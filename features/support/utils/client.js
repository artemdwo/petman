const client = require('supertest')

function run(method, baseUrl, endpoint, headers = {}, body = {}){
  switch(method){
  case 'GET':
    return get(baseUrl, endpoint, headers)
  case 'PUT':
    return put(baseUrl, endpoint, headers, body)
  case 'DELETE':
    return remove(baseUrl, endpoint, headers)
  case 'POST':
    return post(baseUrl, endpoint, headers, body)
  default:
    throw new Error(method + ' is not supported')
  }
}

function get(baseUrl, path, headers){
  return client(baseUrl)
    .get(path)
    .set(headers)
}

function post(baseUrl, path, headers, body){
  return client(baseUrl)
    .post(path)
    .set(headers)
    .send(body)
}

function put(baseUrl, path, headers, body){
  return client(baseUrl)
    .put(path)
    .set(headers)
    .send(body)
}

function remove(baseUrl, path, headers, statusCode){
  // TBC
}

module.exports = {
  run
}
