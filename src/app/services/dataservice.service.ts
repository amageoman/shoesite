import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';





@Injectable({
  providedIn: 'root'
})
export class DataserviceService  implements OnInit  {

  cartitems:any=[]
   
cost:any=0
  
  constructor(private http:HttpClient ) {
    setInterval(()=>{
      this.loadcart()},500); 
   
     
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
    
    return this.http.post('http://localhost:3001/addtocart', body).subscribe((res:any)=>{
      
    
    this.cost += res.price;
    alert(res.message);
    
  },
  res=>{
    alert(res.error.message)
  })

  }
 

  loadcart(){
    const body={}
    
    

    return this.http.get('http://localhost:3001/loadcart',body).subscribe((res:any)=>{
      this.cartitems=res;
      

    });

    

  }
  
removefromcart(name:any){
  const body={name}
    

  return this.http.post('http://localhost:3001/removeitem', body).subscribe((res:any)=>{
    this.cost-=res.price;
  })

}



removeall(){

this.cost=0
  const body={}
    
    

  return this.http.post('http://localhost:3001/removeall',body).subscribe(res=>{
    res
  })

}


}
