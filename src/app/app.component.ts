import { Component } from '@angular/core';
import { DataserviceService } from './services/dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoesite';


  constructor(private ds:DataserviceService){
    this.ds.loadcart()
    
  }
}
