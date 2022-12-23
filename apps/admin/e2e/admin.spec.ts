import type { Page } from '@playwright/test';
import { test, expect } from '@playwright/test';
import crypto from 'crypto';

test.describe.configure({ mode: 'serial' });

let page: Page;
const productName = 'Test-' + crypto.randomUUID();

test('Login as an admin', async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('http://127.0.0.1:5173/');
  await page.getByPlaceholder('vitalik@ethereum.fr').fill('test.3shop@gmail.com');
  await page.getByRole('button', { name: 'Login' }).click();
  const page1 = await browser.newPage();
  await page1.goto(
    'https://accounts.google.com/v3/signin/identifier?dsh=S-788143237%3A1671711598582066&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AeAAQh5MBj4tTwmcJjS9C8hdZLjqFl7bo6bAOM8O0M9OhR1we9yrVvNI8un2gsUeIpUBfW3eP-oySA',
  );
  await page1.getByRole('textbox', { name: 'Email or phone' }).fill('test.3shop@gmail.com');
  await page1.getByRole('button', { name: 'Next' }).click();
  await page1.waitForTimeout(1000);
  await page1.getByRole('textbox', { name: 'Enter your password' }).fill('ddV77d3A7&gl');
  await page1.getByRole('button', { name: 'Next' }).click();
  await page1.waitForTimeout(5000);
  await page1.getByRole('button', { name: 'Actualiser' }).click();
  await page1.waitForTimeout(1000);
  await page1.getByText('Login').nth(1).click();
  await page1.getByText('Log in to 3shop-auth').locator('strong').click();
  await page1.waitForTimeout(2000);
  const page2Promise = page1.waitForEvent('popup');
  await page1.getByRole('link', { name: 'Log in to 3shop-auth' }).nth(1).click();
  await page1.waitForTimeout(2000);
  const page2 = await page2Promise;
  page2.close();
  page1.close();
  await page.waitForTimeout(12000);
  const product = page.getByText('Products');
  expect(product).toBeDefined();
});

test('Add a product to the shop', async () => {
  await page.getByRole('button', { name: '+ New Product' }).click();
  await page.locator('input[name="name"]').click();
  await page.locator('input[name="name"]').fill(productName);
  await page.getByPlaceholder('Description').click();
  await page.getByPlaceholder('Description').fill('Test end 2 end');
  await page.getByPlaceholder('Description').press('Tab');
  await page.getByPlaceholder('Price').fill('50');
  await page.getByPlaceholder('Price').press('Tab');
  await page.getByPlaceholder('Discount for holders').fill('10');
  await page
    .getByRole('group')
    .filter({ hasText: 'Enable discount only for holders' })
    .locator('span')
    .click();
  await page.getByPlaceholder('Image link').click();
  await page
    .getByPlaceholder('Image link')
    .fill('https://miro.medium.com/max/439/1*RgZCsBde433FEp_DA6sGBw.jpeg');
  await page
    .getByRole('group')
    .filter({ hasText: 'Enable discount only for holders' })
    .locator('span')
    .click();

  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);

  expect(page.getByText(productName)).toBeDefined();
  expect(page.getByText('50')).toBeDefined();
});

test('Delete product from the shop', async () => {
  await page.waitForTimeout(2000);
  await page.getByText(productName).click();
  await page.getByText('Delete').click();
  await page.getByText('Yes').click();

  await page.waitForTimeout(1000);
  await page.goto('http://127.0.0.1:5173/app');
  await page.reload();
  await page.getByText('Products').waitFor();
  expect(page.getByText(productName)).not.toBeDefined();
});
