import { expect, Locator, Page } from '@playwright/test';
import { LOCATORS } from '../locators/LoginLocators';
import BaseAction from '../utils/basePage';



export default class LoginPage extends BaseAction{

  constructor(page: Page) {
    super(page);
  }


  public async fillFirstName(firstName: string) {
    await this.fillText(LOCATORS.login,firstName);
  }
  public async fillLastName(lastname: string) {
    await this.fillText(LOCATORS.password,lastname);
  }

  public async clickSubmitButton() {
    await this.clickElements(LOCATORS.submitButton);
  }
 
  public async htmlPageTitel() {
    return await this.getPageTitel();
  }

}