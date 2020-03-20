import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
import { ZapatillaService } from "../services/zapatilla.service";

@Component({
  selector: "zapatillas",
  templateUrl: "./zapatillas.component.html",
  providers: [ZapatillaService]
})
export class ZapatillasComponent implements OnInit {
  public titulo: string = "Componente de zapatillas";
  public zapatillas: Array<Zapatilla>;
  public marcas: string[];
  public color: string;
  public mi_marca: string;

  constructor(private _zapatillaService: ZapatillaService) {
    this.mi_marca = "fila";
    this.color = "blue";
    this.marcas = new Array();
  }
  ngOnInit() {
    this.zapatillas = this._zapatillaService.getZapatillas();
    alert(this._zapatillaService.getTexto());
    this.Getmarcas();
  }

  Getmarcas() {
    this.zapatillas.forEach((Zapatilla, index) => {
      if (this.marcas.indexOf(Zapatilla.marca) < 0) {
        this.marcas.push(Zapatilla.marca);
      }
    });
    console.log(this.marcas);
  }
  getMarca() {
    alert(this.mi_marca);
  }
  addMarca() {
    this.marcas.push(this.mi_marca);
  }
  borrarMarca(index) {
    //delete this.marcas[index];
    this.marcas.splice(index, 1);
  }
  onBlur() {
    console.log("has salido del input");
  }
  mostrarPalabra() {
    alert(this.mi_marca);
  }
}
