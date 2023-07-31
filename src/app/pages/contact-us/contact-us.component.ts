import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ContactUsService } from 'src/app/services/contact-us/contact-us.service';
import { CustomvalidationService } from 'src/app/services/custom-validation/customvalidation.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactUsForm : FormGroup
  submitted = false;

  constructor(private spinner: NgxSpinnerService,
     private contactUsService : ContactUsService,
     private customValidator: CustomvalidationService,
     private toastrService: ToastrService)   { 

    this.contactUsForm = new FormGroup({
      fname: new FormControl('',[Validators.required,Validators.maxLength(50)]),
      email: new FormControl('',[Validators.email]),
      phone: new FormControl('',[Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]),
      message: new FormControl('',[Validators.required,Validators.maxLength(500)])
    })

  }

  get contactUsFormControls(){
    return this.contactUsForm.controls;
  }

  ngOnInit(): void {
    

  }
 
  onSubmit() {
    //this.submitted = true;
    if (this.contactUsForm.valid) {
      
      if(!this.contactUsForm.value.email && !this.contactUsForm.value.phone){
        this.toastrService.error("Either one of the contact detail is required.","Validation")
      }else{
        this.spinner.show();
        const request = {firstName: this.contactUsForm.value.fname,
          lastName: this.contactUsForm.value.lname,
          from: this.contactUsForm.value.email,
          mobNumber :this.contactUsForm.value.phone, 
          message:this.contactUsForm.value.message}
        this.contactUsService.sendMail(request).subscribe({
          next: (res: string) => {
            this.spinner.hide();
            window.scrollTo(0,0);
            this.toastrService.success("Our team will contact you soon.","Submitted")
            this.contactUsForm.reset();
            this.submitted = false
          },
          error: (err: any) => {
            this.spinner.hide();
            this.toastrService.error("Sorry for inconvenience caused.","Error")
            this.submitted = false
          },
        })
      }
    }
  }

}
