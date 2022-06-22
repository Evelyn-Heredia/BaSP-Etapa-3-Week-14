class ProductsPage {
    get hambMenu() {
        return $('#react-burger-menu-btn');
    }
    get wrapMenu() {
        return $('.bm-menu > nav');
    }
    get wrapMenuItems() {
        return $$('#inventory_sidebar_link');
    }
    get wrapMenuLogout() {
        return $('#logout_sidebar_link');
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

    async productsImg(product,attribute, value) {
        await expect(product).toHaveAttrContaining(attribute, value);
    }
    async seeProduct(product,url) {
        await expect(product).toBeDisplayed();
        await product.click();
        await expect(browser).toHaveUrl(url);
        await this.backToProductsBtn.click();
    }
    async inventoryImgs(product,url) {
        await expect(product).toBeClickable();
        await product.click();
        await expect(browser).toHaveUrl(url);
        await expect(this.hambMenu).toBeDisplayed();
        await expect(this.hambMenu).toBeClickable();
        await expect(this.logoImg).toBeDisplayed();
        await expect(this.cartImg).toBeDisplayed();
        await expect(this.cartImg).toBeClickable();
        await expect(this.twitterImg).toBeDisplayed();
        await expect(this.twitterImg).toBeClickable();
        await expect(this.facebookImg).toBeDisplayed();
        await expect(this.facebookImg).toBeClickable();
        await expect(this.linkedinImg).toBeDisplayed();
        await expect(this.linkedinImg).toBeClickable();
        await expect(this.footerBotImg).toBeDisplayed();
        await expect(this.footerCopyright).toBeDisplayed();
        await this.backToProductsBtn.click();
    }
    async socialMediaIcons(icon) {
        await expect(icon).toBeDisplayed();
        await expect(icon).toBeClickable();
    }
}

export default new ProductsPage();