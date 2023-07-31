import { propertyFilter } from "../common/constants";


export class QueryBuilderhelper {

//pass params as object
//supported Params  - offeringType  ,  location  ,  searchkey  ,  bedroom  ,  bathroom  ,  property_type  ,  sizeMinValue  ,  sizeMaxValue
//priceMinValue  ,  priceMaxValue  ,  parkin
//returns with OPERATOR,KEY,VALUE ,etc
responsebuilder(paramObject:object){
  let dataToApi:any =  {"filters": [],"sorts": [{"key": "createdOn","direction": "ASC"}],};
if(paramObject ){

   console.log('responsebuilder(paramObject:any)-> ' + paramObject );
  let params:any = paramObject;
  if (params.offeringType ) {
    let offeringTypeData = {
      "key": "offeringType",
      "operator": propertyFilter.offeringType.operator,
      "field_type": propertyFilter.offeringType.field_type,
      "value": params.offeringType
    }
    dataToApi.filters.push(offeringTypeData)
   }
  if (params.location ) {
    var splited = params.location.split(',');

    let offeringTypeData = {
      "key": "community",
      "operator": propertyFilter.operator.IN,
      "field_type": propertyFilter.community.field_type,
      "values": splited
    }
    dataToApi.filters.push(offeringTypeData)
  }
  if (params.community ) {
    var splited = params.community.split(',');

    let offeringTypeData = {
      "key": "community",
      "operator": propertyFilter.operator.IN,
      "field_type": propertyFilter.community.field_type,
      "values": splited
    }
    dataToApi.filters.push(offeringTypeData)
  }
  if (params.searchkey  ) {
    let offeringTypeData = {
      "key": "descriptionEn",
      "operator": propertyFilter.descriptionEn.operator,
      "field_type": propertyFilter.descriptionEn.field_type,
      "value": params.searchkey
    }
    dataToApi.filters.push(offeringTypeData)
  }
  if (params.bedroom  ) {
    var splited = params.bedroom.split(',');

    let bedroom = {
      "key": propertyFilter.bedroom.key,
      "operator": propertyFilter.operator.IN,
      "field_type": propertyFilter.bedroom.field_type,
      "values": splited
    }
    // let bedroom = {
    //   "key": "bedroom",
    //   "operator": params.bedroom =='10 ' ? propertyFilter.operator.GREATER   : propertyFilter.bedroom.operator,
    //   "field_type": propertyFilter.bedroom.field_type,
    //   "value": params.bedroom =='10 ' ? '10'  : params.bedroom
    // }

    dataToApi.filters.push(bedroom)
   }
  if (params.bathroom) {
    let bathroom = {
      "key": "bathroom",
      "operator":params.bathroom =='10 ' ? propertyFilter.operator.GREATER  : propertyFilter.bathroom.operator,
      "field_type": propertyFilter.bathroom.field_type,
      "value": params.bathroom =='10 ' ? '10'  : params.bathroom
    }

    dataToApi.filters.push(bathroom)
   }
  if (params.property_type  ) {
    let propertyType = {
      "key": "propertyType",
      "operator": propertyFilter.propertyType.operator,
      "field_type": propertyFilter.propertyType.field_type,
      "value": params.property_type
    }
    dataToApi.filters.push(propertyType)
   }
  if (params.sizeMinValue  ) {
    let size = {
      "key": "size",
      "operator": propertyFilter.operator.GREATER,
       "field_type": propertyFilter.size.field_type,
      "value": params.sizeMinValue
    }
    dataToApi.filters.push(size)
   } if (params.sizeMaxValue  ) {
    let size = {
      "key": "size",
      "operator": propertyFilter.operator.LESSER,
       "field_type": propertyFilter.size.field_type,
      "value": params.sizeMaxValue
    }
    dataToApi.filters.push(size)
   }
  if (params.priceMinValue  ) {
    let priceMinValue = {
      "key": "price",
      "operator": propertyFilter.operator.GREATER,
       "field_type": propertyFilter.price.field_type,
      "value": params.priceMinValue
    }
    dataToApi.filters.push(priceMinValue)      }
  if (params.priceMaxValue  ) {
    let priceMaxValue = {
      "key": "price",
      "operator": propertyFilter.operator.LESSER,
       "field_type": propertyFilter.price.field_type,
      "value": params.priceMaxValue
    }
    dataToApi.filters.push(priceMaxValue)
  }if (params.parking  ) {
    let parking = {
      "key": "parking",
      "operator": params.parking =='7 ' ? propertyFilter.operator.GREATER  : propertyFilter.parking.operator,
      "field_type": propertyFilter.parking.field_type,
      "value": params.parking =='7 ' ? '7'  : params.parking
    }
    dataToApi.filters.push(parking)
  }
  if (params.agent ) {

    let agent = {
      "key": "AGENT",
      "operator": propertyFilter.operator.EQUAL,
      "field_type": propertyFilter.agent.field_type,
      "value": params.agent
    }
    dataToApi.filters.push(agent)
  }
  return dataToApi;

}
}formvaluetoParamsConverter(data:any):string{
  console.log('formvalueConverter',data)
  let paramString='?'

  if(data.location){
    paramString= paramString + 'location=' + data.location + '&';
   }
  if(data.searchkey){
    paramString= paramString + 'searchkey=' + data.searchkey + '&';
   }
  if(data.offeringtype){
    paramString= paramString + 'offeringType=' + data.offeringtype      + '&';
  }
  if(data.bedroom){
    paramString= paramString + 'bedroom=' + data.bedroom + '&';
  }
  if(data.property_type){
    paramString= paramString + 'property_type=' + data.property_type + '&';
  }
  if(data.sizeMinValue){
    paramString= paramString + 'sizeMinValue=' + data.sizeMinValue + '&';
  }
  if(data.sizeMaxValue){
    paramString= paramString + 'sizeMaxValue=' + data.sizeMaxValue + '&';
  }
  if(data.priceMinValue){
    paramString= paramString + 'priceMinValue=' + data.priceMinValue + '&';
  }if(data.priceMaxValue){
    paramString= paramString + 'priceMaxValue=' + data.priceMaxValue + '&';
  }if(data.bathroom){
    paramString= paramString + 'bathroom=' + data.bathroom + '&';
  }if(data.propertyParking){
    paramString= paramString + 'parking=' + data.propertyParking + '&';
  }if(data.community){
    paramString= paramString + 'community=' + data.community + '&';
   }if(data.amenities){
    paramString= paramString + 'amenities=' + data.amenities + '&';
   }if(data.agent){
    paramString= paramString + 'agent=' + data.agent + '&';
  }
  return paramString.slice(0, -1);
}

}
