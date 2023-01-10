import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { SingleviewComponent } from './singleview/singleview.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'shopping', component:ShopComponent},
  {path:'cart',component:CartComponent},
  {path:'singleview',component:SingleviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
