import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
studentArr:any[]=[]
student:any={
  studentId:'',
  fullname:"",
  mobile:"",
  email:"",
  address:""
}
img=null
  constructor() {
    const localdata=localStorage.getItem("studentList")
    if(localdata != null){
      this.studentArr=JSON.parse(localdata)
    }
    
   }

  ngOnInit(): void {
  }

  onAddstudent(){
   const model = document.getElementById("student")
   if(model != null){
    model.style.display="block"
   }
   this.student={
    studentId:0,
    fullname:"",
    mobile:"",
    email:"",
    address:""
  }
  }
  onClosemodel(){
    const model =document.getElementById("student")
    if(model != null)
    model.style.display="none"
  }
  save(data:any){
    this.student.studentId=this.studentArr.length +1
    this.onClosemodel()
    console.log(this.studentArr.push(this.student))
    localStorage.setItem("studentList",JSON.stringify(this.studentArr))
    this.student={
      studentId:"",
      file:'',
      fullname:"",
      mobile:"",
      email:"",
      address:""
    }
   
  }

  onUpdate(){
   const record= this.studentArr.find(m => m.studentId==this.student.studentId)
   record.fullname=this.student.fullname
   record.mobile=this.student.mobile
   record.email=this.student.email
   record.address=this.student.address
   this.onClosemodel()
   localStorage.setItem("studentList",JSON.stringify(this.studentArr))
  }

  onEdit(data:any){
    this.onAddstudent()
    this.student=data

  }

  onDelete(id:any){
    for(let i =0; i <= this.studentArr.length;i++){
      if(this.studentArr[i].studentId == id){
        this.studentArr.splice(i,1)
      }
      localStorage.setItem("studentList",JSON.stringify(this.studentArr))
    }

  }

  onfileselect(event:any){
  console.log(this.student.file=event.target.files[0])
  localStorage.setItem("studentList",JSON.stringify(this.studentArr))
  }
}
