const { Given, When, Then } = require('cucumber')
const expect = require('chai').expect

// Request URL configuration parts
const baseUrl = 'https://petstore.swagger.io'
const version = 'v2'

// Request Headers 
const headers = require('../support/fixtures/headers.json')

// Endpoints list
const pet = require('../support/enum/pet')

// Utils
const client = require('../support/utils/client')
const fixture = require('../support/utils/fixture')

/** 
 * Global-ish variables to share response details
 * across steps for validation purposes
*/ 
let globResponse
let globResponseStatus
let globExpected

Given(/^The service is available$/, (done) => {
  client.run('GET', baseUrl, '/', headers).then(res => {
    expect(res.status).to.be.equal(200)
    done()
  })
  
})

When(/^I (add|update|delete) a pet (to|in|from) the database with "([a-zA-Z\d\s]+)"$/, (action, sep, fixture_name, done) => {
  
  const url = baseUrl + '/' + version

  globExpected = fixture_name
  let body = fixture.get(fixture_name)
 
  switch (action){
  case 'add':
    client.run(pet.add.method, url, pet.add.path, headers, body).then((res, err) => {
      if (!err) {
        globResponseStatus = res.status
        globResponse = res.body
        done()
      } else {
        done(err)
      }
    })
    break
  case 'update':
    client.run(pet.update.method, url, pet.update.path, headers, body).then((res, err) => {
      if (!err) {
        globResponseStatus = res.status
        globResponse = res.body
        done()
      } else {
        done(err)
      }
    })
    break
  case 'delete':
    client.run(pet.delete.method, url, pet.delete.path, headers).then((res, err) => {
      if (!err) {
        globResponseStatus = res.status
        globResponse = res.body
        done()
      } else {
        done(err)
      }
    })
    break
  }
})

Then(/^I ensure the data stored is correct$/, (done) => {
  let expected = fixture.get(globExpected)
  expect(JSON.stringify(globResponse)).to.be.equal(JSON.stringify(expected))
  done()
})

Then(/^Confirm the status code is "(\d+)"$/, (statusCode, done) => {
  expect(globResponseStatus).to.be.equal(parseInt(statusCode))
  done()
})
