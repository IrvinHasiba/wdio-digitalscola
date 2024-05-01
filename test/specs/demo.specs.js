describe('Demo Login and add to cart', () => {
    it('should login successfully and add item to cart ', async () => {

        await browser.url('https://www.saucedemo.com/')

        const username = await browser.$('#user-name')
        const password = await browser.$('#password')
        const loginButton = await browser.$('#login-button')

        await username.setValue('standard_user')      
        await password.setValue('secret_sauce')

        await loginButton.click()

        // Click "Add to Cart" 
        const addToCartButton = await browser.$('//*[@id="add-to-cart-sauce-labs-backpack"]')
        addToCartButton.click()

        // validate "add to cart"
        const shoppingCart = await browser.$('//*[@id="shopping_cart_container"]/a')
        await shoppingCart.waitForDisplayed({ timeout: 10000 })
        
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')  


    })
})