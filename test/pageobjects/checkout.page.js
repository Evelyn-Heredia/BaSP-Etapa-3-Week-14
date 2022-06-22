class CheckoutPage {
    get pageTitle() {
        return $('.header_secondary_container > span');
    }
    get name() {
        return $('#first-name');
    }
    get surname() {
        return $('#last-name');
    }
    get postalCode() {
        return $('#postal-code');
    }
    get continueBtn() {
        return $('#continue');
    }
    get cancelBtn() {
        return $('#cancel');
    }
    get errorMsg() {
        return $('.error-message-container.errorl');
    }

    async firstName(name) {
        await this.name.setValue(name);
    }
    async lastName(surname) {
        await this.surname.setValue(surname);
    }
    async zip(postalCode) {
        await this.postalCode.setValue(postalCode);
    }
    async continue(fName, lName, zip) {
        await this.firstName(fName);
        await this.lastName(lName);
        await this.zip(zip);
        await this.continueBtn.click();
    }
}

export default new CheckoutPage();