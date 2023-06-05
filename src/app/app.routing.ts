import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { MenuComponent } from "./menu/menu.component";
import { PagoComponent } from "./pago/pago.component";
const appRoutes = [
    { path: "menu", component: MenuComponent },
    { path: "pago", component: PagoComponent },
  ];
export const routing = RouterModule.forRoot(appRoutes);