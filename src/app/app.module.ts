import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ComprarComponent } from './components/comprar/comprar.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { MenuComponent } from './components/menu/menu.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CubosService } from '../services/ServiceCubos';

@NgModule({
  declarations: [
    AppComponent,
    CarritoComponent,
    ComprarComponent,
    DetallesComponent,
    HomeComponent,
    LoginComponent,
    MarcasComponent,
    MenuComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CubosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
