import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { DetallesComponent } from './components/detalles/detalles.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'detalles/:id', component:DetallesComponent},
  { path: 'iniciarSesion', component: LoginComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'marca/:nombre', component: MarcasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
