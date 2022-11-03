import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {

@Input("productall") allproduct :string[]=[]
@Output("devpro") delproduc = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
   remove(index:number){
      this.delproduc.emit(index)
   }
}
