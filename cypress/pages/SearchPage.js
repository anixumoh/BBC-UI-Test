class SearchPage {

    elementsList() {
        const elements = {
            sportTitles: "div[data-testid='default-promo'] span[aria-hidden]"
        }
        return elements
    }

    verifyDisplayedArticles() {
        const title = this.elementsList().sportTitles;
        cy.origin('https://www.bbc.co.uk', { args: { title } }, ({ title }) => {
            cy.get(title).then($el => {
                const totalCount = Cypress.$($el).length;
                cy.log(totalCount);
                cy.wrap($el).should('not.be.empty')
            })
        })
    }

    displayFirstLastHeading() {
        const title = this.elementsList().sportTitles;
        cy.origin('https://www.bbc.co.uk', { args: { title } }, ({ title }) => {
            cy.get(title).then($el => {
                cy.log($el.first().text())
                cy.log($el.last().text())
            })
        })
    }
}
export default SearchPage