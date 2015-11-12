#	Intro
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
