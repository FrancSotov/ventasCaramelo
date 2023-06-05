import { NgModule } from "@angular/core";
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from "./app.component";
import { MenuComponent } from "./menu/menu.component";
import { PagoComponent } from "./pago/pago.component";

const routes: Routes =[
  {path:'home',component:AppComponent},
  {path:'menu',component:MenuComponent},
  {path:'pago',component:PagoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}