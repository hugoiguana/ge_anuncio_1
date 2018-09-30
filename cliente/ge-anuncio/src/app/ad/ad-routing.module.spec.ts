import { AdRoutingModule } from './ad-routing.module';

describe('AdRoutingModule', () => {
  let adRoutingModule: AdRoutingModule;

  beforeEach(() => {
    adRoutingModule = new AdRoutingModule();
  });

  it('should create an instance', () => {
    expect(adRoutingModule).toBeTruthy();
  });
});
