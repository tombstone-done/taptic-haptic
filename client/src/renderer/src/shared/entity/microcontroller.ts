import { MicrocontrollerStatus } from '../enums/microcontrollerStatus';
import { GPIO } from './gpio';

export interface Microcontroller {
  name: string;
  status: MicrocontrollerStatus;
  gpios: GPIO[];
  mDns: string;
}
