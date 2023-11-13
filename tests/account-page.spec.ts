import { test, expect } from "@playwright/test";

//use beforeEach condition so it will run before each test
test.beforeEach("navigate to the account page from the plans page", async ({ page }) => {
  await page.goto('https://wpengine.com/au/plans/');
  await expect(page.getByText('WORDPRESS HOSTING BENEFITS')).toBeVisible()
  await page.waitForTimeout(2000)
  await page.getByRole('link', {name: 'Buy Now', exact: true}).first().click() 
  await page.waitForTimeout(2000)
  await expect(page.getByText('Checkout')).toBeVisible();
});

test("test that the price got updated at checkout when the checkbox for Site Monitoring is checked", async ({ page }) => {
 const initialTotal = await page.locator('.total')
 const valueText = await initialTotal.innerText();
const valueNumber = parseInt(valueText.replace(/[^\d.]/g, ''), 10);
 //const siteMonitoring = await page.locator('.annual.prices')
 //const totalPrice = initialTotal + siteMonitoring
 await page.getByRole('checkbox', {name:'Want us to monitor your site for issues?'}).check();
 // await expect(page.locator('.total')).toHaveText('A$406.00')
await expect(page.locator('.total')).toHaveText('A$'+valueNumber)

});

