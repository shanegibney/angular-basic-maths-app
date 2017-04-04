import { BasicMathsAppPage } from './app.po';

describe('basic-maths-app App', () => {
  let page: BasicMathsAppPage;

  beforeEach(() => {
    page = new BasicMathsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
