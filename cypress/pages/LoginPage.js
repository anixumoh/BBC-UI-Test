class LoginPage {

    elementsList() {
        const elements = {
            continueBtn: "#submit-button",
            errorMessage1: "#form-message-email p>span",
            errorMessage2: "#form-message-general>div",
            emailField: "#user-identifier-input"
        }
        return elements
    }

    enterEmailAddress(email) {
        cy.get(this.elementsList().emailField).clear().type(email)
    }

    clickContinueButton() {
        cy.get(this.elementsList().continueBtn).click();
    }

    assertErrorMessage(errMsg) {
        cy.get(this.elementsList().errorMessage1).should('contain',errMsg);
    }

    assertUnrecongnisedEmail(errMsg){
        cy.get(this.elementsList().errorMessage2).should('contain',errMsg);
    }
}
export default LoginPage