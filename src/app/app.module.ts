import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './global/header/header.component';
import { MenuComponent } from './global/menu/menu.component';
import { CanastaComponent } from './global/canasta/canasta.component';
import { HomeComponent } from './global/pages/home/home.component';
import { appRouter } from './routing';
import { CategoriaComponent } from './global/pages/categoria/categoria.component';
import { SliderproductoComponent } from './global/slider/sliderproducto/sliderproducto.component';
import { ProductointernoComponent } from './global/slider/sliderproducto/productointerno/productointerno.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    CanastaComponent,
    HomeComponent,
    CategoriaComponent,
    SliderproductoComponent,
    ProductointernoComponent
  ],
  imports: [
    BrowserModule,
    appRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
