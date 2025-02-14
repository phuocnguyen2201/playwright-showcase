import { test, expect } from '@playwright/test';
import { authenticator } from 'otplib';

test('test', async ({ page }) => {
  await page.goto('https://seleniumbase.io/realworld/login');
  let username = 'demo_user';
  let password = 'secret_pass';
  const secret_key = 'GAXG2MTEOR3DMMDG';
  const token = authenticator.generate(secret_key);

  await page.getByRole('textbox', { name: 'Enter your username' }).click();
  await page.getByRole('textbox', { name: 'Enter your username' }).fill(username);
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill(password);
  
  await page.getByRole('textbox', { name: 'Enter the 6-digit MFA Code' }).click();
  await page.getByRole('textbox', { name: 'Enter the 6-digit MFA Code' }).fill(token);
  await page.getByRole('link', { name: 'Sign in' }).click();
  await expect(page.getByRole('heading', { name: 'Welcome!' })).toBeVisible();
  await expect(page.locator('#image1')).toBeVisible();
});