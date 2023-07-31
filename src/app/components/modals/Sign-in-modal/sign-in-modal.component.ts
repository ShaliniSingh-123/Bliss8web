import {Component,Inject, ViewEncapsulation} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'sign-in-modal-dialog',
  styleUrls: ['./sign-in-modal.component.scss'],
  templateUrl: './sign-in-modal.component.html',
  encapsulation:ViewEncapsulation.None
})
export class SignInComponent  {
  s3BucketHost=environment.agentProfileHost
 emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();
  is_signUp:boolean=false

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
  photoArray:any = []
  constructor(public dialogRef: MatDialogRef<SignInComponent> ,
     @Inject(MAT_DIALOG_DATA) public data: any
  ) {

    }

  ngOnInit() {

  }
  closedialog(){
    this.dialogRef.close();
  }
  facebookLogin(){

  }
  googleLogin(){

  }

  signin_up(){
    this.is_signUp=!this.is_signUp
  }

}

export class MyErrorStateMatcher implements ErrorStateMatcher {

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
