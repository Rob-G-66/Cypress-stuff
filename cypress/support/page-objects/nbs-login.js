class NBSLogin {
    // Selectors
    emailInput = '#Identification_Email';
    passwordInput = '#Authentication_Password';
    submitButton = '.submit-button';
    nextButton = '#nextButton';

    // Actions
    visitLoginPage() {
        cy.visit('https://login.thenbs.com/auth/login/');
    }

    enterEmail(email) {
        cy.get(this.emailInput).type(email);
    }

    clickSubmit() {
        cy.get(this.submitButton).click();
    }

    enterPassword(password) {
        cy.get(this.passwordInput).type(password);
    }

    clickNext() {
        cy.get(this.nextButton).click();
    }

    loginToNBS(email, password) {
        this.visitLoginPage();
        this.enterEmail(email);
        this.clickSubmit();
        this.enterPassword(password);
        this.clickNext();
        cy.visit('https://source.thenbs.com/');
    }
}

export default new NBSLogin();