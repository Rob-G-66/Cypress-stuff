class NBSLogin {
    // Selectors for login form elements
    emailInput = '#Identification_Email';      // Selector for the email input field
    passwordInput = '#Authentication_Password'; // Selector for the password input field
    submitButton = '.submit-button';           // Selector for the submit button (after entering email)
    nextButton = '#nextButton';                // Selector for the next button (after entering password)

    // Actions
    //-------------------
    // Navigates to the NBS login page
    visitLoginPage() {
        cy.visit('https://login.thenbs.com/auth/login/');
    }

    // Enters the provided email into the email input field
    enterEmail(email) {
        cy.get(this.emailInput).type(email);
    }

    // Clicks the submit button after entering the email
    clickSubmit() {
        cy.get(this.submitButton).click();
    }

    // Enters the provided password into the password input field
    enterPassword(password) {
        cy.get(this.passwordInput).type(password);
    }

    // Clicks the next button after entering the password
    clickNext() {
        cy.get(this.nextButton).click();
    }

    // Complete login flow: visits login page, enters credentials, and navigates to the NBS Source homepage
    loginToNBS(email, password) {
        this.visitLoginPage();        // Go to login page
        this.enterEmail(email);       // Enter email
        this.clickSubmit();           // Submit email
        this.enterPassword(password); // Enter password
        this.clickNext();             // Submit password
        cy.visit('https://source.thenbs.com/'); // Navigate to NBS Source homepage after login
    }
}

// Export a singleton instance of the NBSLogin class
export default new NBSLogin();