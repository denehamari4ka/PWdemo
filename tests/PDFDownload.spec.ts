import { test, expect } from "./fixtures";
import { PDFDownloadPage } from "../page-objects/pdfDownload";

test("Download PDF file", async ({ page, navigation }) => {
  const pdfDownload = new PDFDownloadPage(page);
  await navigation.navigationToExtraPDFDownloadPage();
  const downloadPromise = page.waitForEvent("download");
  await pdfDownload.downloadPDF();
  const download = await downloadPromise;
  await expect(download.suggestedFilename()).toBe("invoice-sample.pdf");
  expect(await download.failure()).toBeNull();
});
