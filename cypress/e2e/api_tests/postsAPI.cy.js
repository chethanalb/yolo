/// <reference types="Cypress"/>


const baseURL = 'https://gorest.co.in';

describe('validate post APIs', () =>{

let token = 'Bearer b956717a3a60540f0bf2159475442dee446825c6e5e7cb8b1db3c33c69438a3d'
let postId = 'abc'

it('create post data - POST', () =>{

    cy.request({
    method: 'POST',
    url: baseURL+'/public/v2/posts',
    headers: {
        'Authorization': token
    },
    body:{
        "user_id":"3087",
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
