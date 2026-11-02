import { Page, Locator } from "@playwright/test";

export class NavigationPage {
    readonly navigationPageAuth : Locator
    readonly navigationPageAuthLogin : Locator
    readonly navigationPageAuthRegister: Locator
    readonly navigationPageForms: Locator
    readonly navigationPageFprmLayouts: Locator

    constructor (page : Page){
    this.page = page;
    this.navigationPageAuth = page.getByText("Auth");    
    }
}
  async formLayoutsPage() {
    await this.page.getByText("Forms").click();
    await this.page.getByText("Form Layouts").click();
  }
  
  async formAuthPage() {
    await this.page.getByText("Auth").click();
    await this.page.getByText("Login").click();
  }

  async formAuthPage() {
    await this.page.getByText("Auth").click();
    await this.page.getByText("Register").click();
  }