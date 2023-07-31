import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AgentProfileDetailsService } from 'src/app/services/agentprofile/agent-profile-details.service';
import { ContactAgentService } from 'src/app/services/contact-agent/contact-agent.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-agent-profile-details',
  templateUrl: './agent-profile-details.component.html',
  styleUrls: ['./agent-profile-details.component.scss']
})
export class AgentProfileDetailsComponent implements OnInit {


  contactAgentForm :FormGroup
  contactAgentFormControls: any;
  letuserID:any
  dataExists:boolean = false;
  messageinHTML:string =''
  redirectSeconds = 10
  submitted = false
  agentPhotoUrl: string = environment.agentProfileHost
  agentProfileDetails:any;
  constructor(private route:Router,
    private toastrService:ToastrService,
    private spinner:NgxSpinnerService,
    private agentprofildetailservices:AgentProfileDetailsService,
    private contactagentservice:ContactAgentService,
    public activatedRoute:ActivatedRoute

    ) {
    this.contactAgentForm = new FormGroup({
      fname: new FormControl('',[Validators.required,Validators.maxLength(50)]),
      email: new FormControl('',[Validators.email]),
      phone: new FormControl('',[Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]),
      message: new FormControl('',[Validators.required,Validators.maxLength(500)])
    })

    // get contactAgentFormControls(){
    //   return this.contactAgentForm.controls;
    // }

   }

  ngOnInit(): void {

    this.letuserID = this.activatedRoute.snapshot.params
console.log('user id',this.letuserID.id)
if(this.letuserID.id != null && Number(this.letuserID.id) >= 0){
  this.agentprofildetailservices.agentprofileDetails(Number(this.letuserID.id).toString()).subscribe((Response:any)=>{
    if(Response != null){
      this.agentProfileDetails=Response
      this.dataExists= true
    }else{
       this.toastrService.error("User not found");
      this.startTimer()
    }
    console.log(Response)
  },(error)=>{
    console.log(error)
    this.toastrService.error("Oops! Something Went Wrong")

  }
  )
 }


  }

  onSubmit(){
    if (this.contactAgentForm.valid) {

      if(!this.contactAgentForm.value.email && !this.contactAgentForm.value.phone){
        this.toastrService.error("Either one of the contact detail is required.","Validation")
      }else{
        this.spinner.show();
        const request =
         {
          firstName: this.contactAgentForm.value.fname,
          lastName: this.contactAgentForm.value.lname,
          from: this.contactAgentForm.value.email,
          mobNumber :this.contactAgentForm.value.phone,
          message:this.contactAgentForm.value.message
        }
        this.contactagentservice.sendMessage(request).subscribe({
          next: (res: string) => {
            this.spinner.hide();
            window.scrollTo(0,0);
            this.toastrService.success("Our Agent will contact you soon.","Submitted")
            this.contactAgentForm.reset();
            this.submitted = false
          },
          error: (err: any) => {
            this.spinner.hide();
            this.submitted = false
            this.toastrService.error("Sorry for inconvenience caused.","Error")
          },
        })
      }
    }
  }
  startTimer() {
    let seconds = this.redirectSeconds
    let timerui = setInterval(() => {
      this.messageinHTML="User will be redirected to Home page in "+seconds
      seconds=seconds-1;
    },1000)
    let interval = setInterval(() => {
       this.route.navigateByUrl("/home")
    },this.redirectSeconds * 1000)
  }
  goToURL(type:string,data:any){
console.log('goToURL',data)
  }

}


