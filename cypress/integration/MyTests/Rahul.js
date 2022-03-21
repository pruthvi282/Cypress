describe('My TestSuite', function () {
    it('My first TC', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
        cy.get('label>input[type="checkbox"]').check(['option2'])

        //Select dropdown
        cy.get('select').select('Option3').should('have.value', 'option3')

        //dynamic
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item > div').each(($el, index, $list) => {
            if ($el.text().includes('British Indian Ocean Territory')) {
                cy.wrap($el).click();

            }
        })
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('[value="radio1"]').check().should('be.checked')

    })
})