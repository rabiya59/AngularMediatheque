import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './_pages/home-page/home-page/home-page.component';
import { NotFoundComponent } from './_pages/not-found/not-found/not-found.component';
import { ProductPageComponent } from './products/product-page/product-page.component';


const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component: HomePageComponent },
  {path: 'products', component: ProductPageComponent },
  {path: 'not-found', component: NotFoundComponent },
  {path: '**', redirectTo:'not-found', pathMatch:'full' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
