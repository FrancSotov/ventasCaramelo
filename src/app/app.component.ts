import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var paypal;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  @ViewChild('paypal',{static:true}) paypalElement : ElementRef;

  producto={
    descripcion:'venta',
    precio : 100000
  }
  title = 'ventasBar';

  ngOnInit() {
    paypal
    .Buttons()
    .render(this.paypalElement.nativeElement);
  }
}
