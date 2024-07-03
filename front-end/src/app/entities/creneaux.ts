import { Medecin } from "./medecin";

export class Creneaux {
  id?: number;
  hdebut?: string;
  hfin?: string;
  medecin?: Medecin;
  horaires?: string[];
}
