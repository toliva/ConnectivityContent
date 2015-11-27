#	Room Type Examples
The room type resource describes the configuration of a specific room type/class/category in the Expedia system. Room types belong to hotels, and room types contain one to many rate plans. A room type resource will contain information such as bed types, smoking preferences, occupancy settings by age categories, etc.

Against the room type resource, partners can retrieve a list of room types or a specific room type. Partners can also create new room types (one at a time), and edit an existing room type (one at a time, full overlay operation).

---

##	Single Room Type Read Request/Response
This example shows how to do a read request for a single room type with 2 age categories, a choice of 2 bed types, and supporting both smoking and non-smoking

Request:
```HTTP
GET https://services.expediapartnercentral.com/products/v1/properties/1780044/roomTypes/200616960
Content-Type: application/json
Accept: application/json
Authorization: Basic [your encoded username:password in Base64]
```
Response:
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
## All Room Types Read Request/Response
This example shows how to do a read request to retrieve all room types under a given property. We'll illustrate how to add the status param on the request to get all active and inactive room types. In this example, the property has 2 active and 2 inactive room types, so the request will return 4 room types, sorted by resourceId.

Request:
```HTTP
GET https://services.expediapartnercentral.com/products/v1/properties/1780041/roomTypes?status=all
Content-Type: application/json
Accept: application/json
Authorization: Basic [your encoded username:password in Base64]
```
Response:
```JSON
{
    "entity": [
        {
            "resourceId": 204830,
            "partnerCode": "Standard Room ",
            "name": {
                "value": "Standard Room"
            },
            "status": "Inactive",
            "maxOccupants": 2,
            "occupancyByAge": [
                {
                    "ageCategory": "Adult",
                    "minAge": 18,
                    "maxOccupants": 2
                }
            ],
            "bedTypes": [
                {
                    "id": "1.14",
                    "name": "1 king bed"
                },
                {
                    "id": "1.15",
                    "name": "1 queen bed"
                }
            ],
            "smokingPreferences": [
                {
                    "id": "2.1",
                    "name": "Non-Smoking"
                },
                {
                    "id": "2.2",
                    "name": "Smoking"
                }
            ]
        },
        {
            "resourceId": 204832,
            "partnerCode": "Superior Room ",
            "name": {
                "value": "Superior Room"
            },
            "status": "Inactive",
            "maxOccupants": 3,
            "occupancyByAge": [
                {
                    "ageCategory": "Adult",
                    "minAge": 18,
                    "maxOccupants": 2
                },
                {
                    "ageCategory": "ChildAgeA",
                    "minAge": 2,
                    "maxOccupants": 2
                },
                {
                    "ageCategory": "Infant",
                    "minAge": 0,
                    "maxOccupants": 2
                }
            ],
            "bedTypes": [
                {
                    "id": "1.14",
                    "name": "1 king bed"
                },
                {
                    "id": "1.15",
                    "name": "1 queen bed"
                }
            ],
            "smokingPreferences": [
                {
                    "id": "2.1",
                    "name": "Non-Smoking"
                },
                {
                    "id": "2.2",
                    "name": "Smoking"
                }
            ]
        },
        {
            "resourceId": 209857,
            "partnerCode": "Deluxe Suite",
            "name": {
                "attributes": {
                    "typeOfRoom": "Suite",
                    "roomClass": "Deluxe"
                },
                "value": "Deluxe Suite"
            },
            "status": "Active",
            "maxOccupants": 3,
            "occupancyByAge": [
                {
                    "ageCategory": "Adult",
                    "minAge": 17,
                    "maxOccupants": 2
                },
                {
                    "ageCategory": "ChildAgeA",
                    "minAge": 0,
                    "maxOccupants": 2
                }
            ],
            "bedTypes": [
                {
                    "id": "1.14",
                    "name": "1 king bed"
                },
                {
                    "id": "1.21",
                    "name": "2 double beds"
                }
            ],
            "smokingPreferences": [
                {
                    "id": "2.1",
                    "name": "Non-Smoking"
                },
                {
                    "id": "2.2",
                    "name": "Smoking"
                }
            ]
        },
        {
            "resourceId": 211705,
            "partnerCode": "211705",
            "name": {
                "value": "Junior Suite"
            },
            "status": "Active",
            "maxOccupants": 3,
            "occupancyByAge": [
                {
                    "ageCategory": "Adult",
                    "minAge": 18,
                    "maxOccupants": 2
                },
                {
                    "ageCategory": "ChildAgeA",
                    "minAge": 0,
                    "maxOccupants": 2
                }
            ],
            "bedTypes": [
                {
                    "id": "1.14",
                    "name": "1 king bed"
                },
                {
                    "id": "1.21",
                    "name": "2 double beds"
                }
            ],
            "smokingPreferences": [
                {
                    "id": "2.1",
                    "name": "Non-Smoking"
                },
                {
                    "id": "2.2",
                    "name": "Smoking"
                }
            ]
        }
    ]
}
```

## Room Type Create Request/Response with a Predefined Room Name
When creating a new room type, partners have the choice to pick a predefined name, or provide a set of attributes that can be included in the room name.

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
When successful, the API will respond with what Expedia created. Please note that room types are always created as inactive, and will become active automatically when the first active rate plan is created.
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

##	Room Type Create Request/Response with Room Name Attributes
When creating a new room type, partners have the choice to pick a predefined name, or provide a set of attributes that can be included in the room name.

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
When successful, the API will respond with what Expedia created. Please note that room types are always created as inactive, and will become active automatically when the first active rate plan is created.
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
## Room Type Create Request/Response with Ignored Room Name Attributes
When using room name attributes to generate a name, Expedia has specific rules around how many attributes can be used. To abstract this complexity from our partners, the API will accept that partners specify more attributes than Expedia would actually use to generate the name. The selection logic and ranking of attributes are described in details in our Guides section. The example below shows what would happen if a partner was to send all possible room name attributes in a create request. The Product API would respond back with the attributes it used, and the name that was generated.
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

The response will not include bedroom details, view, featured amenity and area as we cannot used all attributes to build a name. 
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

##	Room Type Modify Request/Response, Changing Predefined Name, Code and Age Categories
Leveraging the Create example from above, the name is modified to Executive Suite, child age category is removed, and partner code is changed.

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
## Modify Room Name from using a Predefined Name to using Name Attributes 
Leveraging the Create example from above, predefined name is modified to a new room name built from attributes, child age category is removed, and partner code is changed.

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
