import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-singleview',
  templateUrl: './singleview.component.html',
  styleUrls: ['./singleview.component.css']
})
export class SingleviewComponent {
 


  
  items:any=[]
constructor(public ds : DataserviceService, private route:Router){
  this.ds.singleview(JSON.parse(localStorage.getItem('chosenshoe')||'')).subscribe((res:any)=>{
    this.items=res.message
   })
}



goback(){
  localStorage.removeItem("chosenone")
  this.route.navigateByUrl('shopping')
}

addcart(name:any,price:any,img:any,color:any,size:any){
 
  this.route.navigateByUrl('shopping')

  this.ds.addtocart(name,price,img,color,size)
  
}
}




