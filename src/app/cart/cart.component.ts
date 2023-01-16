import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent   implements OnInit {
items:any

cost:any=this.ds.cost;

  constructor(private ds:DataserviceService, private route:Router){


      
      this.items=this.ds.cartitems
    
    
    this.ds.loadcart()
    
  }


  ngOnInit(){
    
  }
    removefromcart(name:any){
this.ds.removefromcart(name)
// alert("Nike "+name+" removed")
this.route.navigateByUrl('shopping')
    }

  
    removeall(){
      // alert("Emptied Cart")
      this.route.navigateByUrl('shopping')
      this.ds.removeall()
    }


    cancel(){
      this.route.navigateByUrl('cart')
    }

pay(){
  
  this.ds.removeall();
  this.route.navigateByUrl('')
  
}




  }
