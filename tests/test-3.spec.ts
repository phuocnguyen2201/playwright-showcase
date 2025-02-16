import { test, expect } from '@playwright/test';
import { AxeBuilder } from '@axe-core/playwright';
import { data } from '../resources/locator';

test.skip('should not have any automatically detectable accessibility issues', async ({ page }) => {
  await page.goto(data.url);


  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
  //console.log(accessibilityScanResults.violations);
});

test('should not have any automatically detectable WCAG A or AA violations', async ({ page }) => {
  await page.goto(data.url);


  const accessibilityScanResults = await new AxeBuilder({ page })
  .withTags(data.accessiblity)
  .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});