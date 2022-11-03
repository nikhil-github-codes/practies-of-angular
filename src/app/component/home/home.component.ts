import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../aap.service/appservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _appservice:AppserviceService) {this._appservice.username.subscribe(user =>{
    this.username=user
  }) }

  ngOnInit(): void {
  }
// product:string[]=[]
//   addproduct(e:any){
//      this.product.push(e)
//   }

//   remove(index:number){
//     this.product.splice(index)

//   }

// username="nikhil"
username:any;
update(e:any){
  //this.username=e.value
  this._appservice.username.next(e.value)
}

}
