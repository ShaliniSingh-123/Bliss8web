import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adm-user-role',
  templateUrl: './adm-user-role.component.html',
  styleUrls: ['./adm-user-role.component.scss']
})
export class AdmUserRoleComponent implements OnInit {
  

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

  // getErrorMessage(){
  //   return 'email invalid'
  // }



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
    
      // this.adminformservice.sendMessage(request).subscribe({
      //   next: (res: string) => {
      //     this.spinner.hide();
      //     window.scrollTo(0,0);
      //     this.toastrService.success("Our Admin will contact you soon.","Submitted")
      //     this.adminform.reset();
      //   },
      //   error: (err: any) => {
      //     this.spinner.hide();
      //     this.toastrService.error("Sorry for inconvenience caused.","Error")
      //   },
      // })
    }
  }
  }

}  
