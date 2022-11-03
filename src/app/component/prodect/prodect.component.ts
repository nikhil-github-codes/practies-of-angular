import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prodect',
  templateUrl: './prodect.component.html',
  styleUrls: ['./prodect.component.css']
})
export class ProdectComponent implements OnInit {

  constructor() { }
deletedpro:any
  ngOnInit(): void {
  }
productp:string[]=[]
  product(values:any){
     this.productp.push(values)
  }

  removepro(e:number){
   // this.deletedpro=this.productp[e]
   this.productp= this.productp.splice(e)
  }

}
