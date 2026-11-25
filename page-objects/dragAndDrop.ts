import { Page, Locator } from "@playwright/test";

export class DragAndDropPage {
  readonly page: Page;
  readonly dragDropGetGroceries: Locator;
  readonly dragDropFeedTheDog: Locator;
  readonly dragDropCleanMyRoom: Locator;
  readonly dragDropHangoutWithFriends: Locator;
  readonly dragDropDoneList: Locator;
  readonly dragDropToDoList: Locator;
  readonly doneItems: Locator;
  readonly toDoItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dragDropGetGroceries = page.getByText("Get groceries");
    this.dragDropFeedTheDog = page.getByText(" Feed the dog ");
    this.dragDropCleanMyRoom = page.getByText(" Clean my room ");
    this.dragDropHangoutWithFriends = page.getByText(" Hangout with friends ");
    this.dragDropDoneList = page.locator("#drop-list");
    this.dragDropToDoList = page.locator("#todo-list");
    this.doneItems = this.dragDropDoneList.locator(".example-box");
    this.toDoItems = this.dragDropToDoList.locator(".example-box");
  }
  async dragAndDropToDone() {
    await this.dragDropGetGroceries.dragTo(this.dragDropDoneList);
    await this.dragDropFeedTheDog.dragTo(this.dragDropDoneList);
    await this.dragDropCleanMyRoom.dragTo(this.dragDropDoneList);
    await this.dragDropHangoutWithFriends.dragTo(this.dragDropDoneList);
  }
  async dragAndDropToDo() {
    await this.dragDropGetGroceries.dragTo(this.dragDropDoneList);
    await this.dragDropFeedTheDog.dragTo(this.dragDropDoneList);
    await this.dragDropCleanMyRoom.dragTo(this.dragDropDoneList);
    await this.dragDropHangoutWithFriends.dragTo(this.dragDropDoneList);
    await this.dragDropGetGroceries.dragTo(this.dragDropToDoList);
    await this.dragDropFeedTheDog.dragTo(this.dragDropToDoList);
    await this.dragDropCleanMyRoom.dragTo(this.dragDropToDoList);
    await this.dragDropHangoutWithFriends.dragTo(this.dragDropToDoList);
  }
}
