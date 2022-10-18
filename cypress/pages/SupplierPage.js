class SupplierPage
{
    elements = {
        supplierName: (option) => cy.xpath('//a[contains(@class,"supplier-card")]//img[@alt="'+option+'"]'),
        supplierNameList: () => cy.xpath(['//div[contains(@class,"supplier-card-text__product")]']),
        searchBar: () => cy.xpath('//input[@placeholder="Search"]'),
    }

    searchSupplierByName(query)
    {
        this.elements.searchBar().should('be.visible').should('be.enabled').type(query)
    }

    clickOnSupplierName(option)
    {
        this.elements.supplierName(option).should('be.visible').click()
    }
}

module.exports = new SupplierPage()

require('cypress-xpath')