import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  cartcount:any=0
items:any
  constructor(private route:Router, private ds:DataserviceService){
   this.cartcount=localStorage.getItem('cartcount'||'');
   this.items=this.ds.cartitems

  }
 
  

home(){
  this.route.navigateByUrl('')
  
}

shop(){
  this.route.navigateByUrl('shopping') 
  
}

cart(){
  this.route.navigateByUrl('cart')
  
}

}
