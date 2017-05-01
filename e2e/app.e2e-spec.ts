import { TradeTrackDataPage } from './app.po';

describe('trade-track-data App', function() {
  let page: TradeTrackDataPage;

  beforeEach(() => {
    page = new TradeTrackDataPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
