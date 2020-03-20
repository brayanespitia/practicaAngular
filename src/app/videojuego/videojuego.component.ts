import { Component, OnInit, DoCheck, OnDestroy, ɵConsole } from "@angular/core";

@Component({
  selector: "videojuego",
  templateUrl: "./videojuego.component.html"
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
  public titulo: string;
  public listado: string;

  constructor() {
    this.titulo = "componente de videojuegos";
    this.listado = " listados de los juegos mas pro";
    // console.log(" se cargo el componente: videojuego.ts");
  }
  ngDoCheck() {
    //  console.log("docheck ejecutado");
  }
  ngOnInit() {
    //console.log("on init ejecutado");
  }

  cambiarTitulo() {
    // this.titulo = "nuevo titulo del componente";
  }

  ngOnDestroy() {
    //  console.log("ondestroy ejecutado");
  }
}
