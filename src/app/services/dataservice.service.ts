import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';





@Injectable({
  providedIn: 'root'
})
export class DataserviceService  implements OnInit  {

  cartitems:any=[]

  
  constructor(private http:HttpClient ) {
    
   
   }

   ngOnInit(): void {
     
   }

  loaditems(){

    const body={}
    
    

    return this.http.get('http://localhost:3001/loaditems',body)

  }
  
  singleview(name:any){
    const body={name}
    

    return this.http.post('http://localhost:3001/viewitem', body)
  

  }

  addtocart(name:any,price:any,img:any,color:any,size:any){

  
    const body={
      name,
      price,
      color,
      img,
      size
    }
    alert("Nike "+body.name+" of size "+body.size+" and color "+body.color+" added to cart")
    return this.http.post('http://localhost:3001/addtocart', body).subscribe(res=>{
      res
    })

  }
 

  loadcart(){
    const body={}
    
    

    return this.http.get('http://localhost:3001/loadcart',body).subscribe(res=>{
      this.cartitems=res;
      

    })
    

  }
  
removefromcart(name:any){
  const body={name}
    

  return this.http.post('http://localhost:3001/removeitem', body).subscribe(res=>{
    res
  })

}



removeall(){


  const body={}
    
    

  return this.http.post('http://localhost:3001/removeall',body).subscribe(res=>{
    res
  })

}


}
