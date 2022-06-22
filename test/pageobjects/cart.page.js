class CartPage {
    get pageTitle() {
        return $('.header_secondary_container > span');
    }
    get quantity() {
        return $('.cart_quantity_label');
    }
    get description() {
        return $('.cart_desc_label');
    }
    get productqty() {
        return $('.cart_quantity');
    }
    get productdesc() {
        return $('.cart_item_label');
    }
    get price() {
        return $('.item_pricebar > div');
    }
    get removeBtn() {
        return $('#remove-sauce-labs-backpack');
    }
    get continueShopping() {
        return $('#continue-shopping');
    }
    get checkoutBtn() {
        return $('#checkout');
    }
}

export default new CartPage();