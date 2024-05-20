/// <reference types="Cypress" />
import 'cypress-iframe'; 
Cypress.Commands.add("Allvisit", (url)=>{
   cy.visit(url)
})