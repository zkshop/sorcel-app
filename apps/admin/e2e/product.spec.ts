import { test, expect } from '@playwright/test';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';

const createJsonWebTokenPayload = (appId: string, metadata: object) => ({
  ...metadata,
  'https://hasura.io/jwt/claims': {
    'x-hasura-allowed-roles': ['customer'],
    'x-hasura-default-role': 'customer',
    'x-hasura-user-id': `${appId}`,
  },
  exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 1,
});

const token = jwt.sign(
  createJsonWebTokenPayload(process.env.APP_ID || '', {}),
  process.env.SECRET_JWT || '',
);

test.describe.configure({ mode: 'serial' });

const productName = 'Test-' + crypto.randomUUID();

test('Add a product to the shop', async ({ context, page }) => {
  context.addCookies([
    {
      name: 'customer-token',
      value: token,
      url: 'http://127.0.0.1:5173',
    },
  ]);

  await page.goto('http://127.0.0.1:5173');
  await page.getByRole('button', { name: '+ New Product' }).click();
  await page.locator('input[name="name"]').click();
  await page.locator('input[name="name"]').fill(productName);
  await page.getByPlaceholder('Description').click();
  await page.getByPlaceholder('Description').fill('Test end 2 end');
  await page.getByPlaceholder('Description').press('Tab');
  await page.getByPlaceholder('Price').fill('50');
  await page.getByPlaceholder('Price').press('Tab');
  await page.getByPlaceholder('Discount for holders').fill('10');

  await page.getByPlaceholder('Image link').click();
  await page
    .getByPlaceholder('Image link')
    .fill('https://miro.medium.com/max/439/1*RgZCsBde433FEp_DA6sGBw.jpeg');

  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForResponse(
    (resp) => resp.url().includes(process.env.PUBLIC_HASURA_API_URL || '') && resp.status() === 200,
  );
  await page.waitForNavigation();
  await page.waitForResponse(
    (resp) => resp.url().includes(process.env.PUBLIC_HASURA_API_URL || '') && resp.status() === 200,
  );
  await page.waitForTimeout(200);

  expect(await page.getByText(productName).first().isVisible()).toBeTruthy();
});

test('Edit product from the shop', async ({ page, context }) => {
  context.addCookies([
    {
      name: 'customer-token',
      value: token,
      url: 'http://127.0.0.1:5173',
    },
  ]);

  await page.goto('http://127.0.0.1:5173/app');
  await page.waitForResponse(
    (resp) => resp.url().includes(process.env.PUBLIC_HASURA_API_URL || '') && resp.status() === 200,
  );
  await page.getByText(productName).click();
  await page.locator('input[name="name"]').click();
  await page.locator('input[name="name"]').fill(productName + '-edited');
  await page.getByPlaceholder('Description').click();
  await page.getByPlaceholder('Description').fill('Test end 2 end edited');
  await page.getByPlaceholder('Description').press('Tab');
  await page.getByPlaceholder('Price').fill('100');
  await page.getByPlaceholder('Price').press('Tab');
  await page.getByPlaceholder('Discount for holders').fill('20');

  await page.getByPlaceholder('Image link').click();
  await page
    .getByPlaceholder('Image link')
    .fill(
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Logo_de_Free.png/800px-Logo_de_Free.png',
    );

  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForResponse(
    (resp) => resp.url().includes(process.env.PUBLIC_HASURA_API_URL || '') && resp.status() === 200,
  );

  await page.goto('http://127.0.0.1:5173/app');

  await page.getByText(productName).waitFor();

  await page.reload({ waitUntil: 'networkidle' });
  expect(await page.getByText(productName + '-edited').isVisible()).toBeTruthy();
});

test('Delete product from the shop', async ({ page, context }) => {
  context.addCookies([
    {
      name: 'customer-token',
      value: token,
      url: 'http://127.0.0.1:5173',
    },
  ]);

  await page.goto('http://127.0.0.1:5173/app');
  await page.waitForResponse(
    (resp) => resp.url().includes(process.env.PUBLIC_HASURA_API_URL || '') && resp.status() === 200,
  );
  await page.getByText(productName + '-edited').click();
  await page.getByText('Delete').click();
  await page.getByText('Yes').click();
  await page.waitForResponse(
    (resp) => resp.url().includes(process.env.PUBLIC_HASURA_API_URL || '') && resp.status() === 200,
  );
  await page.waitForNavigation();

  await page.reload({ waitUntil: 'networkidle' });

  const isVisible = await page.getByText(productName + '-edited').isVisible();
  expect(isVisible).toBeFalsy();
});
