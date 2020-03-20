import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Component({
  selector: "zapatillas",
  templateUrl: "./zapatillas.component.html"
})
export class ZapatillasComponent implements OnInit {
  public titulo: string = "Componente de zapatillas";
  public zapatillas: Array<Zapatilla>;
  public marcas: string[];
  public color: string;
  public mi_marca: string;

  constructor() {
    this.mi_marca = "fila";
    this.color = "blue";
    this.marcas = new Array();
    this.zapatillas = [
      new Zapatilla("nike arimax", "nike", "verde", 140, false),
      new Zapatilla("rebook classic", "reebok", "blanco", 20, true),
      new Zapatilla("adiidas yeezey", "adidas", "negro", 90, true),
      new Zapatilla("nike jordan", "nike", "azul", 40, false),
      new Zapatilla("nike running", "nike", "ver", 60, true)
    ];
  }
  ngOnInit() {
    console.log(this.zapatillas);
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
