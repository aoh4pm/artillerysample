const { expect } = require('@playwright/test');

async function testCart(page) {
  await page.goto('https://quesadilla-endeavor.square.site/');
  await page.locator('#gdwqcm').getByRole('link', { name: 'Free Sample' }).click();
  await page.getByRole('combobox').selectOption('11ef00edd443194096354695297b4a4d');
  await page.getByRole('button', { name: 'Add to Cart $' }).click();
  await page.getByLabel('Cart icon').click();
}

module.exports = {
    testCart,
};
