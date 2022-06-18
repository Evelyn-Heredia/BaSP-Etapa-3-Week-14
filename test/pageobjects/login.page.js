class LoginPage {
    get inputUserName() {
        return $('#user-name');
    }
    get inputPassword() {
        return $('#password');
    }
    get btnLogin() {
        return $('#login-button');
    }
    get errorContainer() {
        return $('.error-message-container.error');
    }

    async setUsername(username) {
        this.inputUserName.setValue(username);
    }
    async setPassword(password) {
        this.inputPassword.setValue(password);
    }

    async login(username, password) {
        this.setUsername(username);
        this.setPassword(password);
        this.btnLogin.click();
    }
}

export default new LoginPage();
