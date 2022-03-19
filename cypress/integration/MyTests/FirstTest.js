/// <reference types="Cypress"/>


describe('My Test Suite',function(){
    it('My first Test case', function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
      /* cy.get('input.search-keyword').type("ca");
        cy.get("div.product-image").should('have.length',4);
        cy.get('input.search-keyword').clear();
        cy.get(':nth-child(1)> .stepper-input a.increment').click();
        cy.get(':nth-child(1)>.stepper-input .quantity').should('have.value',2);
        cy.get('.products').find('.product').eq('3').contains('ADD').click();*/
        cy.get('.products').find('.product').each(($el, index, $list) => {
          const  name=$el.find('.product-name').text();
            if(name.includes('Brocolli')){
                cy.wait(1000);
              cy.wrapt$el.contains('ADD').click();
            }
           
        })


    })
})
