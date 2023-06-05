import { Component , ElementRef, OnInit, ViewChild } from '@angular/core';
declare var paypal;

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})

export class PagoComponent implements OnInit {
  @ViewChild('paypal',{static:true}) paypalElement : ElementRef;

  producto={
    descripcion:'venta',
    precio : 100000
  }


  ngOnInit() {
    paypal
    .Buttons({
      Createorder:(data,actions)=>{
        return actions.order.create({
          purchase_units:[
            {
              description: this.producto.descripcion,
              amount : {
                currency_code: 'CLP',
                value :this.producto.precio
              }
            }
          ]
        })
      },
      onApprove:async (data,actions) =>{
        const order = await actions.order.capture();
        console.log(order);
      },
      onError:err=>{
        console.log(err);
      }
    })
    .render(this.paypalElement.nativeElement);
  }
}
