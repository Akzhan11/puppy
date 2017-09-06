const login = async (browser, page) => {

    await page.goto('https://vimchatbusiness.com/login');

    await page.focus('.input-mobile-number');
    await page.type('7713877009');
    await page.focus('input[type="password"]');
    await page.type('samsung111295');
    await page.click('.select-country');
    const countryCodes = await page.$$('.ant-select-dropdown-menu-item');
    countryCodes[3].click();
    await page.click('.ant-btn.ant-btn-primary.ant-btn-lg.btn-login');

    await page.screenshot({ path: 'screen/example1.png', fullPage: true });

};
exports.login = login;


