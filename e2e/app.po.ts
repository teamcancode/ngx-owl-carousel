import { browser, by, element } from 'protractor';

export class TccNgOwlCarouselPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tcc-root h1')).getText();
  }
}
