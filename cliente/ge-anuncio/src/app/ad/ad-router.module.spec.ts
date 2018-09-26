import { AdRouterModule } from './ad-router.module';

describe('AdRouterModule', () => {
  let adRouterModule: AdRouterModule;

  beforeEach(() => {
    adRouterModule = new AdRouterModule();
  });

  it('should create an instance', () => {
    expect(adRouterModule).toBeTruthy();
  });
});
