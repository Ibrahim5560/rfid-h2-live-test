import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import ImagesComponentsPage from './images.page-object';
import ImagesUpdatePage from './images-update.page-object';
import {
  waitUntilDisplayed,
  waitUntilAnyDisplayed,
  click,
  getRecordsCount,
  waitUntilHidden,
  waitUntilCount,
  isVisible,
} from '../../util/utils';
import path from 'path';

const expect = chai.expect;

describe('Images e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let imagesComponentsPage: ImagesComponentsPage;
  let imagesUpdatePage: ImagesUpdatePage;
  const username = process.env.E2E_USERNAME ?? 'admin';
  const password = process.env.E2E_PASSWORD ?? 'admin';

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.waitUntilDisplayed();
    await signInPage.username.sendKeys(username);
    await signInPage.password.sendKeys(password);
    await signInPage.loginButton.click();
    await signInPage.waitUntilHidden();
    await waitUntilDisplayed(navBarPage.entityMenu);
    await waitUntilDisplayed(navBarPage.adminMenu);
    await waitUntilDisplayed(navBarPage.accountMenu);
  });

  beforeEach(async () => {
    await browser.get('/');
    await waitUntilDisplayed(navBarPage.entityMenu);
    imagesComponentsPage = new ImagesComponentsPage();
    imagesComponentsPage = await imagesComponentsPage.goToPage(navBarPage);
  });

  it('should load Images', async () => {
    expect(await imagesComponentsPage.title.getText()).to.match(/Images/);
    expect(await imagesComponentsPage.createButton.isEnabled()).to.be.true;
  });

  it('should create and delete Images', async () => {
    const beforeRecordsCount = (await isVisible(imagesComponentsPage.noRecords)) ? 0 : await getRecordsCount(imagesComponentsPage.table);
    imagesUpdatePage = await imagesComponentsPage.goToCreateImages();
    await imagesUpdatePage.enterData();
    expect(await isVisible(imagesUpdatePage.saveButton)).to.be.false;

    expect(await imagesComponentsPage.createButton.isEnabled()).to.be.true;
    await waitUntilDisplayed(imagesComponentsPage.table);
    await waitUntilCount(imagesComponentsPage.records, beforeRecordsCount + 1);
    expect(await imagesComponentsPage.records.count()).to.eq(beforeRecordsCount + 1);

    await imagesComponentsPage.deleteImages();
    if (beforeRecordsCount !== 0) {
      await waitUntilCount(imagesComponentsPage.records, beforeRecordsCount);
      expect(await imagesComponentsPage.records.count()).to.eq(beforeRecordsCount);
    } else {
      await waitUntilDisplayed(imagesComponentsPage.noRecords);
    }
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
