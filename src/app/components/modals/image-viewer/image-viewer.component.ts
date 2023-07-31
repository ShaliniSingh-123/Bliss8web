import {Component,Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'image-viewer-dialog',
  styleUrls: ['./image-viewer.component.scss'],
  templateUrl: './image-viewer.component.html',
})
export class ImageViewerComponent {
   photoUrl: string = environment.propertyphoto;
   currentPic=0
   config :any= {
    spaceBetween: 10,
     pagination: true,
    loop: true,
    keyboard:true,
    initialSlide :this.currentPic,
    breakpoints: {
      992: {
        slidesPerView: 1,

      },
      767: {
        slidesPerView: 1,

      },
      576:{
        slidesPerView: 1,

      },
      1200:{
        slidesPerView: 1,

      }
  }
  }

  photoArray:any = []
  constructor(public dialogRef: MatDialogRef<ImageViewerComponent> ,
     @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.photoArray=data.photos
    this.currentPic=data.currentPhoto

    }

  ngOnInit() {
    // will log the entire data object
    console.log(this.data)
    this.config.initialSlide =this.currentPic
  }
  closedialog(){
    this.dialogRef.close();
  }

}
