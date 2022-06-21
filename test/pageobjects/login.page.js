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
    get robotImg() {
        return $('.bot_column');
    }
    get logoImg() {
        return $('.login_logo');
    }

    get backpackImg() {
        return $('#item_4_img_link > img');
    }

    async setUsername(username) {
        await this.inputUserName.setValue(username);
    }
    async setPassword(password) {
        await this.inputPassword.setValue(password);
    }

    async login(username, password) {
        await this.setUsername(username);
        await this.setPassword(password);
        await this.btnLogin.click();
    }
}

export default new LoginPage();
