import { TfdgPage } from './app.po';

describe('tfdg App', () => {
  let page: TfdgPage;

  beforeEach(() => {
    page = new TfdgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
