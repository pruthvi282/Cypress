/// <reference types="Cypress"/>

describe('End-To-End',function(){
    it('Second Test',function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.get('.product> .product-image').should('have.length',4).then(function(){
            cy.log('paassed')
        })
        cy.get('.products').find('.product').each(($el,index,$list) =>{
            const prod=$el.find('.product-name').text();
            cy.log('****************'+ prod)
            if(prod.includes('Cauliflower')){
                    $el.find('button').click();
            }

        })
    
    })


})