import { test, expect } from '@playwright/test'
import { faker } from '@faker-js/faker';

const personName = faker.person.firstName();
const email = faker.internet.email()

//WPEngine test cases from selecting a plan until the checkout process (website is randomly selected)

test.beforeEach('navigate from the pricing page', async ({page}) => {
   await page.goto('https://wpengine.com/au/plans/');
   await expect(page.getByText('WORDPRESS HOSTING BENEFITS')).toBeVisible()
   await page.waitForTimeout(2000)
   await page.getByRole('link', {name: 'Buy Now', exact: true}).first().click() 
   await page.waitForTimeout(2000)
   await expect(page.getByText('Checkout')).toBeVisible();
   
});

test ('fill in all the form in the payment page correctly', async ({page}) => {
    await page.getByText('First Name').fill(personName);
    await page.getByText('Last Name').fill(personName);
    await page.getByText('Email').fill(email);
    await page.getByText('Account name').fill(personName+123456);
    await page.locator("[name='signup[data_center]']").selectOption('au')
    await expect(page.getByRole('button', {name : 'Continue to payment', exact : true})).toBeVisible();
    await page.getByText('Name on card').fill(personName)
});

test ('fill in all the form in the checkout page correctly', async ({page}) => {
  await page.getByText('First Name').fill(personName);
  await page.getByText('Last Name').fill(personName);
  await page.getByText('Email').fill(email);
  await page.getByText('Account name').fill(personName+123456);
  await page.locator("[name='signup[data_center]']").selectOption('au');
  await expect(page.getByRole('button', {name : 'Continue to payment', exact : true})).toBeVisible();
});

