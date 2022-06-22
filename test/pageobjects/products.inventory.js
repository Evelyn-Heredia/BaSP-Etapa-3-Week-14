class ProductInventory {
    get image() {
        return $('.inventory_details_img_container > img');
    }
    get title() {
        return $(' .inventory_details_name.large_size');
    }
    get text() {
        return $(' .inventory_details_desc.large_size');
    }
    get price() {
        return $(' .inventory_details_price');
    }
    get addToCartBtn() {
        return $('#add-to-cart-sauce-labs-backpack');
    }
    get removeBtn() {
        return $('#remove-sauce-labs-backpack');
    }
    get backToProductsBtn() {
        return $('#back-to-products');
    }

    async productPage(product) {
        await expect(product).toBeClickable();
        await product.click();
        await expect(this.image).toBeDisplayed();
        await expect(this.title).toBeDisplayed();
        await expect(this.text).toBeDisplayed();
        await expect(this.price).toBeDisplayed();
        await expect(this.addToCartBtn).toBeDisplayed();
        await expect(this.addToCartBtn).toBeClickable();
        await this.addToCartBtn.click();
        await expect(this.removeBtn).toBeDisplayed();
        await expect(this.removeBtn).toBeClickable();
        await this.removeBtn.click()
        await expect(this.backToProductsBtn).toBeDisplayed();
        await expect(this.backToProductsBtn).toBeClickable()
        await this.backToProductsBtn.click();
    }
}

export default new ProductInventory();