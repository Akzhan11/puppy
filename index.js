const puppeteer = require('puppeteer');
// Импортировать свои тесты тут

const _start = async function () {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on('console', (...args) => {
    console.log('PAGE LOG:', ...args);
  });

  // Вызывать свои тесты тут

  browser.close();
}

// Вызов стартовой функции
_start();
