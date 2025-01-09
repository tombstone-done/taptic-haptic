import { Power } from "./power";

export interface GPIO {
    name: string;
    pin: number;
    dpin: number;
    power: Power;
}
