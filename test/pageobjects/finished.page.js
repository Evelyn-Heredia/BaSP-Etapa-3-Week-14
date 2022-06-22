class FinishedPage {
    get pageTitle() {
        return $('.header_secondary_container > span');
    }
    get subtitle() {
        return $('#checkout_complete_container > h2');
    }
    get exitMsg() {
        return $('#checkout_complete_container > div');
    }
    get image() {
        return $('#checkout_complete_container > img');
    }
    get backHomeBtn() {
        return $('#back-to-products');
    }
}

export default new FinishedPage();