import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PagoComponent } from './pago/pago.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PagoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
