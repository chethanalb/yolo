/// <reference types="cypress"/>

import gamesPage from "../../pages/GamesPage"
import supplierPage from "../../pages/SupplierPage"

const supplierName = "Booming Games"
const gameName = "Romeo"

describe('Verify Supplier Page', () => {

    beforeEach( () => {
        cy.visit("https://hub88.io/suppliers")
    })

    it('Verify search functionality', () => {
        supplierPage.searchSupplierByName(supplierName)
        supplierPage.elements.supplierNameList()
        .should('be.visible')
        .should('have.length', 1)
        .should('contain.text', supplierName)
    })

    it('Verify game iframe launch', () => {
        supplierPage.clickOnSupplierName(supplierName)
        gamesPage.clickOnGame(gameName)
        gamesPage.isIframeDisplayed()
    })
})