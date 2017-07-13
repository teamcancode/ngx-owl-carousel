import { TccNgOwlCarouselPage } from './app.po';

describe('tcc-ng-owl-carousel App', () => {
  let page: TccNgOwlCarouselPage;

  beforeEach(() => {
    page = new TccNgOwlCarouselPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to tcc!!');
  });
});
