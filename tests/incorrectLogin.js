const incorrectLogin = async (browser, page) => {
    await page.goto('https://vimchat-development.firebaseapp.com/login');
    await page.focus('.input-mobile-number');
    await page.type('7713877009');
    await page.focus('.ant-input.ant-input-lg.login-input');
    await page.type('79846');
    await page.click('.select-country');
    const countryCodes = await page.$$('.ant-select-dropdown-menu-item');
    countryCodes[3].click();
    await page.click('.ant-btn.ant-btn-primary.ant-btn-lg.btn-login');
    if

    await page.screenshot({ path: 'screen/example1.png', fullPage: true });
}

exports.login = login