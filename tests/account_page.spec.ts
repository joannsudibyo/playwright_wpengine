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

//start test
test("test to go to the pricing page", async ({ page }) => {
  await page.getByRole("button", { name: "Wordpress" }).click();
});

