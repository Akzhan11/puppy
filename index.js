const puppeteer = require('puppeteer');
const { login } = require('./tests/login.js');

const _start = async function () {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  page.on('console', (...args) => {
    console.log('PAGE LOG:', ...args);
  });

  await login(browser, page);
  browser.close();
}
_start();
