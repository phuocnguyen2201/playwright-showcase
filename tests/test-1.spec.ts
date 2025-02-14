import { test, expect } from '@playwright/test';

test('TodoMCV-happy-case', async ({ page }) => {
  await page.goto('https://todomvc.com/');
  await page.getByRole('link', { name: 'React New', exact: true }).click();
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('testing1');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('tesing 2');
  await page.getByTestId('text-input').press('Enter');
  await page.getByRole('listitem').filter({ hasText: 'tesing' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('link', { name: 'Completed' }).click();
  await expect(page.getByTestId('todo-item-label')).toBeVisible();
  await expect(page.getByTestId('footer-navigation')).toBeVisible();
});