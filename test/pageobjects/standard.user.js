class StandardUser {
    get hambMenu() {
        return $('#react-burger-menu-btn');
    }
    get wrapMenu() {
        return $('.bm-menu > nav');
    }
    get wrapMenuItems() {
        return $$('#inventory_sidebar_link');
    }
    get closeWrapMenu() {
        return $('#react-burger-cross-btn');
    }
    get logoImg() {
        return $('.header_label > div');
    }
    get cartImg(){
        return $('#shopping_cart_container > a');
    }
    get pageTitle() {
        return $('#header_container > div.header_secondary_container > span');
    }
    get botHeadImg() {
        return $('.peek');
    }
    get productFilter() {
        return $('.right_component > span > select');
    }
    get backpackImg() {
        return $('#item_4_img_link > img');
    }
    get bikeLightImg() {
        return $('#item_0_img_link > img');
    }
    get tShirtImg() {
        return $('#item_1_img_link > img');
    }
    get jacketImg() {
        return $('#item_5_img_link > img');
    }
    get babyBodysuitImg() {
        return $('#item_2_img_link > img');
    }
    get redTshirtImg() {
        return $('#item_3_img_link > img');
    }
    get productsPrice() {
        return $$('.pricebar > div');
    }
    get inventoryContainer() {
        return $('#inventory_container');
    }
    get backToProductsBtn() {
        return $('#back-to-products');
    }
    get addBtn() {
        return $('#add-to-cart-sauce-labs-backpack');
    }
    get removeBtn() {
        return $('#remove-sauce-labs-backpack');
    }
    get productsFooter() {
        return $('#page_wrapper > footer');
    }
    get twitterImg() {
        return $('.social_twitter > a');
    }
    get facebookImg() {
        return $('.social_facebook > a');
    }
    get linkedinImg() {
        return $('.social_linkedin > a');
    }
    get footerCopyright() {
        return $('#page_wrapper > footer > div');
    }
    get footerBotImg() {
        return $('#page_wrapper > footer > img');
    }

    async seeProduct(product,url) {
        await expect(product).toBeDisplayed();
        await product.click();
        await expect(browser).toHaveUrl(url);
        await this.backToProductsBtn.click();
    }
    async socialMediaIcons(icon) {
        await expect(icon).toBeDisplayed();
        await expect(icon).toBeClickable();
    }
}

export default new StandardUser();