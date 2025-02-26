import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sampleapp.tricentis.com/101/');
  await page.getByTitle('Get Quote Truck').click();
  await page.locator('#make').selectOption('Audi');
  await page.locator('#engineperformance').click();
  await page.locator('#engineperformance').fill('1000');
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('link', { name: '4', exact: true }).click();
  await page.locator('#numberofseats').selectOption('4');
  await page.locator('#fuel').selectOption('Petrol');
  await page.locator('#payload').click();
  await page.locator('#payload').fill('1000');
  await page.locator('#payload').press('Tab');
  await page.locator('#totalweight').fill('1500');
  await page.locator('#totalweight').press('Tab');
  await page.locator('#listprice').fill('10000');
  await page.locator('#listprice').press('Tab');
  await page.locator('#licenseplatenumber').fill('123');
  await page.locator('#licenseplatenumber').press('Tab');
  await page.locator('#annualmileage').fill('1000');
  await page.getByRole('button', { name: 'Next »' }).click();
  await page.locator('#firstname').click();
  await page.locator('#firstname').fill('Testing');
  await page.locator('#firstname').press('Tab');
  await page.locator('#lastname').fill('Last');
  await page.locator('#lastname').press('Tab');
  await page.getByRole('textbox', { name: 'MM/DD/YYYY' }).click();
  await page.getByRole('textbox', { name: 'MM/DD/YYYY' }).fill('01/01/1990');
  await page.getByRole('textbox', { name: 'MM/DD/YYYY' }).press('Tab');
  await page.locator('label').filter({ hasText: 'Female' }).locator('span').click();
  await page.locator('#streetaddress').click();
  await page.locator('#streetaddress').fill('tress 10dsf');
  await page.locator('#country').selectOption('Azerbaijan');
  await page.locator('#city').click();
  await page.locator('#city').fill('nothingf');
  await page.locator('#zipcode').click();
  await page.locator('#zipcode').fill('0123');
  await page.locator('#occupation').selectOption('Employee');
  await page.locator('label').filter({ hasText: 'Speeding' }).locator('span').click();
  await page.locator('label').filter({ hasText: 'Bungee Jumping' }).locator('span').click();
  await page.getByRole('button', { name: 'Next »' }).click();
  await page.getByRole('textbox', { name: 'MM/DD/YYYY' }).click();
  await page.getByRole('textbox', { name: 'MM/DD/YYYY' }).fill('06/14/2025');
  await page.locator('#insurancesum').selectOption('10000000');
  await page.locator('#damageinsurance').selectOption('No Coverage');
  await page.locator('label').filter({ hasText: 'Euro Protection' }).locator('span').click();
  await page.locator('label').filter({ hasText: 'Legal Defense Insurance' }).locator('span').click();
  await page.getByRole('button', { name: 'Next »' }).click();
  await page.getByRole('row', { name: 'Select Option' }).locator('span').nth(1).click();
  await page.getByRole('button', { name: 'Next »' }).click();
  await page.locator('#email').click();
  await page.locator('#email').fill('aga@gmail.com');
  await page.locator('#email').press('Tab');
  await page.locator('#phone').fill('123456789');
  await page.locator('#phone').press('Tab');
  await page.locator('#username').fill('phuoc');
  await page.locator('#username').press('Tab');
  await page.locator('#password').fill('T1sting');
  await page.locator('#password').press('Tab');
  await page.locator('#confirmpassword').fill('T1sting');
  await page.locator('#confirmpassword').press('Tab');

  await page.getByRole('button', { name: '« Send »' }).click();
  await page.waitForSelector('text=Sending e-mail success! ! Not');
  await expect(page.getByText('Sending e-mail success! ! Not')).toBeVisible();
});