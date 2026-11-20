import { Page, Locator } from "@playwright/test";

export class PdfDownloadPage {
  readonly page: Page;
  readonly DownloadPDFButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.DownloadPDFButton = page.getByRole("button", {
      name: "Download PDF",
    });
  }
  async DownloadPDF() {
    await this.DownloadPDFButton.click();
  }
}
