import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adm-user-add',
  templateUrl: './adm-user-add.component.html',
  styleUrls: ['./adm-user-add.component.scss']
})
export class AdmUserAddComponent implements OnInit {
  adminform:FormGroup 
  constructor(private route: Router) {
    this.adminform = new FormGroup({
      fname: new FormControl('',[Validators.required,Validators.maxLength(50)]),
      lname: new FormControl('',[Validators.required,Validators.maxLength(50)]),
      email: new FormControl('',[Validators.email]),
      uname: new FormControl('',[Validators.required,Validators.maxLength(50)]),
      role:new FormControl('',[Validators.required,Validators.maxLength(50)])
      
    })
   

   }



  ngOnInit(): void {
  }

  onSubmit(){
    if (this.adminform.valid) {
  
      if(!this.adminform.value.email && !this.adminform.value.phone){
        
      }else{
        
        const request =
         {
          firstName: this.adminform.value.fname,
          lastName: this.adminform.value.lname,
          from: this.adminform.value.email,
          userName: this.adminform.value.uname,
          
        }

}
}
}
}

