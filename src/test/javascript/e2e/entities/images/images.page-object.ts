import { element, by, ElementFinder, ElementArrayFinder } from 'protractor';

import { waitUntilAnyDisplayed, waitUntilDisplayed, click, waitUntilHidden, isVisible } from '../../util/utils';

import NavBarPage from './../../page-objects/navbar-page';

import ImagesUpdatePage from './images-update.page-object';

const expect = chai.expect;
export class ImagesDeleteDialog {
  deleteModal = element(by.className('modal'));
  private dialogTitle: ElementFinder = element(by.id('rfidh2LiveTestApp.images.delete.question'));
  private confirmButton = element(by.id('jhi-confirm-delete-images'));

  getDialogTitle() {
    return this.dialogTitle;
  }

  async clickOnConfirmButton() {
    await this.confirmButton.click();
  }
}

export default class ImagesComponentsPage {
  createButton: ElementFinder = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('div table .btn-danger'));
  title: ElementFinder = element(by.id('images-heading'));
  noRecords: ElementFinder = element(by.css('#app-view-container .table-responsive div.alert.alert-warning'));
  table: ElementFinder = element(by.css('#app-view-container div.table-responsive > table'));

  records: ElementArrayFinder = this.table.all(by.css('tbody tr'));

  getDetailsButton(record: ElementFinder) {
    return record.element(by.css('a.btn.btn-info.btn-sm'));
  }

  getEditButton(record: ElementFinder) {
    return record.element(by.css('a.btn.btn-primary.btn-sm'));
  }

  getDeleteButton(record: ElementFinder) {
    return record.element(by.css('a.btn.btn-danger.btn-sm'));
  }

  async goToPage(navBarPage: NavBarPage) {
    await navBarPage.getEntityPage('images');
    await waitUntilAnyDisplayed([this.noRecords, this.table]);
    return this;
  }

  async goToCreateImages() {
    await this.createButton.click();
    return new ImagesUpdatePage();
  }

  async deleteImages() {
    const deleteButton = this.getDeleteButton(this.records.last());
    await click(deleteButton);

    const imagesDeleteDialog = new ImagesDeleteDialog();
    await waitUntilDisplayed(imagesDeleteDialog.deleteModal);
    expect(await imagesDeleteDialog.getDialogTitle().getAttribute('id')).to.match(/rfidh2LiveTestApp.images.delete.question/);
    await imagesDeleteDialog.clickOnConfirmButton();

    await waitUntilHidden(imagesDeleteDialog.deleteModal);

    expect(await isVisible(imagesDeleteDialog.deleteModal)).to.be.false;
  }
}
