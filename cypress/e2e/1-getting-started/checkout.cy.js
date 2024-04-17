/// <reference types="cypress" />

describe('jejakin', () => {
    it('checkout', () => {
        cy.visit('https://3pp-ioh.jejakin.dev/')
        cy.get('#ca14480d-e032-41ad-a573-71fe92c95c50').click()
        cy.get('#info').should('contain.text', 'Program Penanaman Jambu Mutiara - Indosat')
        cy.get('.flex').contains('+').click()
        cy.get('.flex').contains('Tanam').click()
        cy.get('.flex.items-center.justify-between > .group').should('be.disabled')
        cy.get('#name').type('wisnu')
        cy.get('#email').type('wisnu@gmail.com')
        cy.get('.py-4').contains('Metode Pembayaran').click()
        // cy.wait(2000)
        cy.get(':nth-child(2) > .contexify_itemContent').click()
        cy.get('.flex.items-center.justify-between > .group').should('be.enabled').click()
        // cy.get('.w-10').trigger('mouseover', '156', '16').click()
        cy.get('.flex.gap-4 > .text-ioh-black').should('be.visible')
        cy.get('.justify-between > .group').should('be.disabled')
        cy.get('[name="ovoPhoneNumber"]').type('085156976207')
        cy.get('.justify-between > .group').should('be.enabled').click()
        cy.wait(5000)
        cy.get('.flex-col').should('contain.text', 'Pembayaran berhasil')

    });
});
