import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppserviceService } from '../aap.service/appservice.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private _appservice:AppserviceService) {this._appservice.username.subscribe(user =>{
    this.username=user
  }) }
// @Input() product:string[]=[]
// @Output()del=new EventEmitter<number>()
  ngOnInit(): void {
  }

//   delete(index:number){
//  this.del.emit(index)

//   }
 
//username="ghjgjgj"
username:any;

update(e:any){
  //this.username=e.value
  this._appservice.username.next(e.value)
}


}
