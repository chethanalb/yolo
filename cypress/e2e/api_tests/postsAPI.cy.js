/// <reference types="Cypress"/>


const baseURL = 'https://gorest.co.in';

describe('validate post APIs', () =>{

let token = 'Bearer db1ac56dd0413424eab9763b469e75b3803722f232e8eebb9b1c961a68672066'
let postId = ''
let userId = ''

it('create a user to use in Posts data - POST', () =>{
    var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    var string = '';
    for(var ii=0; ii<15; ii++){
         string += chars[Math.floor(Math.random() * chars.length)];
    }
    let email = string + '@domain.com';

    cy.request({
    method: 'POST',
    url: baseURL+'/public/v2/users',
    headers: {
        'Authorization': token
    },
    body:{
        "name": "Chethana",
        "email": email,
        "gender": "female",
        "status": "active"
    } }).then(function(response){
        expect(response.status).to.equals(201)
        userId = response.body['id']
    })
})

it('create post data - POST', () =>{

    cy.request({
    method: 'POST',
    url: baseURL+'/public/v2/posts',
    headers: {
        'Authorization': token
    },
    body:{
        "user_id":userId,
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
        expect(response.duration).to.lessThan(1000)
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
        expect(response.duration).to.lessThan(1000)
    })
})

})
