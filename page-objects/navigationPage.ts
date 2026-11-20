import { Page, Locator } from "@playwright/test";

export class NavigationPage {
  readonly page: Page;
  readonly navigationPageAuth: Locator;
  readonly navigationPageAuthLogin: Locator;
  readonly navigationPageAuthRegister: Locator;
  readonly navigationPageForms: Locator;
  readonly navigationPageFormLayouts: Locator;
  readonly navigationPageMoadalandOverlays: Locator;
  readonly navigationPageDialog: Locator;
  readonly navigationPagePopover: Locator;
  readonly navigationPageToastr: Locator;
  readonly navigationToTablesDataPage: Locator;
  readonly navigationToSmartTablePage: Locator;
  readonly navigationExtraComponents: Locator;
  readonly navigationCalendar: Locator;
  readonly navigationDragDrop: Locator;
  readonly navigationPDFDownload: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigationPageAuth = page.getByText("Auth");
    this.navigationPageAuthLogin = page.getByText("Login");
    this.navigationPageAuthRegister = page.getByText("Register");
    this.navigationPageForms = page.getByText("Forms");
    this.navigationPageFormLayouts = page.getByText("Form Layouts");
    this.navigationPageMoadalandOverlays = page.getByText("Modal & Overlays");
    this.navigationPageDialog = page.getByText("Dialog");
    this.navigationPagePopover = page.getByText("Popover");
    this.navigationPageToastr = page.getByText("Toastr");
    this.navigationToTablesDataPage = page.getByText("Tables & Data");
    this.navigationToSmartTablePage = page.getByText("Smart Table");
    this.navigationExtraComponents = page.getByText("Extra Components");
    this.navigationCalendar = page.getByText("Calendar");
    this.navigationDragDrop = page.getByText("Drag & Drop");
    this.navigationPDFDownload = page.getByText("PDF Download");
  }

  async navigateToLoginPage() {
    await this.navigationPageAuth.click();
    await this.navigationPageAuthLogin.click();
  }
  async navigateToRegisterPage() {
    await this.navigationPageAuth.click();
    await this.navigationPageAuthRegister.click();
  }
  async navigateToFormLayoutsPage() {
    await this.navigationPageForms.click();
    await this.navigationPageFormLayouts.click();
  }
  async navigationToDialogPage() {
    await this.navigationPageMoadalandOverlays.click();
    await this.navigationPageDialog.click();
  }
  async navigationToPopoverPage() {
    await this.navigationPageMoadalandOverlays.click();
    await this.navigationPagePopover.click();
  }
  async navigationToPageToastr() {
    await this.navigationPageMoadalandOverlays.click();
    await this.navigationPageToastr.click();
  }

  async navigationToTablesPage() {
    await this.navigationToTablesDataPage.click();
    await this.navigationToSmartTablePage.click();
  }

  async navigationToExtraCalendarPage() {
    await this.navigationExtraComponents.click();
    await this.navigationCalendar.click();
  }
  async navigationToExtraDragDropPage() {
    await this.navigationExtraComponents.click();
    await this.navigationDragDrop.click();
  }
  async navigationToExtraPDFDownloadPage() {
    await this.navigationExtraComponents.click();
    await this.navigationPDFDownload.click();
  }
}
