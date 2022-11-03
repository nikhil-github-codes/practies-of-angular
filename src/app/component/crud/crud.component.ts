import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
 studentArr:any[]=[]
 student:any={
  studentId:"",
  fullname:"",
  mobile:"",
  email:"",
  address:""
 }
  constructor() { 
 
}

  ngOnInit(): void {
 const localdata=localStorage.getItem("studentList")
 if(localdata != null){
  this.studentArr=JSON.parse(localdata);
 }
 
  }


  onAddStudent(){
    const notnull = document.getElementById('studentModel');
    if(notnull != null){
      notnull.style.display='block'
    }
    this.student={
      studentId:0,
      fullname:"",
      mobile:"",
      email:"",
      address:""
     }
    
  }


  onCloseModel(){
    const notnull = document.getElementById('studentModel');
    if(notnull != null){
      notnull.style.display='none'
    }
  }

  saveStudent(data:any){
    this.student.studentId=this.studentArr.length + 1
    this.studentArr.push(this.student)
    this.onCloseModel()
    localStorage.setItem("studentList",JSON.stringify(this.studentArr))
    this.student={
      studentId:"",
      fullname:"",
      mobile:"",
      email:"",
      address:""
     }

  }

  onUpdate(){
   const record = this.studentArr.find(m => m.studentId == this.student.studentId)
   record.fullname =this.student.fullname
  //  record.mobile =this.student.mobile
  //  record.email =this.student.email
  //  record.address =this.student.address
   localStorage.setItem("studentList",JSON.stringify(this.studentArr))
   this.onCloseModel()
  }


  onDelete(ID:number){
    for(let i =0; i<this.studentArr.length; i++){
      if(this.studentArr[i].studentId == ID){
        this.studentArr.splice(i,1);
      }  
    }
    localStorage.setItem("studentList",JSON.stringify(this.studentArr))
    
  }

  onEdit(stud:any){
    this.onAddStudent()
    this.student=stud
   

  }






}
