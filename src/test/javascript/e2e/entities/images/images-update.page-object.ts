import { element, by, ElementFinder } from 'protractor';
import { waitUntilDisplayed, waitUntilHidden, isVisible } from '../../util/utils';

import path from 'path';

const expect = chai.expect;

const fileToUpload = '../../../../../../src/main/webapp/content/images/logo-jhipster.png';
const absolutePath = path.resolve(__dirname, fileToUpload);
export default class ImagesUpdatePage {
  pageTitle: ElementFinder = element(by.id('rfidh2LiveTestApp.images.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  guidInput: ElementFinder = element(by.css('input#images-guid'));
  plateInput: ElementFinder = element(by.css('input#images-plate'));
  imageLpInput: ElementFinder = element(by.css('input#images-imageLp'));
  imageThumbInput: ElementFinder = element(by.css('input#images-imageThumb'));
  anprInput: ElementFinder = element(by.css('input#images-anpr'));
  rfidInput: ElementFinder = element(by.css('input#images-rfid'));
  dataStatusInput: ElementFinder = element(by.css('input#images-dataStatus'));
  gantryInput: ElementFinder = element(by.css('input#images-gantry'));
  laneInput: ElementFinder = element(by.css('input#images-lane'));
  kphInput: ElementFinder = element(by.css('input#images-kph'));
  ambushInput: ElementFinder = element(by.css('input#images-ambush'));
  directionInput: ElementFinder = element(by.css('input#images-direction'));
  vehicleInput: ElementFinder = element(by.css('input#images-vehicle'));
  issueInput: ElementFinder = element(by.css('input#images-issue'));
  statusInput: ElementFinder = element(by.css('input#images-status'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setGuidInput(guid) {
    await this.guidInput.sendKeys(guid);
  }

  async getGuidInput() {
    return this.guidInput.getAttribute('value');
  }

  async setPlateInput(plate) {
    await this.plateInput.sendKeys(plate);
  }

  async getPlateInput() {
    return this.plateInput.getAttribute('value');
  }

  async setImageLpInput(imageLp) {
    await this.imageLpInput.sendKeys(imageLp);
  }

  async getImageLpInput() {
    return this.imageLpInput.getAttribute('value');
  }

  async setImageThumbInput(imageThumb) {
    await this.imageThumbInput.sendKeys(imageThumb);
  }

  async getImageThumbInput() {
    return this.imageThumbInput.getAttribute('value');
  }

  async setAnprInput(anpr) {
    await this.anprInput.sendKeys(anpr);
  }

  async getAnprInput() {
    return this.anprInput.getAttribute('value');
  }

  async setRfidInput(rfid) {
    await this.rfidInput.sendKeys(rfid);
  }

  async getRfidInput() {
    return this.rfidInput.getAttribute('value');
  }

  async setDataStatusInput(dataStatus) {
    await this.dataStatusInput.sendKeys(dataStatus);
  }

  async getDataStatusInput() {
    return this.dataStatusInput.getAttribute('value');
  }

  async setGantryInput(gantry) {
    await this.gantryInput.sendKeys(gantry);
  }

  async getGantryInput() {
    return this.gantryInput.getAttribute('value');
  }

  async setLaneInput(lane) {
    await this.laneInput.sendKeys(lane);
  }

  async getLaneInput() {
    return this.laneInput.getAttribute('value');
  }

  async setKphInput(kph) {
    await this.kphInput.sendKeys(kph);
  }

  async getKphInput() {
    return this.kphInput.getAttribute('value');
  }

  async setAmbushInput(ambush) {
    await this.ambushInput.sendKeys(ambush);
  }

  async getAmbushInput() {
    return this.ambushInput.getAttribute('value');
  }

  async setDirectionInput(direction) {
    await this.directionInput.sendKeys(direction);
  }

  async getDirectionInput() {
    return this.directionInput.getAttribute('value');
  }

  async setVehicleInput(vehicle) {
    await this.vehicleInput.sendKeys(vehicle);
  }

  async getVehicleInput() {
    return this.vehicleInput.getAttribute('value');
  }

  async setIssueInput(issue) {
    await this.issueInput.sendKeys(issue);
  }

  async getIssueInput() {
    return this.issueInput.getAttribute('value');
  }

  async setStatusInput(status) {
    await this.statusInput.sendKeys(status);
  }

  async getStatusInput() {
    return this.statusInput.getAttribute('value');
  }

  async save() {
    await this.saveButton.click();
  }

  async cancel() {
    await this.cancelButton.click();
  }

  getSaveButton() {
    return this.saveButton;
  }

  async enterData() {
    await waitUntilDisplayed(this.saveButton);
    await this.setGuidInput('guid');
    await waitUntilDisplayed(this.saveButton);
    await this.setPlateInput('plate');
    await waitUntilDisplayed(this.saveButton);
    await this.setImageLpInput(absolutePath);
    await waitUntilDisplayed(this.saveButton);
    await this.setImageThumbInput(absolutePath);
    await waitUntilDisplayed(this.saveButton);
    await this.setAnprInput('anpr');
    await waitUntilDisplayed(this.saveButton);
    await this.setRfidInput('rfid');
    await waitUntilDisplayed(this.saveButton);
    await this.setDataStatusInput('dataStatus');
    await waitUntilDisplayed(this.saveButton);
    await this.setGantryInput('5');
    await waitUntilDisplayed(this.saveButton);
    await this.setLaneInput('5');
    await waitUntilDisplayed(this.saveButton);
    await this.setKphInput('5');
    await waitUntilDisplayed(this.saveButton);
    await this.setAmbushInput('5');
    await waitUntilDisplayed(this.saveButton);
    await this.setDirectionInput('5');
    await waitUntilDisplayed(this.saveButton);
    await this.setVehicleInput('5');
    await waitUntilDisplayed(this.saveButton);
    await this.setIssueInput('issue');
    await waitUntilDisplayed(this.saveButton);
    await this.setStatusInput('status');
    await this.save();
    await waitUntilHidden(this.saveButton);
  }
}
