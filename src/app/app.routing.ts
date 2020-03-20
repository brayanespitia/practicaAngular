// importar los modulos del router de angular

import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//improtar componentes
import { HomeComponent } from "./home/home.component";
import { ZapatillasComponent } from "./zapatillas/zapatillas.component";
import { CursosComponent } from "./cursos/cursos.component";
import { VideojuegoComponent } from "./videojuego/videojuego.component";

//array de rutas

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "zapatillas", component: ZapatillasComponent },
  { path: "videojuegos", component: VideojuegoComponent },
  { path: "cursos", component: CursosComponent },
  { path: "cursos/:nombre/:followers", component: CursosComponent },
  { path: "**", component: HomeComponent }
];

//Esxportar el modulo del router

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
