import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-property-mangement',
  templateUrl: './property-mangement.component.html',
  styleUrls: ['./property-mangement.component.scss']
})
export class PropertyMangementComponent implements OnInit {


  contactForm: FormGroup
  projectdetilForm: FormGroup;

  constructor(private spinner: NgxSpinnerService,

    private toastrService: ToastrService) {

    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      email: new FormControl('', [Validators.email]),
      phone: new FormControl('', [Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]),



    })
    this.projectdetilForm = new FormGroup({
      projecttype: new FormControl('', [Validators.required]),
      locations: new FormControl('', [Validators.required]),
      bedrooms: new FormControl('', [Validators.required]),
    })

  }


  ngOnInit(): void {
    window.scroll({ top: 0, left: 0, behavior: 'auto' });
  }


  onSubmit() {

  }

}
