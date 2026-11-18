import { expect, test } from '@playwright/test';

test.describe('Google smoke', () => {
  test('opens the Google homepage', async ({ page }) => {
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle(/Google/i);
  });
});
