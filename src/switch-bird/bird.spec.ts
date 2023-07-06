import { Bird } from './bird';
import { BirdType } from './bird-type';

describe('Bird Test', () => {
  it('should return EUROPEAN speed', function () {
    const bird = new Bird();
    expect(bird.getSpeed(BirdType.EUROPEAN)).toBe(100);
  });
  it('should return AFRICAN speed', function () {
    const bird = new Bird();
    expect(bird.getSpeed(BirdType.AFRICAN, 2)).toBe(99);
  });
  it('should return NORWEGIAN_BLUE speed', function () {
    const bird = new Bird();
    expect(bird.getSpeed(BirdType.NORWEGIAN_BLUE)).toBe(240);
  });
});
