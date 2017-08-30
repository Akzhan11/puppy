const login = async (browser, page) => {
    await page.goto('https://vimchat-development.firebaseapp.com/login');
    await page.focus('.input-mobile-number');
    await page.type('7713877009');
    await page.focus('.ant-input.ant-input-lg.login-input');
    await page.type('samsung111295');
    await page.click('.select-country');
    const countryCodes = await page.$$('.ant-select-dropdown-menu-item');
    countryCodes[3].click();
    await page.click('.ant-btn.ant-btn-primary.ant-btn-lg.btn-login');
    // await page.screenshot({ path: 'screen/example4.png', fullPage: true });

    let url = await page.url();
   const verifyUrl = () => {
        url = page.url();
        console.log(url);
        if (url.indexOf('login') !== -1) {
            console.log('test fail');
        } else {
            console.log('test complete');
        }
   }
    setTimeout(verifyUrl, 12000);


}

exports.login = login


