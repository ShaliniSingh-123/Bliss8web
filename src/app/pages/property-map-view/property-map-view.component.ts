import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyMapService } from 'src/app/services/property-map/property-map.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-property-map-view',
  templateUrl: './property-map-view.component.html',
  styleUrls: ['./property-map-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PropertyMapViewComponent implements OnInit {
  dataisloading:boolean = true;
  numberOfElements: any;
  totalNoofElements: any;
  allProperties: any=[];
  markers = [
  //  {position:{lat:24.494244,lng: 54.40686}}
   
  
  ] as any;
  @Input()
  image!:any;
  photoUrl = environment.propertyphoto;
  spinner: any;
  constructor(private route:ActivatedRoute,private router: Router, private propertymapview:PropertyMapService){}
  @ViewChild('myGoogleMap', { static: false })
  map!: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false })
  info!: MapInfoWindow;
  zoom = 13;
  maxZoom = 20;
  minZoom = 2;
  
  center!: google.maps.LatLngLiteral;
  
  nos: any;
  pos: any ;
  
  
  infoContent :any= 0;
 
  eventHandler(event: any, name: string) {
    console.log(event, name);

    
  }
  dropMarker() {
    this.markers.push({
      position: {
        lat: this.nos,
        lng: this.pos,
       
      }
    })
  }
  openInfo(marker: MapMarker, content: any) {
    this.infoContent = Number(content.position.indexofdata);
    this.info.open(marker);
    console.log("content",this.infoContent);
  }
 
  dataToApi: any = {
    "filters": [],
    "sorts": [
      {
        "key": "createdOn",
        "direction": "ASC"
      }
    ],
  };
  
  propertyofferingType: any;
  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    }),

    setTimeout(() => {
      this.dropMarker();
    }, 10)
  
  this.route.queryParams
  .subscribe((params: any) => {
    this.dataToApi  = {"filters": [],"sorts": [{"key": "createdOn","direction": "ASC"}], page:"1",size:"10"};    
    this.propertymapview.propertyMapView(this.dataToApi).subscribe((list: any) => {
      this.allProperties = list.content;
      if(list){
        Array.from(list.content).forEach((element:any,index:number) => {
         let str_array = element.geopoints.split(',');
         let mapObject ={position:{lat: Number(str_array[1]),lng:  Number(str_array[0]),indexofdata:index}}
         this.markers.push(mapObject);
        });
      }this.dataisloading=false
    })
  }
  );

}
// onclick(name:any){
//   let data=name.value;
 
//   console.log("hello ");
//   let params=this.formvaluetoParamsConverter(data);
//   this.router.navigateByUrl('property-map-view'+params);
// }
//   formvaluetoParamsConverter(data: any) {
//     console.log('formvalueConverter',data)
//     let paramString='?'
//     if(data.location){
//      paramString= paramString + 'location=' + data.location ;
//     }
//   }
options: google.maps.MapOptions = {
  zoomControl: true,
  scrollwheel: false,
  disableDoubleClickZoom: false,
  maxZoom: this.maxZoom,
  minZoom: this.minZoom,
  mapTypeControl: true,
  mapTypeId: 'roadmap',
  disableDefaultUI: false,
  center:{lat:25.2048,lng:55.2708}
  
  // mapTypeControlOptions:{
  //  // style:google.maps.MapTypeControlStyle.DROPDOWN_MENU,
  //   mapTypeIds:['satellite','terrain']
  // },
  
}

}