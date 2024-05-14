const { test, expect } = require('@playwright/test');
import { testCart } from './commands/addtocart.js'

test('test', async ({ page }) => {
  await testCart(page)
});
