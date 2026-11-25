import { Page, Locator } from "@playwright/test";

export class PDFDownloadPage {
  readonly page: Page;
  readonly downloadPDFButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.downloadPDFButton = page.getByRole("button", {
      name: "Download PDF",
    });
  }
  async DownloadPDF() {
    await this.downloadPDFButton.click();
  }
}
