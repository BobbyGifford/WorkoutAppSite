import { WorkoutAppPage } from './app.po';

describe('workout-app App', () => {
  let page: WorkoutAppPage;

  beforeEach(() => {
    page = new WorkoutAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
