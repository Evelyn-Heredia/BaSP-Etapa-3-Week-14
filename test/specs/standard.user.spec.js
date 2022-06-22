import LoginPage from '../pageobjects/login.page';
import ProductsPage from '../pageobjects/products.list.page';
import ProductInventory from '../pageobjects/products.inventory';
import CartPage from '../pageobjects/cart.page';
import CheckoutPage from '../pageobjects/checkout.page';
import OverviewPage from '../pageobjects/overview.page';
import FinishedPage from '../pageobjects/finished.page';

describe('Standard user path',() => {
    beforeAll('Open browser', ()=> {
        browser.url('https://www.saucedemo.com/');
    });

    it('Bot image should be displayed', async () => {
        await expect(LoginPage.robotImg).toBeDisplayed();
    });

    it('Logo image should be displayed', async () => {
        await expect(LoginPage.logoImg).toBeDisplayed();
    });

    it('Empty username should display error', async () => {
        await LoginPage.login('', 'secret_sauce');
        await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Username is required');
    });

    it('Page should be refreshed', async () => {
        await browser.refresh();
        await browser.pause(800);
    });

    it('Empty password should display error', async () => {
        await LoginPage.login('standard_user','' );
        await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Password is required');
    });

    it('Invalid username should display error', async () => {
        await LoginPage.login('invalid', 'secret_sauce');
        await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });

    it('Invalid password should display error', async () => {
        await LoginPage.login('standard_user', 'invalid');
        await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });

    it('Successful login redirects to products tab', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
    });

    it('Hamburger menu should be displayed and clickable', async () => {
        await expect(ProductsPage.hambMenu).toBeDisplayed();
        await expect(ProductsPage.hambMenu).toBeClickable();
    });

    it('Hamburger menu should display a list', async () => {
        await ProductsPage.hambMenu.click();
        await expect(ProductsPage.wrapMenu).toHaveChildren(4);
    });

    it('Menu list items should be clickable', async () => {
        await expect(ProductsPage.wrapMenuItems).toBeClickable();
    });

    it('Red cross should close menu', async () => {
        await expect(ProductsPage.closeWrapMenu).toBeDisplayed();
        await expect(ProductsPage.closeWrapMenu).toBeClickable();
        await ProductsPage.closeWrapMenu.click();
        await expect(ProductsPage.closeWrapMenu).not.toBeDisplayed();
    });

    it('App logo should be displayed', async () => {
        await expect(ProductsPage.logoImg).toBeDisplayed();
    });

    it('Cart image should be displayed and clickable', async () => {
        await expect(ProductsPage.cartImg).toBeDisplayed();
        await expect(ProductsPage.cartImg).toBeClickable();
    });

    it('Page title should be displayed', async () => {
        await expect(ProductsPage.pageTitle).toHaveText('PRODUCTS');
    });

    it('Bot head image should be displayed', async () => {
        await expect(ProductsPage.botHeadImg).toBeDisplayed();
    });

    it('Filter should be clickable', async () => {
        await expect(ProductsPage.productFilter).toBeClickable();
    });

    it('Filter should display options', async () => {
        await ProductsPage.productFilter.click();
        await expect(ProductsPage.productFilter).toHaveChildren(4);
    });

    it('Filter options should be clickable', async () => {
        await ProductsPage.productFilter.click();
        await expect(ProductsPage.productFilter).toBeClickable();
    });

    it('Product images should be displayed', async () => {
        await ProductsPage.productsImg(ProductsPage.backpackImg,'src', '/static/media/sauce-backpack-1200x1500.34e7aa42.jpg');
        await ProductsPage.productsImg(ProductsPage.bikeLightImg,'src', '/static/media/bike-light-1200x1500.a0c9caae.jpg');
        await ProductsPage.productsImg(ProductsPage.tShirtImg,'src', '/static/media/bolt-shirt-1200x1500.c0dae290.jpg');
        await ProductsPage.productsImg(ProductsPage.jacketImg,'src', '/static/media/sauce-pullover-1200x1500.439fc934.jpg');
        await ProductsPage.productsImg(ProductsPage.babyBodysuitImg,'src', '/static/media/red-onesie-1200x1500.1b15e1fa.jpg');
        await ProductsPage.productsImg(ProductsPage.redTshirtImg,'src', '/static/media/red-tatt-1200x1500.e32b4ef9.jpg');
    });

    it('Products price should be displayed', async () => {
        await expect(ProductsPage.productsPrice).toHaveAttrContaining('class','inventory_item_price');
        await expect(ProductsPage.productsPrice).toHaveTextContaining('$');
    });

    it('Add to cart button should be displayed', async () => {
        await expect(ProductsPage.inventoryContainer).toHaveTextContaining('ADD TO CART');
    });

    it('A new tab should be displayed when clicking a product image', async () => {
        await ProductsPage.seeProduct(ProductsPage.backpackImg, 'https://www.saucedemo.com/inventory-item.html?id=4');
        await expect(ProductsPage.hambMenu).toBeDisplayed;
        await ProductsPage.seeProduct(ProductsPage.bikeLightImg, 'https://www.saucedemo.com/inventory-item.html?id=0');
        await ProductsPage.seeProduct(ProductsPage.tShirtImg, 'https://www.saucedemo.com/inventory-item.html?id=1');
        await ProductsPage.seeProduct(ProductsPage.jacketImg, 'https://www.saucedemo.com/inventory-item.html?id=5');
        await ProductsPage.seeProduct(ProductsPage.babyBodysuitImg, 'https://www.saucedemo.com/inventory-item.html?id=2');
        await ProductsPage.seeProduct(ProductsPage.redTshirtImg, 'https://www.saucedemo.com/inventory-item.html?id=3');
    });

    it('Inventory page should contain header and footer.', async () => {
        await ProductsPage.inventoryImgs(ProductsPage.backpackImg, 'https://www.saucedemo.com/inventory-item.html?id=4');
        await ProductsPage.inventoryImgs(ProductsPage.bikeLightImg, 'https://www.saucedemo.com/inventory-item.html?id=0');
        await ProductsPage.inventoryImgs(ProductsPage.tShirtImg, 'https://www.saucedemo.com/inventory-item.html?id=1');
        await ProductsPage.inventoryImgs(ProductsPage.jacketImg, 'https://www.saucedemo.com/inventory-item.html?id=5');
        await ProductsPage.inventoryImgs(ProductsPage.babyBodysuitImg, 'https://www.saucedemo.com/inventory-item.html?id=2');
        await ProductsPage.inventoryImgs(ProductsPage.redTshirtImg, 'https://www.saucedemo.com/inventory-item.html?id=3');
    });

    it('Inventory page should contain product information.', async () => {
        await ProductInventory.productPage(ProductsPage.backpackImg);
        /*await ProductInventory.productPage(ProductsPage.bikeLightImg);
        await ProductInventory.productPage(ProductsPage.tShirtImg);
        await ProductInventory.productPage(ProductsPage.jacketImg);
        await ProductInventory.productPage(ProductsPage.babyBodysuitImg);
        await ProductInventory.productPage(ProductsPage.redTshirtImg);*/
    });

    it('Add to cart button should changed into remove when clicked', async () => {
        await expect(ProductsPage.addBtn).toBeDisplayed();
        await ProductsPage.addBtn.click();
        await expect(ProductsPage.removeBtn).toBeDisplayed();
        await expect(ProductsPage.removeBtn).toHaveText('REMOVE');
    });

    it('Remove button should changed into add to cart when clicked', async () => {
        await expect(ProductsPage.removeBtn).toBeDisplayed();
        await ProductsPage.removeBtn.click();
        await expect(ProductsPage.addBtn).toBeDisplayed();
        await expect(ProductsPage.addBtn).toHaveText('ADD TO CART');
    });

    it('Footer should be displayed', async () => {
        await expect(ProductsPage.productsFooter).toBeDisplayed();
    });

    it('Social media icons should be displayed and clickable', async () => {
        await ProductsPage.socialMediaIcons(ProductsPage.twitterImg);
        await ProductsPage.socialMediaIcons(ProductsPage.facebookImg);
        await ProductsPage.socialMediaIcons(ProductsPage.linkedinImg);

    });

    it('Footer copyright should be displayed', async () => {
        await expect(ProductsPage.footerCopyright).toBeDisplayed();
        await expect(ProductsPage.footerCopyright).toHaveText('© 2022 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy');
    });

    it('Footer bot image should be displayed', async () => {
        await expect(ProductsPage.footerBotImg).toBeDisplayed();
    });

    it('Cart tab should display added products', async () => {
        await ProductsPage.addBtn.click();
        await expect(ProductsPage.cartImg).toBeDisplayed();
        await ProductsPage.cartImg.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
        await expect(CartPage.pageTitle).toBeDisplayed();
        await expect(CartPage.pageTitle).toHaveText('YOUR CART');
        await expect(CartPage.quantity).toBeDisplayed();
        await expect(CartPage.quantity).toHaveText('QTY');
        await expect(CartPage.description).toBeDisplayed();
        await expect(CartPage.description).toHaveText('DESCRIPTION');
        await expect(CartPage.productqty).toBeDisplayed();
        await expect(CartPage.productdesc).toBeDisplayed();
        await expect(CartPage.price).toBeDisplayed();
        await expect(CartPage.removeBtn).toBeDisplayed();
        await expect(CartPage.removeBtn).toBeClickable();
        await expect(CartPage.continueShopping).toBeDisplayed();
        await expect(CartPage.continueShopping).toBeClickable();
        await expect(CartPage.checkoutBtn).toBeDisplayed();
        await expect(CartPage.checkoutBtn).toBeClickable();
        await CartPage.checkoutBtn.click();
    });

    it('Checkout tab should display personal information form', async () => {
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
        await expect(CheckoutPage.pageTitle).toBeDisplayed();
        await expect(CheckoutPage.pageTitle).toHaveText('CHECKOUT: YOUR INFORMATION');
        await expect(CheckoutPage.name).toBeDisplayed();
        await expect(CheckoutPage.name).toBeClickable();
        await expect(CheckoutPage.surname).toBeDisplayed();
        await expect(CheckoutPage.surname).toBeClickable();
        await expect(CheckoutPage.postalCode).toBeDisplayed();
        await expect(CheckoutPage.postalCode).toBeClickable();
        await expect(CheckoutPage.continueBtn).toBeDisplayed();
        await expect(CheckoutPage.continueBtn).toBeClickable();
        await expect(CheckoutPage.cancelBtn).toBeDisplayed();
        await expect(CheckoutPage.cancelBtn).toBeClickable();
    });

    it('Empty form should display error', async () => {
        await expect(ProductsPage.cartImg).toBeDisplayed();
        await ProductsPage.cartImg.click();
        await expect(CartPage.checkoutBtn).toBeDisplayed();
        await expect(CartPage.checkoutBtn).toBeClickable();
        await CartPage.checkoutBtn.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
        await expect(CheckoutPage.name).toBeDisplayed();
        await expect(CheckoutPage.surname).toBeDisplayed();
        await expect(CheckoutPage.postalCode).toBeDisplayed();
        await CheckoutPage.continueBtn.click();
    });

    it('Personal information form should be filled', async () => {
        await expect(ProductsPage.cartImg).toBeDisplayed();
        await ProductsPage.cartImg.click();
        await expect(CartPage.checkoutBtn).toBeDisplayed();
        await expect(CartPage.checkoutBtn).toBeClickable();
        await CartPage.checkoutBtn.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
        await expect(CheckoutPage.name).toBeDisplayed();
        await expect(CheckoutPage.surname).toBeDisplayed();
        await expect(CheckoutPage.postalCode).toBeDisplayed();
        await CheckoutPage.continue('Evelyn','Heredia','2200');
    });

    it('Overview page should display purchase information', async () => {
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');
        await expect(OverviewPage.pageTitle).toBeDisplayed();
        await expect(OverviewPage.pageTitle).toHaveText('CHECKOUT: OVERVIEW');
        await expect(OverviewPage.cartItemsSummary).toBeDisplayed();
        await expect(OverviewPage.cartItemsSummary).toHaveChildren(3);
        await expect(OverviewPage.checkoutSummary).toBeDisplayed();
        await expect(OverviewPage.checkoutSummary).toHaveTextContaining('Payment Information:', 'Shipping Information:', 'Item total:');
        await expect(OverviewPage.cancelBtn).toBeDisplayed();
        await expect(OverviewPage.cancelBtn).toBeClickable();
        await expect(OverviewPage.finishBtn).toBeDisplayed();
        await expect(OverviewPage.finishBtn).toBeClickable();
        await OverviewPage.finishBtn.click();
    });

    it('Purchase finished should display successful message tab', async () => {
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html');
        await expect(FinishedPage.pageTitle).toBeDisplayed();
        await expect(FinishedPage.pageTitle).toHaveText('CHECKOUT: COMPLETE!');
        await expect(FinishedPage.subtitle).toBeDisplayed();
        await expect(FinishedPage.subtitle).toHaveText('THANK YOU FOR YOUR ORDER');
        await expect(FinishedPage.exitMsg).toBeDisplayed();
        await expect(FinishedPage.exitMsg).toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        await expect(FinishedPage.image).toBeDisplayed();
        await expect(FinishedPage.backHomeBtn).toBeDisplayed();
        await expect(FinishedPage.backHomeBtn).toBeClickable();
        await FinishedPage.backHomeBtn.click();
    });

    it('Back Home button should redirect to products list tab', async () => {
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });

    it('Logout option should redirect to login page', async () => {
        await expect(ProductsPage.hambMenu).toBeDisplayed();
        await expect(ProductsPage.hambMenu).toBeClickable();
        await ProductsPage.hambMenu.click();
        await expect(ProductsPage.wrapMenuItems).toBeClickable();
        await expect(ProductsPage.wrapMenuLogout).toBeDisplayed();
        await expect(ProductsPage.wrapMenuLogout).toBeClickable();
        await ProductsPage.wrapMenuLogout.click();
    });
});