import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.css']
})
export class FormarrayComponent implements OnInit {
form:FormGroup=new FormGroup({});
  constructor(private fb:FormBuilder) {
    this.form=this.fb.group({
      name:new FormControl(''),
      adress: this.fb.array([])
    })
   }

  ngOnInit(): void {
   
    
  }

 save(){
  console.log(this.form.value)
 }



//   adress():FormArray{
   
//   return this.form.get('adress') as FormArray;
 
//  }

// add(){
// this.adress.push(this.newadress())
// }

//  newadress():FormGroup{
//   return this.fb.group({
//     city:[''],
//     country:['']
//   })
//  }


 add(): FormArray{
  return this.form.get('adress') as FormArray;
 
}

addadress(){
  this.add().push(this.newadress())
}

newadress():FormGroup{
    return this.fb.group({
      city:[],
         country:[]
   
  })
}

remove(e:any){
 const adress= this.form.get('adress') as FormArray;
 adress.removeAt(e)
}


}
