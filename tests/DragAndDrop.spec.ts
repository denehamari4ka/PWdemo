import { test, expect } from "./fixtures";
import { DragAndDropPage } from "../page-objects/dragAndDrop";

test("Drag and Drop Items to Done", async ({ page, navigation }) => {
  const dragAndDropPage = new DragAndDropPage(page);

  await navigation.navigationToExtraDragDropPage();
  await dragAndDropPage.dragAndDropToDone();

  await expect(dragAndDropPage.doneItems).toHaveCount(4);
  await expect(dragAndDropPage.toDoItems).toHaveCount(0);
});

test("Drag and Drop Items to To Do", async ({ page, navigation }) => {
  const dragAndDropPage = new DragAndDropPage(page);

  await navigation.navigationToExtraDragDropPage();
  await dragAndDropPage.dragAndDropToDone();
  await dragAndDropPage.dragAndDropToDo();

  await expect(dragAndDropPage.doneItems).toHaveCount(0);
  await expect(dragAndDropPage.toDoItems).toHaveCount(4);
});
