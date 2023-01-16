import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

items:any
  constructor(private route:Router, private ds:DataserviceService){
   
    setInterval(()=>{
      this.items=this.ds.cartitems.length;
    },300);
   

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
