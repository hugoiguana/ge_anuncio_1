import { GeRoutingModule } from './ge-routing.module';

describe('GeRoutingModule', () => {
  let geRoutingModule: GeRoutingModule;

  beforeEach(() => {
    geRoutingModule = new GeRoutingModule();
  });

  it('should create an instance', () => {
    expect(geRoutingModule).toBeTruthy();
  });
});
