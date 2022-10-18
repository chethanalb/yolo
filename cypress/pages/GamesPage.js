class GamesPage
{
    elements = {
        gameName: (option)=> cy.xpath('//a[@href]//h2[text()="'+option+'"]'),
        gameIframe: () => cy.xpath('//iframe[contains(@class,"game-frame")]')
    }

    clickOnGame(game)
    {
        this.elements.gameName(game).should('be.visible').click()
    }

    isIframeDisplayed()
    {
        this.elements.gameIframe().should('be.visible')
    }

}

module.exports = new GamesPage()

require('cypress-xpath')