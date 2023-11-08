import { test, expect } from "@playwright/test";

//use beforeEach condition so it will run before each test
test.beforeEach("test to navigate to this URL", async ({ page }) => {
  await page.goto("https://kinsta.com/");
});

//start test
test("test to go to the pricing page", async ({ page }) => {
  await page.getByRole("button", { name: "Wordpress" }).click();
  await page.getByRole("link", { name: "Pricing", exact: true }).last().click();
  await expect(
    page.getByText("Managed WordPress Hosting Pricing")
  ).toBeVisible();
});

