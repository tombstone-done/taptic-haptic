import { MicrocontrollerStatus } from '@renderer/shared/enums';
import { Microcontroller } from '@renderer/shared/entity';

export const esp8266: Microcontroller = {
  name: 'ESP8266',
  status: MicrocontrollerStatus.UNKNOWN,
  mDns: 'esp8266.local',
  gpios: [
    {
      name: 'GPIO16',
      pin: 16,
      dpin: 0,
      power: {
        min: 0,
        max: 1
      }
    },
    {
      name: 'GPIO5',
      pin: 5,
      dpin: 1,
      power: {
        min: 0,
        max: 1
      }
    },
    {
      name: 'GPIO4',
      pin: 4,
      dpin: 2,
      power: {
        min: 0,
        max: 1
      }
    },
    {
      name: 'GPIO0',
      pin: 0,
      dpin: 3,
      power: {
        min: 0,
        max: 1
      }
    },
    {
      name: 'GPIO14',
      pin: 14,
      dpin: 5,
      power: {
        min: 0,
        max: 1
      }
    },
    {
      name: 'GPIO12',
      pin: 12,
      dpin: 6,
      power: {
        min: 0,
        max: 1
      }
    },
    {
      name: 'GPIO13',
      pin: 13,
      dpin: 7,
      power: {
        min: 0,
        max: 1
      }
    },
    {
      name: 'GPIO15',
      pin: 15,
      dpin: 8,
      power: {
        min: 0,
        max: 1
      }
    }
  ]
} as const;
