import { test, expect } from '@playwright/test';

test('Add item to cart and verify', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await expect(page).toHaveURL(/inventory/);

  // Select first product
  const firstProduct = page.locator('.inventory_item').first();

  const name = await firstProduct.locator('.inventory_item_name').textContent();
  const price = await firstProduct.locator('.inventory_item_price').textContent();

  await firstProduct.locator('button').click();

  // Go to cart
  await page.click('.shopping_cart_link');

  // Verify
  await expect(page.locator('.inventory_item_name')).toHaveText(name!);
  await expect(page.locator('.inventory_item_price')).toHaveText(price!);
  await expect(page.locator('.cart_quantity')).toHaveText('1');
});
