export const propertyFilter = {
  community: {
    "key":"LOCATION",
    "operator": "EQUAL",
    "field_type": "STRING"
  },
  offeringType: {
    "key":"OFFERING_TYPE",
    "operator": "EQUAL",
    "field_type": "STRING"
  },
  propertyType: {
    "key":"PROPERTY_TYPE",
    "operator": "EQUAL",
    "field_type": "STRING"
  },
  city: {
    "key":"CITY",
    "operator": "EQUAL",
    "field_type": "STRING"
  },
  bedroom: {
    "key":"BEDROOM",
    "operator": "EQUAL",
    "field_type": "STRING"
  },
  bathroom: {
    "key":"BATHROOM",
    "operator": "EQUAL",
    "field_type": "INTEGER"
  },
  parking: {
    "key":"PARKING",
    "operator": "EQUAL",
    "field_type": "INTEGER"
  },
  amenitiesStr: {
    "key":"AMENITIES",
    "operator": "EQUAL",
    "field_type": "STRING"
  },
  price: {
    "key":"PRICE",
    "operator": "BETWEEN",
    "field_type": "INTEGER"
  },
  size: {
    "key":"SIZE",
    "operator": "BETWEEN",
    "field_type": "INTEGER"
  }
  , descriptionEn: {
    "key":"DESCRIPTIONEN",
    "operator": "EQUAL",
    "field_type": "STRING"
  }
  , agent: {
    "key":"AGENT",
    "operator": "EQUAL",
    "field_type": "INTEGER"
  },
  operator:{
    'GREATER':'GREATER',
    'LESSER':'LESSER',
    'EQUAL':'EQUAL',
    'BETWEEN':'BETWEEN',
    'IN':'IN',

  }


}
