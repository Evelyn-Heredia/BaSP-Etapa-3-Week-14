class OverviewPage {
    get pageTitle() {
        return $('.header_secondary_container > span');
    }
    get cartItemsSummary() {
        return $('.cart_item_label');
    }
    get checkoutSummary() {
        return $('.summary_info');
    }
    get cancelBtn() {
        return $('#cancel');
    }
    get finishBtn() {
        return $('#finish');
    }
}

export default new OverviewPage();