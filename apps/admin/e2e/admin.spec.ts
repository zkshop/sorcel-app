import { test, expect } from '@playwright/test';

test('Login as an admin', async ({ page, browser }) => {
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
