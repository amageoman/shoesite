
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  items:any=[];

  constructor(private ds :DataserviceService, private route:Router){
    this.ds.loadcart()

  }

  ngOnInit(): void {
    this.ds.loaditems().subscribe((res:any)=>{
      this.items=res.message
      
      
      })
  }

  
  viewitem(name:any){
    this.route.navigateByUrl('singleview')
    
    localStorage.setItem("chosenshoe",JSON.stringify(name))
  }

}
