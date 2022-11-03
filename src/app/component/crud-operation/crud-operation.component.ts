import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crud-operation',
  templateUrl: './crud-operation.component.html',
  styleUrls: ['./crud-operation.component.css']
})
export class CrudOperationComponent implements OnInit {
  form: FormGroup = new FormGroup({})
  usersdtails: Array<any>=[]
  data:Array<any>=[]
  value:any

  constructor(  private _fb:FormBuilder,) {

   }

  ngOnInit(): void {

    this.form= this._fb.group({
      name:new FormControl(''),
      address:new FormControl(""),
      mobile:new FormControl("")
    });

   
   const d=JSON.parse(localStorage.getItem('data')||"")
     console.log(d);
   this.data=d
  }
  users: Array<any>=[]

  save(){
   console.log(this.form.value)
   this.users.push(
   this.form.value
  )
 localStorage.setItem("data",JSON.stringify(this.users))
  }
 
  valuepatch(e:any){
    this.data.filter((e:any)=>{
      console.log("gjjgh",e)
      this.form.patchValue(e)
    })
   
    //console.log(e)
  }
remove(e:any){
   this.data.splice(e)
}
 // console.log()



}


