import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Password } from 'src/app/confirm-password';
//import { Passvalidators } from '../../confirm-password';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {
form=new FormGroup({})
submitted: boolean = false;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      name:new FormControl("",[Validators.required]),
      email:new FormControl("",[Validators.required,Validators.email]),
      password:new FormControl("",Validators.compose([Validators.required,Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{7,30}')])),
      confirmPassword:new FormControl("",Validators.compose([Validators.required])),
    },
    {
     // { validators: [Password('password', 'cnfrmpassword')] }
      validator:Password('password', 'confirmPassword')
    })
  }


  
save(){
  console.log(this.form.value)
  this.submitted=true
}
}
