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
```JSON
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
