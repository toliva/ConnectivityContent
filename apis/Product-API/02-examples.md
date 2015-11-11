# Property Read Examples
Property read allows partners to retrieve several important settings related to their properties’ configuration in Expedia system. It also enables partners to find out which properties are currently assigned to their accounts.
A read request is a HTTP GET. There are two different read operations available:
-	To get a specific property, the property ID needs to be specified on the URL: /properties/{propertyId}
-	To get all the properties assigned to a specific user account, omit the property resource ID on the URL: /properties/. 
By default, only active properties are returned. To get all properties assigned to an account, including ones that might not be active at the moment, an optional status parameter can be added, with value all: /properties?status=all.
When requesting a single property, EPS Product API will return the property resource information as part of an Entity object:
```JSON
{
  "entity": {
    "resourceId": 1,
    ...
  }
}
```
When requesting all properties assigned to a user account, an array of properties is returned:
```JSON
{
  "entity": [
    {
      "resourceId": 1,
      …
    }, {
      "resourceId": 2,
      …
    }
  ]
}
```
## HTTP Headers – Single Property Request
```HTTP
GET https://services.expediapartnercentral.com/products/v1/properties/2268140
Content-Type: application/json
Accept: application/json
Authorization: Basic [your encoded username:password in base64]
```
## Single Property Response
```json
{
  "entity": {
    "resourceId": 2268140,
    "name": "Eslington Villa",
    "status": "Active",
    "currency": "GBP",
    "address": {
      "line1": "199 Some Street",
      "line2": null,
      "city": "Glasgow",
      "state": null,
      "postalCode": "12345",
      "countryCode": "GBR"
    },
    "distributionModels": [
      "ExpediaCollect", "HotelCollect"
    ],
    "rateAcquisitionType": "SellLAR",
    "taxInclusive": true,
    "pricingModel": "PerDayPricing",
    "baseAllocationEnabled": false,
    "minLOSThreshold": 4,
    "cancellationTime": "18:00",
    "timezone": "(GMT) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London",
    "reservationCutOff": {
      "time": "05:00",
      "day": "nextDay"
    }
  }
}
```
## Multiple Properties Response
When using GET for multiple properties, additional parameters can be provided to navigate through the result set. By default, only 20 properties are returned at a time. Partners who have more than 20 properties assigned to their accounts and want to get through all their properties have to use offset and limit parameters.
For example, a partner wanting to get 3 results at a time would do this:
```HTTP
GET https://services.expediapartnercentral.com/products/v1/properties?offset=0&limit=3
```
The Product API will sort all properties assigned to this account by resourceId, ascending, and return the 3 lowest property resource ids.
```JSON
{
  "entity": [
    {
      "resourceId": 2268142,
      "name": "Eslington Villa",
      "status": "Active",
      "currency": "GBP",
      "address": {
        "line1": "199 Some Street",
        "city": "Glasgow",
        "postalCode": "PL99A9",
        "state": "Scotland",
        "countryCode": "GBR"
      },
      "distributionModels": [
        "ExpediaCollect", "HotelCollect"
      ],
      "rateAcquisitionType": "SellLAR",
      "taxInclusive": true,
      "pricingModel": "PerDayPricing",
      "baseAllocationEnabled": false,
      "minLOSThreshold": 4,
      "cancellationTime": "18:00",
      "timezone": "(GMT) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London",
      "reservationCutOff": {
        "time": "05:00",
        "day": "nextDay"
      }
    }, {
      "resourceId": 2268141,
      "name": "Hotel Downtown",
      "status": "Active",
      "currency": "CAD",
      "address": {
        "line1": "299 Some Other Street",
        "line2": "with a very long name",
        "city": "Montreal",
        "state": "Quebec",
        "postalCode": "H11H1H",
        "countryCode": "CAN"
      },
      "distributionModels": [
        "ExpediaCollect"
      ],
      "rateAcquisitionType": "SellLAR",
      "taxInclusive": false,
      "pricingModel": "OccupancyBasedPricing",
      "baseAllocationEnabled": false,
      "minLOSThreshold": 14,
      "cancellationTime": "18:00",
      "timezone": "(GMT-05:00) Eastern Time (US & Canada)",
      "reservationCutOff": {
        "time": "23:59",
        "day": "sameDay"
      }
    }, {
      "resourceId": 2268140,
      "name": "Villa by the Sea",
      "status": "Active",
      "currency": "EUR",
      "address": {
        "line1": "299 Some Other Street",
        "city": "Palma de Mallorca",
        "postalCode": "7610",
        "countryCode": "ESP"
      },
      "distributionModels": [
        "ExpediaCollect", "HotelCollect"
      ],
      "rateAcquisitionType": "SellLAR",
      "taxInclusive": true,
      "pricingModel": "OccupancyBasedPricing",
      "baseAllocationEnabled": false,
      "minLOSThreshold": 28,
      "cancellationTime": "18:00",
      "timezone": "(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
      "reservationCutOff": {
        "time": "05:00",
        "day": "nextDay"
      }
    }
  ]
}
```
Partners can then iterate through their properties by increasing the offset parameter. To get the next 3 properties, partners would issue a GET with offset=3, limit=3
```HTTP
GET https://services.expediapartnercentral.com/products/v1/properties?offset=3&limit=3
```
To get the next results, offset would become 6:
```HTTP
GET https://services.expediapartnercentral.com/products/v1/properties?offset=6&limit=3
```
#	Room Type Resource
The room type resource describes the configuration of a specific room type/class/category in the Expedia system. Room types belong to hotels, and room types contain one to many rate plans. A room type resource will contain information such as bed types, smoking preferences, occupancy settings by age categories, etc.
##	Room Type Read
A read request is a HTTP GET. There are two different read operations available:
-	To get a specific room type, the room type resource ID needs to be specified on the URL: 
```HTTP
/properties/{propertyId}/roomTypes/{roomTypeId}
```
-	To get all the room types belonging to a property, omit the room type resource ID on the URL: 
```HTTP
/properties/{propertyId}/roomTypes/
```
By default, only active room types will be returned. To get all room types that exist under a property, including ones that might not be active at the moment, a status parameter with value all can be added:
```HTTP
/properties/{propertyId}/roomTypes?status=all
```
When requesting a single room type, EPS Product API returns the room type resource information as part of an Entity object:
```JSON
{
  "entity": {
    "resourceId": 1,
    ...
  }
}
```
When requesting all room types of a property, the API returns an array of room types:
```JSON
{
  "entity": [
    {
      "resourceId": 1,
      …
    }, {
      "resourceId": 2,
      …
    }
  ]
}
```
### HTTP Headers
```HTTP
GET https://services.expediapartnercentral.com/products/v1/properties/1780044/roomTypes/200616960 HTTP/1.1
Content-Type: application/json
Accept: application/json
Authorization: Basic [your encoded username:password in Base64]
```

###	Single Room Type Response
This example shows the response to a room type read request for a single room type with 2 age categories, a choice of 2 bed types, and supporting both smoking and non-smoking
```JSON
{
  "entity": {
    "resourceId": 211705,
    "partnerCode": "MySuiteCode123",
    "name": {
      "attributes": {
        "typeOfRoom": "Suite",
        "roomClass": "Deluxe",
        "includeBedType": true,
        "featuredAmenity": "Terrace",
        "view": "Ocean View"
      },
      "value": "Deluxe Suite, 1 King Bed with Sofabed, Terrace, Ocean View"
    },
    "status": "Active",
    "maxOccupants": 4,
    "occupancyByAge": [
      {
        "ageCategory": "Adult",
        "minAge": 18,
        "maxOccupants": 4
      }, {
        "ageCategory": "ChildAgeA",
        "minAge": 0,
        "maxOccupants": 3
      }
    ],
    "bedTypes": [
      {
        "id": "1.67",
        "name": "1 king and 1 sofa bed"
      }
    ],
    "smokingPreferences": [
      {
        "id": "2.1",
        "name": "Non-Smoking"
      }, {
        "id": "2.2",
        "name": "Smoking"
      }
    ]
  }
}
```
## Room Type Create
In a room type create request message, most elements are required to allow Expedia to successfully create a room type. Required elements and rules are documented in the detailed description of the resource.
When create a new room type, partners have the choice to pick a predefined name, or provide a set of attributes that can be included in the room name. Please refer to sections below for the list of predefined room names and the name attributes that are supported by the API.

###	Example: Predefined Room Name
This example creates a room type with a predefined name, 3 age categories, a single bedding configuration and non-smoking
```HTTP
POST https://services.expediapartnercentral.com/products/v1/hotels/1780041/roomTypes
Accept: application/json
Content-Type: application/json
```
```JSON
{
  "partnerCode": "JS001",
  "name": {
    "value": "Junior Suite"
  },
  "maxOccupants": 5,
  "occupancyByAge": [
    {
      "ageCategory": "Adult",
      "minAge": 18,
      "maxOccupants": 2
    }, {
      "ageCategory": "ChildAgeA",
      "minAge": 3,
      "maxOccupants": 2
    }, {
      "ageCategory": "Infant",
      "minAge": 0,
      "maxOccupants": 2
    }
  ],
  "bedTypes": [
    {
      "id": "1.88",
      "name": "2 queen and 1 sofa bed"
    }
  ],
  "smokingPreferences": [
    {
      "id": "2.1",
      "name": "Non-Smoking"
    }
  ]
}
```
Response looks like:
```JSON
{
  "entity": {
    "resourceId": 201171339,
    "partnerCode": "JS001",
    "name": {
      "value": "Junior Suite"
    },
    "status": "Inactive",
    "maxOccupants": 5,
    "occupancyByAge": [
      {
        "ageCategory": "Adult",
        "minAge": 18,
        "maxOccupants": 2
      }, {
        "ageCategory": "ChildAgeA",
        "minAge": 3,
        "maxOccupants": 2
      }, {
        "ageCategory": "Infant",
        "minAge": 0,
        "maxOccupants": 2
      }
    ],
    "bedTypes": [
      {
        "id": "1.88",
        "name": "2 queen and 1 sofa bed"
      }
    ],
    "smokingPreferences": [
      {
        "id": "2.1",
        "name": "Non-Smoking"
      }
    ]
  }
}
```

###	Room Name Attributes
This example creates a room type with a set of name attributes, 3 age categories, a single bedding configuration and non-smoking
```HTTP
POST https://services.expediapartnercentral.com/products/v1/hotels/1780041/roomTypes
Accept: application/json
Content-Type: application/json
```
```JSON
{
  "partnerCode": "JS001",
  "name": {
    "attributes": {
      "typeOfRoom": "Condo",
      "bedroomDetails": "3 Bedrooms",
      "featuredAmenity": "2 Bathrooms",
      "view": "Partial Ocean View"
    }
  },
  "maxOccupants": 8,
  "occupancyByAge": [
    {
      "ageCategory": "Adult",
      "minAge": 18,
      "maxOccupants": 7
    }, {
      "ageCategory": "ChildAgeA",
      "minAge": 3,
      "maxOccupants": 5
    }, {
      "ageCategory": "Infant",
      "minAge": 0,
      "maxOccupants": 2
    }
  ],
  "bedTypes": [
    {
      "id": "1.149",
      "name": "3 double and 1 sofa bed"
    }
  ],
  "smokingPreferences": [
    {
      "id": "2.1",
      "name": "Non-Smoking"
    }
  ]
}
```
Response looks like:
```JSON
{
  "entity": {
    "resourceId": 201171339,
    "partnerCode": "JS001",
    "name": {
      "attributes": {
        "typeOfRoom": "Condo",
        "bedroomDetails": "3 Bedrooms",
        "featuredAmenity": "2 Bathrooms",
        "view": "Partial Ocean View"
      },
      "value": "Condo, 3 Bedrooms, 2 Bathrooms, Partial Ocean View"
    },
    "maxOccupants": 8,
    "occupancyByAge": [
      {
        "ageCategory": "Adult",
        "minAge": 18,
        "maxOccupants": 7
      }, {
        "ageCategory": "ChildAgeA",
        "minAge": 3,
        "maxOccupants": 5
      }, {
        "ageCategory": "Infant",
        "minAge": 0,
        "maxOccupants": 2
      }
    ],
    "bedTypes": [
      {
        "id": "1.149",
        "name": "3 double and 1 sofa bed"
      }
    ],
    "smokingPreferences": [
      {
        "id": "2.1",
        "name": "Non-Smoking"
      }
    ]
  }
}
```
### Ignored Room Name Attributes
When using room name attributes to generate a name, Expedia has specific rules around how many attributes can be used. To abstract this complexity from our partners, the API will accept that partners specify more attributes than Expedia would actually use to generate the name. The selection logic and ranking of attributes are described in details in section 3.4. The example below shows what would happen if a partner was to send all possible room name attributes in a create request. The Product API would respond back with the attributes it used, and the name that was generated.
Request:
```JSON
{
  "partnerCode": "JS001",
  "name": {
    "attributes": {
      "typeOfRoom": "Studio",
      "roomClass": "Basic",
      "includeBedType": true,
      "bedroomDetails": "1 Bedroom",
      "includeSmokingPref": true,
      "accessibility": true,
      "view": "Beach View",
      "featuredAmenity": "Hot Tub",
      "area": "Corner",
      "customLabel": "Blue Room"
    }
  },
  "maxOccupants": 8,
  "occupancyByAge": [
    {
      "ageCategory": "Adult",
      "minAge": 18,
      "maxOccupants": 7
    }, {
      "ageCategory": "ChildAgeA",
      "minAge": 3,
      "maxOccupants": 5
    }, {
      "ageCategory": "Infant",
      "minAge": 0,
      "maxOccupants": 2
    }
  ],
  "bedTypes": [
    {
      "id": "1.15",
      "name": "1 queen bed"
    }
  ],
  "smokingPreferences": [
    {
      "id": "2.1",
      "name": "Non-Smoking"
    }
  ]
}
```

The response will not include bedroom details, view, featured amenity and area as we cannot used all attributes to build a name. More details around the selection logic can be found in section 3.4. 
```JSON
{
  "entity": {
    "resourceId": 201171339,
    "partnerCode": "JS001",
    "name": {
      "attributes": {
        "typeOfRoom": "Studio",
        "roomClass": "Basic",
        "includeBedType": true,
        "includeSmokingPref": true,
        "accessibility": true,
        "customLabel": "Blue Room"
      },
      "value": "Basic Studio, 1 Queen Bed, Accessible, Non Smoking (Blue Room)"
    },
    "maxOccupants": 8,
    "occupancyByAge": [
      {
        "ageCategory": "Adult",
        "minAge": 18,
        "maxOccupants": 7
      }, {
        "ageCategory": "ChildAgeA",
        "minAge": 3,
        "maxOccupants": 5
      }, {
        "ageCategory": "Infant",
        "minAge": 0,
        "maxOccupants": 2
      }
    ],
    "bedTypes": [
      {
        "id": "1.15",
        "name": "1 queen bed"
      }
    ],
    "smokingPreferences": [
      {
        "id": "2.1",
        "name": "Non-Smoking"
      }
    ]
  }
}
```

##	Room Type Modify
The modify (PUT) operation is a full overlay. The payload of the modify request needs to include all the elements/attributes returned by read (GET) of this resource (with the exception of the entity element). If elements such as bed types or age categories are removed, the system will understand this as the user wanting to remove them from the room type.

Partners are expected to first issue a GET request to read the room type resource, and then edit what they need to change. Once done, they should resubmit the whole payload with the changes. Issuing a GET first, before making any modification, is quite important as changes to room types can be made via other means. Partners or Expedia Market Managers can make changes to the room type resource via ExpediaPartnerCentral. To find out the latest state of the resource, it is best to do a GET first before making any change to it.

The resource description in Section 3.4 indicates all fields expected in a GET and then used in the modify request.
Partners are allowed to modify the same objects that are manageable in the create operation.
###	Example: Modify a Predefined Name, Code and Age Categories
Leveraging the Create example from section 3.2.1, the name is modified to Executive Suite, child age category is removed, and partner code is changed.

```HTTP
PUT https://services.expediapartnercentral.com/products/v1/hotels/1780041/roomTypes/201171339
Accept: application/json
Content-Type: application/json
```
```JSON
{
  "resourceId": 201171339,
  "partnerCode": "JS002",
  "name": {
    "value": "Executive Suite"
  },
  "status": "Active",
  "maxOccupants": 5,
  "occupancyByAge": [
    {
      "ageCategory": "Adult",
      "minAge": 18,
      "maxOccupants": 2
    }, {
      "ageCategory": "Infant",
      "minAge": 0,
      "maxOccupants": 2
    }
  ],
  "bedTypes": [
    {
      "id": "1.88",
      "name": "2 queen and 1 sofa bed"
    }
  ],
  "smokingPreferences": [
    {
      "id": "2.1",
      "name": "Non-Smoking"
    }
  ]
}
```
Response look like
```JSON
{
  "entity": {
    "resourceId": 201171339,
    "partnerCode": "JS002",
    "name": {
      "value": "Executive Suite"
    },
    "status": "Active",
    "maxOccupants": 5,
    "occupancyByAge": [
      {
        "ageCategory": "Adult",
        "minAge": 18,
        "maxOccupants": 2
      }, {
        "ageCategory": "Infant",
        "minAge": 0,
        "maxOccupants": 2
      }
    ],
    "bedTypes": [
      {
        "id": "1.88",
        "name": "2 queen and 1 sofa bed"
      }
    ],
    "smokingPreferences": [
      {
        "id": "2.1",
        "name": "Non-Smoking"
      }
    ]
  }
}
```
### Modify Room Name from using a Predefined Name to using Name Attributes 
Leveraging the Create example from section 3.2.1, predefined name is modified to a new room name built from attributes, child age category is removed, and partner code is changed.
The name field is kept with its old value but will be overridden by the room name attributes, as name attributes always take precedence over predefined names.
```HTTP
PUT https://services.expediapartnercentral.com/products/v1/hotels/1780041/roomTypes/201171339
Accept: application/json
Content-Type: application/json
```
```JSON
{
  "resourceId": 201171339,
  "partnerCode": "JS002",
  "name": {
    "roomNameAttributes": {
      "typeOfRoom": "Suite",
      "roomClass": "Executive",
      "bedroomDetails": "1 Bedroom",
      "featuredAmenity": "Jetted Tub",
      "view": "City View"
    },
    "value": "Executive Suite"
  },
  "status": "Active",
  "maxOccupants": 5,
  "occupancyByAge": [
    {
      "ageCategory": "Adult",
      "minAge": 18,
      "maxOccupants": 2
    }, {
      "ageCategory": "Infant",
      "minAge": 0,
      "maxOccupants": 2
    }
  ],
  "bedTypes": [
    {
      "id": "1.88",
      "name": "2 queen and 1 sofa bed"
    }
  ],
  "smokingPreferences": [
    {
      "id": "2.1",
      "name": "Non-Smoking"
    }
  ]
}
```
Response looks like
```JSON
{
  "entity": {
    "resourceId": 201171339,
    "partnerCode": "JS002",
    "name": {
      "attributes": {
        "typeOfRoom": "Suite",
        "roomClass": "Executive",
        "bedroomDetails": "1 Bedroom",
        "featuredAmenity": "Jetted Tub",
        "view": "City View"
      },
      "value": "Executive Suite, 1 Bedroom, Jetted Tub, City View"
    },
    "status": "Active",
    "maxOccupants": 5,
    "occupancyByAge": [
      {
        "ageCategory": "Adult",
        "minAge": 18,
        "maxOccupants": 2
      }, {
        "ageCategory": "Infant",
        "minAge": 0,
        "maxOccupants": 2
      }
    ],
    "bedTypes": [
      {
        "id": "1.88",
        "name": "2 queen and 1 sofa bed"
      }
    ],
    "smokingPreferences": [
      {
        "id": "2.1",
        "name": "Non-Smoking"
      }
    ]
  }
}
```
#	Rate Plan Examples
The rate plan resource defines the configuration of a rate that a partner would like to make available to Expedia customers. It contains the more static information about the rate, for example its name, code, cancellation and change policy, what is the base compensation, what are the additional guest amounts to charge, etc.
More dynamic information like availability and rate information per stay date is exchanged via another API, EQC AR.

## Rate plan Read
A read request is a HTTP GET. There are two different read operations available:
-	To get a specific rate plan, the rate plan resource ID needs to be specified on the URL:
```HTTP 
/properties/{propertyId}/roomTypes/{roomTypeId}/ratePlans/{ratePlanId}
```
-	To get all the rate plans associated with a room type, omit the rate plan resource ID on the URL: 
```HTTP
/properties/{propertyId}/roomTypes/{roomTypeId}/ratePlans. 
```
By default, only active rate plans are returned. To get all rate plans associated with a room type, both active and inactive, a status parameter can be added, with value all:
```HTTP
/properties/{propertyId}/roomTypes/{roomTypeId}/ratePlans?status=all
```
When requesting a single rate plan, the API returns the rate plan resource information as part of an Entity object:
```JSON
{
  "entity": {
    "resourceId": 1,
    ...    
  }
}
```
When requesting all rate plans of a room type, an array of rate plans is returned:
```JSON
{
  "entity": [
    {
      "resourceId": 1,
      …      
    }, {
      "resourceId": 2,
      …
    }
  ]
}
```
### Request HTTP Headers - single rate plan
```HTTP
GET https://services.expediapartnercentral.com/products/v1/properties/1780044/roomTypes/200828484/ratePlans/204297188
Content-Type: application/json
Accept: application/json
Request-ID : 307af24f-f59a-11e4-822e-005056b1298f
Authorization: Basic [your encoded username:password in Base64]
```

### Request HTTP Headers - all active rate plans for a room type
```HTTP
GET https://services.expediapartnercentral.com/products/v1/properties/1780044/roomTypes/200828484/ratePlans
Content-Type: application/json
Accept: application/json
Request-ID : 307af24f-f59a-11e4-822e-005056b1298f
Authorization: Basic [your encoded username:password in Base64]
```

### Response for a Per Day Pricing, ExpediaCollect, Net Rate Rate Plan
```JSON
{
  "entity": {
    "resourceId": 204309700,
    "name": "Room Only",
    "distributionRules": [
      {
        "expediaId": "204309700",
        "partnerCode": "NK2",
        "distributionModel": "ExpediaCollect",
        "manageable": true,
        "compensation": {
          "percent": 0.26,
          "minAmount": 10.0,
          "exceptions": [
            {
              "dateStart": "2015-11-01",
              "dateEnd": "2015-11-02",
              "minAmount": 0,
              "percent": 0.24,
              "mon": true,
              "tue": true,
              "wed": true,
              "thu": true,
              "fri": true,
              "sat": true,
              "sun": true
            }
          ]
        }
      }
    ],
    "status": "Active",
    "type": "Standalone",
    "distributionModel": "ExpediaCollect",
    "rateAcquisitionType": "NetRate",
    "pricingModel": "PerDayPricing",
    "occupantsForBaseRate": 1,
    "taxInclusive": false,
    "cancelPolicy": {
      "defaultPenalties": [
        {
          "deadline": 0,
          "perStayFee": "None",
        "amount": 0.0
        }
      ]
    },
    "additionalGuestAmounts": [
      {
        "dateStart": "2014-12-04",
        "dateEnd": "2079-06-06",
        "ageCategory": "Adult",
        "amount": 36
      }, {
        "dateStart": "2014-12-04",
        "dateEnd": "2079-06-06",
        "ageCategory": "ChildAgeA",
        "amount": 29.7
      }, {
        "dateStart": "2014-12-04",
        "dateEnd": "2079-06-06",
        "ageCategory": "ChildAgeB",
        "amount": 29.7
      }
    ],
    "valueAddInclusions": [
      "Free Parking", "Free Breakfast", "Free Internet"
    ],
    "minLOSDefault": 1,
    "maxLOSDefault": 28,
    "minAdvBookDays": 0,
    "maxAdvBookDays": 500,
    "bookDateStart": "1900-01-01",
    "bookDateEnd": "2079-06-06",
    "travelDateStart": "1900-01-30",
    "travelDateEnd": "2079-06-06",
    "mobileOnly": false
  }
}
```

### Response for an Occupancy-Based Pricing, ExpediaCollect, Sell Rate Rate Plan
```JSON
{
  "entity": {
    "resourceId": 204126855,
    "name": "Standard",
    "distributionRules": [
      {
        "expediaId": "204126855",
        "partnerCode": "Room Only",
        "distributionModel": "ExpediaCollect",
        "manageable": true,
        "compensation": {
          "percent": 0.25,
          "minAmount": 10.0
        }
      }
    ],
    "status": "Active",
    "type": "Standalone",
    "distributionModel": "ExpediaCollect",
    "rateAcquisitionType": "SellLAR",
    "pricingModel": "OccupancyBasedPricing",
    "taxInclusive": false,
    "cancelPolicy": {
      "defaultPenalties": [
        {
          "deadline": 0,
          "perStayFee": "50PercentCostOfStay",
         "amount": 0.0

        }, {
          "deadline": 72,
          "perStayFee": "None",
         "amount": 0.0

        }
      ]
    },
    "additionalGuestAmounts": [
      {
        "dateStart": "2014-10-23",
        "dateEnd": "2079-06-06",
        "ageCategory": "Adult",
        "amount": 30
      }, {
        "dateStart": "2014-10-23",
        "dateEnd": "2079-06-06",
        "ageCategory": "ChildAgeA",
        "amount": 30
      }
    ],
    "valueAddInclusions": [
      "Free Breakfast"
    ],
    "minLOSDefault": 2,
    "maxLOSDefault": 28,
    "minAdvBookDays": 23,
    "maxAdvBookDays": 290,
    "bookDateStart": "1900-01-01",
    "bookDateEnd": "2079-06-06",
    "travelDateStart": "1900-01-30",
    "travelDateEnd": "2079-06-06",
    "mobileOnly": false
  }
}
```

### Response for an Occupancy-Based Pricing, HotelCollect Rate Plan
```JSON
{
  "entity": {
    "resourceId": 204321248,
    "name": "Vikings",
    "rateAcquisitionType": "SellLAR",
    "distributionRules": [
      {
        "expediaId": "204321248A",
        "partnerCode": "RoomOnly-1",
        "distributionModel": "HotelCollect",
        "manageable": true,
        "compensation": {
          "percent": 0.20,
          "exceptions": [
            {
              "dateStart": "2015-04-08",
              "dateEnd": "2015-12-31",
              "percent": 0.15,
              "mon": true,
              "tue": true,
              "wed": true,
              "thu": true,
              "fri": false,
              "sat": false,
              "sun": false
            }, {
              "dateStart": "2015-04-08",
              "dateEnd": "2015-12-31",
              "percent": 0.18,
              "mon": false,
              "tue": false,
              "wed": false,
              "thu": false,
              "fri": true,
              "sat": true,
              "sun": true
            }
          ]
        }
      }
    ],
    "status": "Active",
    "type": "Standalone",
    "pricingModel": "OccupancyBasedPricing",
    "taxInclusive": true,
    "cancelPolicy": {
      "defaultPenalties": [
        {
          "deadline": 0,
          "perStayFee": "50PercentCostOfStay",
         "amount": 0.0

        }
      ]
    },
    "valueAddInclusions": [
      "Free Parking", "Free Wireless Internet", "Breakfast Buffet"
    ],
    "minLOSDefault": 7,
    "maxLOSDefault": 14,
    "minAdvBookDays": 0,
    "maxAdvBookDays": 30,
    "bookDateStart": "2015-01-01",
    "bookDateEnd": "2016-06-06",
    "travelDateStart": "2015-01-02",
    "travelDateEnd": "2016-12-31",
    "mobileOnly": true
  }
}
```

### Response for an Expedia Traveler Preference Rate Plan
```JSON
{
  "entity": {
    "resourceId": 204309700,
    "name": "Room Only",
    "rateAcquisitionType": "NetRate",
    "distributionRules": [
      {
        "expediaId": "204309700",
        "partnerCode": "NK2",
        "distributionModel": "ExpediaCollect",
        "manageable": true,
        "compensation": {
          "percent": 0.26,
          "minAmount": 10.0
        }
      }, {
        "expediaId": "204309700A",
        "partnerCode": "ANK2",
        "distributionModel": "HotelCollect",
        "manageable": false,
        "compensation": {
          "percent": 0.26,
          "minAmount": 10.0
        }
      }
    ],
    "status": "Active",
    "type": "Standalone",
    "pricingModel": "PerDayPricing",
    "occupantsForBaseRate": 1,
    "taxInclusive": false,
    "cancelPolicy": {
      "defaultPenalties": [
        {
          "deadline": 0,
          "perStayFee": "None",
         "amount": 0.0

        }
      ]
    },
    "additionalGuestAmounts": [
      {
        "dateStart": "2014-12-04",
        "dateEnd": "2079-06-06",
        "ageCategory": "Adult",
        "amount": 36
      }, {
        "dateStart": "2014-12-04",
        "dateEnd": "2079-06-06",
        "ageCategory": "ChildAgeA",
        "amount": 29.7
      }
    ],
    "valueAddInclusions": [
      "Free Breakfast"
    ],
    "minLOSDefault": 1,
    "maxLOSDefault": 28,
    "minAdvBookDays": 0,
    "maxAdvBookDays": 500,
    "bookDateStart": "1900-01-01",
    "bookDateEnd": "2079-06-06",
    "travelDateStart": "1900-01-30",
    "travelDateEnd": "2079-06-06",
    "mobileOnly": false
  }
}
```

##	Rate Plan Create
In a rate plan create request, most fields are optional. If an optional field is not provided, it will be defaulted per specific rules found in Section 4.4. Some of the fields cannot be set by the user; these will default to values defined by Expedia. 

The create response will contain all the fields originally provided in the request. It also includes the default values of the fields that were not provided in the request. If an error occurred, the response contains one or more errors.

*About optional fields*: some optional fields may not have any values defined in the Expedia system. In this case the fields are omitted completely in the response.

*About fields documented as not accepted in request, but returned in response*: If such fields (e.g. Compensation) are provided in the request, the API validates that the data provided matches what Expedia defaults to. Otherwise, the API rejects the rate plan creation with an error message indicating why it was rejected. For example, a partner does not need to specify the Compensation in the product create request. If a partner was to include the compensation elements in a request, the API will check whether it matches the property contract, and reject the message if does not. 

### Request and Response for a PDP Merchant Net Property
```HTTP
POST https://services.expediapartnercentral.com/products/v1/properties/1780044/roomTypes/200835/ratePlans/
Content-Type: application/json
Accept: application/json
Content-Length: 984
Request-ID : 307af24f-f59a-11e4-822e-005056b1298f
Authorization: Basic [your encoded username:password in Base64]
```
```JSON
{
  "name": "My first test rate plan",
  "distributionRules": [
    {
      "partnerCode": "TEST1",
      "distributionModel": "ExpediaCollect"
    }
  ],
  "status": "Active",
  "type": "Standalone",
  "distributionModel": "ExpediaCollect",
  "occupantsForBaseRate": 2,
  "taxInclusive": false,
  "cancelPolicy": {
    "defaultPenalties": [
      {
        "deadline": 0,
        "perStayFee": "None",
       "amount": 0.0

      }
    ]
  },
  "additionalGuestAmounts": [
    {
      "ageCategory": "Adult",
      "amount": 40
    }, {
      "ageCategory": "ChildAgeA",
      "amount": 20
    }, {
      "ageCategory": "ChildAgeB",
      "amount": 10
    }
  ],
  "valueAddInclusions": [
    "Free Parking", "Free Breakfast", "Free Internet"
  ]
}
```

The response would look like:
```JSON
{
  "entity": {
    "resourceId": 204886798,
    "name": "My first test rate plan",
    "distributionRules": [
      {
        "expediaId": "204886798",
        "partnerCode": "TEST1",
        "distributionModel": "ExpediaCollect",
        "manageable": true,
        "compensation": {
          "percent": 0.26,
          "minAmount": 0.26,
          "exceptions": [
            {
              "from": "2015-11-01",
              "to": "2015-11-02",
              "minAmount": 0,
              "percent": 0.24,
              "mon": true,
              "tue": true,
              "wed": true,
              "thu": true,
              "fri": true,
              "sat": true,
              "sun": true
            }
          ]
        }
      }
    ],
    "status": "Active",
    "type": "Standalone",
    "distributionModel": "ExpediaCollect",
    "rateAcquisitionType": "NetRate",
    "pricingModel": "PerDayPricing",
    "occupantsForBaseRate": 2,
    "taxInclusive": false,
    "cancelPolicy": {
      "defaultPenalties": [
        {
          "deadline": 0,
          "perStayFee": "None",
        "amount": 0.0

        }
      ]
    },
    "additionalGuestAmounts": [
      {
        "dateStart": "2015-03-17",
        "dateEnd": "2079-06-06",
        "ageCategory": "ChildAgeB",
        "amount": 10
      }, {
        "dateStart": "2015-03-17",
        "dateEnd": "2079-06-06",
        "ageCategory": "ChildAgeA",
        "amount": 20
      }, {
        "dateStart": "2015-03-17",
        "dateEnd": "2079-06-06",
        "ageCategory": "Adult",
        "amount": 40
      }
    ],
    "valueAddInclusions": [
      "Free Parking", "Free Breakfast", "Free Internet"
    ],
    "minLOSDefault": 1,
    "maxLOSDefault": 28,
    "minAdvBookDays": 0,
    "maxAdvBookDays": 500,
    "bookDateStart": "2015-03-17",
    "bookDateEnd": "2079-06-06",
    "travelDateStart": "2015-03-17",
    "travelDateEnd": "2079-06-06",
    "mobileOnly": false
  }
}
```
###	Request and Response for an  Expedia Traveler Preference Rate Plan
```HTTP
POST https://services.expediapartnercentral.com/products/v1/properties/1780044/roomTypes/200835/ratePlans/   HTTP/1.1
Content-Type: application/json
Accept: application/json
Content-Length: 984
Request-ID : 307af24f-f59a-11e4-822e-005056b1298f
Authorization: Basic [your encoded username:password in base64] 
```
```JSON
{
  "name": "Room Only",
  "distributionRules": [
    {
      "partnerCode": "NK2",
      "distributionModel": "ExpediaCollect"
    }, {
      "partnerCode": "ANK2",
      "distributionModel": "HotelCollect"
    }
  ],
  "occupantsForBaseRate": 1,
  "taxInclusive": false,
  "cancelPolicy": {
    "defaultPenalties": [
      {
        "deadline": 0,
        "perStayFee": "None",
       "amount": 0.0

      }
    ]
  },
  "additionalGuestAmounts": [
    {
      "dateStart": "2014-12-04",
      "dateEnd": "2079-06-06",
      "ageCategory": "Adult",
      "amount": 36
    }, {
      "dateStart": "2014-12-04",
      "dateEnd": "2079-06-06",
      "ageCategory": "ChildAgeA",
      "amount": 29.7
    }
  ],
  "valueAddInclusions": [
    "Free Breakfast"
  ]
}
```
Response would look like:
```JSON
{
  "entity": {
    "resourceId": 204309700,
    "name": "Room Only",
    "rateAcquisitionType": "NetRate",
    "distributionRules": [
      {
        "expediaId": "204309700",
        "partnerCode": "NK2",
        "distributionModel": "ExpediaCollect",
        "manageable": true,
        "compensation": {
          "percent": 0.26,
          "minAmount": 10.0
        }
      }, {
        "expediaId": "204309700A",
        "partnerCode": "ANK2",
        "distributionModel": "HotelCollect",
        "manageable": false,
        "compensation": {
          "percent": 0.26,
          "minAmount": 10.0
        }
      }
    ],
    "status": "Active",
    "type": "Standalone",
    "pricingModel": "PerDayPricing",
    "occupantsForBaseRate": 1,
    "taxInclusive": false,
    "cancelPolicy": {
      "defaultPenalties": [
        {
          "deadline": 0,
          "perStayFee": "None",
        "amount": 0.0

        }
      ]
    },
    "additionalGuestAmounts": [
      {
        "dateStart": "2014-12-04",
        "dateEnd": "2079-06-06",
        "ageCategory": "Adult",
        "amount": 36
      }, {
        "dateStart": "2014-12-04",
        "dateEnd": "2079-06-06",
        "ageCategory": "ChildAgeA",
        "amount": 29.7
      }
    ],
    "valueAddInclusions": [
      "Free Breakfast"
    ],
    "minLOSDefault": 1,
    "maxLOSDefault": 28,
    "minAdvBookDays": 0,
    "maxAdvBookDays": 500,
    "bookDateStart": "1900-01-01",
    "bookDateEnd": "2079-06-06",
    "travelDateStart": "1900-01-30",
    "travelDateEnd": "2079-06-06",
    "mobileOnly": false
  }
}
```
## Rate Plan Modify
The modify operation is a full overlay. The payload of the request needs to include all the elements/attributes returned by read (GET) of this rate plan (with the exception of the Entity element).

Partners are expected to first issue a GET request to read the rate plan resource, and then edit what they need to change. Then, they should resubmit the whole payload with the changes. Issuing a GET first, before making any modification, is quite important as changes to rate plans can be made via other means. Partners or Expedia Market Managers can make changes to the rate plan resource via ExpediaPartnerCentral. To find out the latest state of the resource, it is best to do a GET first before making any change to it.

If any field is missing, an error will be returned. It is not possible to provide partial data in the modify message, as the PUT method is a full overlay.

The resource description in Section 4.4 indicates all fields returned in a GET response and then expected in the PUT request.

Partners are allowed to modify the same fields that are manageable in the create operation, with the exception of the distribution model. It is impossible to change the distribution model after creation.

### Request and Response for an Expedia Traveler Preference Rate Plan
In this example, the rate plan created in section 4.2.2 is modified to have a more meaningful name, lower additional guest amounts and free Internet.
```HTTP
PUT https://services.expediapartnercentral.com/products/v1/properties/1780044/roomTypes/200835/ratePlans/204309700 
Content-Type: application/json
Accept: application/json
Request-ID : 307af24f-f59a-11e4-822e-005056b1298f
Authorization: Basic [your encoded username:password in base64]
```
```JSON
{
  "resourceId": 204309700,
  "name": "More Meaningful Name",
  "rateAcquisitionType": "NetRate",
  "distributionRules": [
    {
      "expediaId": "204309700",
      "partnerCode": "NK2",
      "distributionModel": "ExpediaCollect",
      "manageable": true,
      "compensation": {
        "percent": 0.26,
        "minAmount": 10.0
      }
    }, {
      "expediaId": "204309700A",
      "partnerCode": "ANK2",
      "distributionModel": "HotelCollect",
      "manageable": false,
      "compensation": {
        "percent": 0.26,
        "minAmount": 10.0
      }
    }
  ],
  "status": "Active",
  "type": "Standalone",
  "pricingModel": "PerDayPricing",
  "occupantsForBaseRate": 2,
  "taxInclusive": false,
  "cancelPolicy": {
    "defaultPenalties": [
      {
        "deadline": 0,
        "perStayFee": "None",
       "amount": 0.0

      }
    ]
  },
  "additionalGuestAmounts": [
    {
      "dateStart": "2014-12-04",
      "dateEnd": "2079-06-06",
      "ageCategory": "Adult",
      "amount": 30
    }, {
      "dateStart": "2014-12-04",
      "dateEnd": "2079-06-06",
      "ageCategory": "ChildAgeA",
      "amount": 20
    }
  ],
  "valueAddInclusions": [
    "Free Breakfast", "Free Internet"
  ],
  "minLOSDefault": 1,
  "maxLOSDefault": 28,
  "minAdvBookDays": 0,
  "maxAdvBookDays": 500,
  "bookDateStart": "1900-01-01",
  "bookDateEnd": "2079-06-06",
  "travelDateStart": "1900-01-30",
  "travelDateEnd": "2079-06-06",
  "mobileOnly": false
}
```
Response would look like:
```JSON
{
  "entity": {
    "resourceId": 204309700,
    "name": "More Meaningful Name",
    "rateAcquisitionType": "NetRate",
    "distributionRules": [
      {
        "expediaId": "204309700",
        "partnerCode": "NK2",
        "distributionModel": "ExpediaCollect",
        "manageable": true,
        "compensation": {
          "percent": 0.26,
          "minAmount": 10.0
        }
      }, {
        "expediaId": "204309700A",
        "partnerCode": "ANK2",
        "distributionModel": "HotelCollect",
        "manageable": false,
        "compensation": {
          "percent": 0.26,
          "minAmount": 10.0
        }
      }
    ],
    "status": "Active",
    "type": "Standalone",
    "pricingModel": "PerDayPricing",
    "occupantsForBaseRate": 2,
    "taxInclusive": false,
    "cancelPolicy": {
      "defaultPenalties": [
        {
          "deadline": 0,
          "perStayFee": "None",
        "amount": 0.0

        }
      ]
    },
    "additionalGuestAmounts": [
      {
        "dateStart": "2014-12-04",
        "dateEnd": "2079-06-06",
        "ageCategory": "Adult",
        "amount": 30
      }, {
        "dateStart": "2014-12-04",
        "dateEnd": "2079-06-06",
        "ageCategory": "ChildAgeA",
        "amount": 20
      }
    ],
    "valueAddInclusions": [
      "Free Breakfast", "Free Internet"
    ],
    "minLOSDefault": 1,
    "maxLOSDefault": 28,
    "minAdvBookDays": 0,
    "maxAdvBookDays": 500,
    "bookDateStart": "1900-01-01",
    "bookDateEnd": "2079-06-06",
    "travelDateStart": "1900-01-30",
    "travelDateEnd": "2079-06-06",
    "mobileOnly": false
  }
}
```
