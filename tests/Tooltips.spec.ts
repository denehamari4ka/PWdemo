import { test, expect } from "./fixtures";
import { TooltipPage } from "../page-objects/tooltips";

test("Hover over Left button", async ({ page, navigation }) => {
  const tooltipPage = new TooltipPage(page);

  await navigation.navigationToPopoverPage();
  await expect(tooltipPage.leftbuttonTooltip).toBeHidden();
  await tooltipPage.hoverOverLeftButton();
  await expect(tooltipPage.leftbuttonTooltip).toBeVisible();
  await expect(tooltipPage.leftbuttonTooltip).toHaveText(
    "Hello, how are you today?",
  );

  await tooltipPage.moveMouseAway();
  await expect(tooltipPage.leftbuttonTooltip).toBeHidden();
});

test("Check position", async ({ page, navigation }) => {
  const tooltipPage = new TooltipPage(page);

  await navigation.navigationToPopoverPage();

  await tooltipPage.checkLeftButtonPosition();
  const targetBox = await tooltipPage.leftbutton.boundingBox();
  const tooltipBox = await tooltipPage.leftbuttonTooltip.boundingBox();

  await expect(tooltipBox!.x + tooltipBox!.width).toBeLessThanOrEqual(
    targetBox!.x,
  );
});

test("Hover over Hover Button", async ({ page, navigation }) => {
  const tooltipPage = new TooltipPage(page);

  await navigation.navigationToPopoverPage();
  await expect(tooltipPage.onClickButtonTooltip).toBeHidden();
  await tooltipPage.clickOnClickButton();
  await expect(tooltipPage.onClickButtonTooltip).toBeVisible();
  await expect(tooltipPage.onClickButtonTooltip).toHaveText(
    "Hello, how are you today?",
  );
});
