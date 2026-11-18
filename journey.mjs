export default async function ({ page, baseURL, expect }) {
  await page.goto(baseURL);
  await expect(page.getByLabel('Count')).toHaveText('0');
  await page.getByRole('button', { name: 'Add one' }).click();
  await expect(page.getByLabel('Count')).toHaveText('1');
  await page.getByRole('button', { name: 'Add one' }).click();
  await expect(page.getByLabel('Count')).toHaveText('2');
}
