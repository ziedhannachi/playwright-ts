import { Given, Then, When } from "@cucumber/cucumber";
import { CustomWorld } from '../utils/Custom-world';
import { MESSAGE } from '../constants/Const';
import loginPage from "../pages/LoginPage";
import { DataTable } from "@cucumber/cucumber";
import { Page, expect } from '@playwright/test';



Given('I am a user on login page', async function (this: CustomWorld) {
    const page = this.page!;
    const contactPageUrl = (this.parameters.appurl);
    await page.goto(contactPageUrl);
    const contactPage = new loginPage(page);
  }
);

When('I fill all informations in the form', async function (this: CustomWorld, dataTable: DataTable) {
  let page = this.page!;
  const contactPage = new loginPage(page);
  const formData = dataTable.rowsHash();
  await contactPage.fillFirstName(formData.Login);
  await contactPage.fillLastName(formData.Password);
}
);

When('I submit the credtial', async function (this: CustomWorld) {
  const page = this.page!;
  const contactPage = new loginPage(page);
  await contactPage.clickSubmitButton();
}
);

Then('I m redirected to the home page', async function (this: CustomWorld) {
  const page = this.page!;
  const contactPage = new loginPage(page);
  expect(await contactPage.htmlPageTitel()).toEqual(MESSAGE.pagetitle);
  
}
);
