import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
// import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PropertyDetailsService } from 'src/app/services/property-details-service/property-details.service';
import { Pipe, PipeTransform} from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { ImageViewerComponent } from 'src/app/components/modals/image-viewer/image-viewer.component';
import { environment } from 'src/environments/environment';
import {MatDialog} from '@angular/material/dialog';
import { ContactAgentService } from 'src/app/services/contact-agent/contact-agent.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PropertyDetailsComponent implements OnInit {
  relatedPropCardSize=4
  contactAgentForm :FormGroup ;
  contactAgentFormControls: any;
  photoUrl: string = environment.propertyphoto;
  agentPhotoUrl: string = environment.agentProfileHost;
 loading:boolean = true
  closeResult = '';
  propertydetail: any = null;
  isReadMore = true
  mapURL =''
  scrHeight:any;
    scrWidth:any;
    showMe: boolean = false
  items = [] as any;
    addToWishlist(id: any) {
      this.showMe = !this.showMe
      var data = localStorage.getItem('wishList key')
      if (data) {
        this.items = JSON.parse(data)
        if(this.items.includes(id)){
          this.items=this.items
        }
        else{
          this.items.push(id)
  
        }
      }
      
      localStorage.setItem("wishList key", JSON.stringify(this.items))
  
    }
    removeFromWishlist(id: any) {
      this.showMe = !this.showMe
      var data = localStorage.getItem('wishList key')
      if (data) {
        this.items = JSON.parse(data)
        const index=this.items.indexOf(id);
         this.items.splice(index,1)
      }
      localStorage.setItem("wishList key", JSON.stringify(this.items))
    }
  constructor(private route: ActivatedRoute ,
    private modalService: NgbModal,
    public dialog: MatDialog,
    private contactagentservice:ContactAgentService,
    private spinner:NgxSpinnerService,
    private toastrService:ToastrService,
    private service: PropertyDetailsService) {
      this.contactAgentForm = new FormGroup({
        fname: new FormControl('',[Validators.required,Validators.maxLength(50)]),
        lname: new FormControl('',[Validators.required,Validators.maxLength(50)]),

         email: new FormControl('',[Validators.email,Validators.required]),
        phone: new FormControl('',[Validators.minLength(10),Validators.required, Validators.maxLength(10), Validators.pattern("^[0-9]*$")]),
        message: new FormControl('',[Validators.required,Validators.maxLength(500)]),
        agreement: new FormControl('',[Validators.requiredTrue])
      })
      this.getScreenSize();

    }

    @HostListener('window:resize', ['$event'])
    getScreenSize(event?:any) {
          this.scrHeight = window.innerHeight;
          this.scrWidth = window.innerWidth;
          console.log(this.scrHeight, this.scrWidth);
          this.changeCardSize()
    }

  ngOnInit(): void {
    if(localStorage.getItem('wishList key')){
      this.items = localStorage.getItem('wishList key')
    }
    this.route.queryParams
    .subscribe((params: any) => {
console.log('params',params)
if(params.propertyid){
  this.service.propertyDetails(params.propertyid).subscribe({
    next: (res: any) => {
      console.log(res)
      if(res){
        this.propertydetail = res;
         if(this.propertydetail?.geopoints){
          let geopointsarray = this.propertydetail?.geopoints.split(',')
          this.mapURL = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyASwSuft4rMQLBlH33EgkTa-cp6GbYq1xQ&q='  + geopointsarray[1]+','+geopointsarray[0] ;
         }

        this.loading= false
      }

    },
    error: (err: any) => {
    },
  }
  )
}
    })
  }
  open(content: any) {
    this.modalService.open(content, { centered: true, ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  openImage(content: any) {
    const dialogRef = this.dialog.open(ImageViewerComponent
      , {
        data: {
        photos: this.propertydetail.photos ,
        currentPhoto:content
      },
        panelClass: 'custom-dialog-image-view',
        hasBackdrop:true,
        backdropClass: 'backdropBackground-image-view',

      });

  }
 private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  showText() {
    this.isReadMore = !this.isReadMore
 }
 contactProperty(){
  console.log('contactAgentForm',this.contactAgentForm)

    if (this.contactAgentForm.valid) {

      this.spinner.show();

         const request =
         {
          firstName: this.contactAgentForm.value.fname,
          lastName: this.contactAgentForm.value.lname,
          from: this.contactAgentForm.value.email,
          mobNumber :this.contactAgentForm.value.phone,
          message: 'property id = '+this.propertydetail.id +'  message = '+  this.contactAgentForm.value.message
        }
        this.contactagentservice.sendMessage(request).subscribe({
          next: (res: string) => {
            this.spinner.hide();
             this.toastrService.success("Our Agent will contact you soon.","Submitted")
            this.contactAgentForm.reset();
          },
          error: (err: any) => {
            this.spinner.hide();
            this.toastrService.error("Sorry for inconvenience caused.","Error")
          },
        })
      }
    }

    changeCardSize(){
      if(this. scrWidth <= 426){
        this.relatedPropCardSize =1
      }
    else if(this. scrWidth <= 799){
      this.relatedPropCardSize =2

    }
    else if(this. scrWidth <= 1024){
      this.relatedPropCardSize =3

    }
    else{
      this.relatedPropCardSize =4

    }
  }

  printPage(){
    window.print();
  }
}
