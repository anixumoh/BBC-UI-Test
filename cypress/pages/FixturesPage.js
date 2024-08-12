class FixturesPage {
    elementsList() {
        const elements = {
            teams: "#main-data ul>li a>div>div>div>div>div>span:nth-child(2)"
        }
        return elements
    }

    displayTeams() {

        let total_teams
        cy.get(this.elementsList().teams).then(($el) => {
            total_teams = $el.length;
            if (total_teams == 0) {
                cy.log("There are no matches today")
            }
            else {
                cy.get(this.elementsList().teams).each(($el) => {
                    cy.log($el.text())
                })
            }
        })
    }
}
export default FixturesPage