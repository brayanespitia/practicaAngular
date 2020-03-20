import { Injectable } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Injectable()
export class ZapatillaService {
  public zapatillas: Array<Zapatilla>;

  constructor() {
    this.zapatillas = [
      new Zapatilla("nike arimax", "nike", "verde", 140, false),
      new Zapatilla("rebook classic", "reebok", "blanco", 20, true),
      new Zapatilla("adiidas yeezey", "adidas", "negro", 90, true),
      new Zapatilla("nike jordan", "nike", "azul", 40, false),
      new Zapatilla("nike running", "nike", "ver", 60, true)
    ];
  }

  getTexto() {
    return "hola mundo desde un servio en angular";
  }

  getZapatillas(): Array<Zapatilla> {
    return this.zapatillas;
  }
}
