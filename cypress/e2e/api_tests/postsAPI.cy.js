/// <reference types="Cypress"/>


const baseURL = 'https://gorest.co.in';

describe('validate post APIs', () =>{

let token = 'Bearer 6844e7a9c270fd602f0f1b0e2593e7a80c20d9988a0ee18b2eee9167c0f5a287'
let postId = 'abc'

it('create post data - POST', () =>{

    cy.request({
    method: 'POST',
    url: baseURL+'/public/v2/posts',
    headers: {
        'Authorization': token
    },
    body:{
        "user_id":"3609",
        "title": "Sample Title",
        "body": "Sample Body"
    } }).then(function(response){
        expect(response.status).to.equals(201)
        postId = response.body['id']
    })
})

it('retreive post data - GET', ()=>{
    cy.request({
        headers: {
            'Authorization': token
        },
        url: 'https://gorest.co.in/public/v2/posts/'+postId
    }).then(function(response){
        expect(response.body).have.property('title')
        expect(response.status).to.equals(200)
        expect(response.duration).to.lessThan(500)
        expect(response.body).property('title').to.equals('Sample Title')
        expect(response.body).property('id').to.equals(postId)
    })
})

it('delete post data - DELETE', ()=>{
    cy.request({
        method: 'DELETE',
        headers: {
            'Authorization': token
        },
        url: 'https://gorest.co.in/public/v2/posts/'+postId
    }).then(function(response){
        expect(response.status).to.equals(204)
        expect(response.duration).to.lessThan(500)
    })
})

})