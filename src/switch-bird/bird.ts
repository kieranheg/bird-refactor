import { BirdType } from './bird-type';
import { RuntimeException } from '@nestjs/core/errors/exceptions';

function getBaseSpeed(voltage?: number) {
  return !!voltage ? voltage : 100;
}

function getLoadFactor() {
  return 0.5;
}

export class Bird {
  public getSpeed(
    type: BirdType,
    coconuts?: number,
    isNailed?: boolean,
  ): number {
    switch (type) {
      case BirdType.EUROPEAN:
        return getBaseSpeed();
      case BirdType.AFRICAN:
        return getBaseSpeed() - getLoadFactor() * coconuts;
      case BirdType.NORWEGIAN_BLUE:
        return isNailed ? 0 : getBaseSpeed(240);
    }
    throw new RuntimeException('Should be unreachable');
  }
}
