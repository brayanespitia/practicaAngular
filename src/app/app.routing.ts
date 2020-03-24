// importar los modulos del router de angular

import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//improtar componentes
import { HomeComponent } from "./home/home.component";
import { ZapatillasComponent } from "./zapatillas/zapatillas.component";
import { CursosComponent } from "./cursos/cursos.component";
import { VideojuegoComponent } from "./videojuego/videojuego.component";
import { ExternoComponent } from "./externo/externo.component";
import { ContactoComponent } from "./contacto/contacto.component";

//array de rutas

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "zapatillas", component: ZapatillasComponent },
  { path: "videojuegos", component: VideojuegoComponent },
  { path: "cursos", component: CursosComponent },
  { path: "cursos/:nombre/:followers", component: CursosComponent },
  { path: "externo", component: ExternoComponent },
  { path: "contacto", component: ContactoComponent },
  { path: "**", component: HomeComponent }
];

//Esxportar el modulo del router

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
