import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './_commons/navbar/navbar/navbar.component';
import { FooterComponent } from './_commons/footer/footer/footer.component';
import { HomePageComponent } from './_pages/home-page/home-page/home-page.component';
import { NotFoundComponent } from './_pages/not-found/not-found/not-found.component';
import { ProductCardsComponent } from './products/product-cards/product-cards.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductPageComponent } from './products/product-page/product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    NotFoundComponent,
    ProductCardsComponent,
    ProductListComponent,
    ProductPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
