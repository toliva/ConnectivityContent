# Quick Start
The Product API enables Expedia partners to read, create, and edit room types and rate plans via the API, without having to use Expedia PartnerCentral (EPC) or contact their market manager. It also offers the possibility to read basic property configuration to better use the API to manage room types and rate plans afterwards.

----

## Authentication
Product API uses a Basic Authorization scheme. The same credentials used to manage properties via EQC today are compatible with the Product API. 

For more details, please review the [Authentication section](reference.html#authentication) of the API Definition section.

For partners using Expedia APIs for the first time, please refer to the [FAQ & Guides section](guides.html#howtogetstarted) for instructions on how to obtain credentials.

----

## Reading property, room type or rate plan information
The simplest way to start interacting with the Product API is to access the 
<https://services.expediapartnercentral.com/products/properties> endpoint in a browser, and input EQC API username and password when prompted for it.

Partners working with Expedia APIs for the first time and interested in testing this right away can use the following test account to try the above URL:
```
username: EQCtest12933873
password: cc47an46
```

The result will be an array of properties assigned to your account. For example:
```JSON
{
    "entity": [
        {
            "resourceId": 12933873,
            "name": "EQC Hotel 84",
			"partnerCode": "EQC123456",
            "status": "Active",
            "currency": "USD",
            "address": {
                "line1": "1234 Test Street",
                "line2": "",
                "city": "Région Test",
                "state": "",
                "postalCode": "",
                "countryCode": "USA"
            },
            "distributionModels": [
                "ExpediaCollect",
                "HotelCollect"
            ],
            "rateAcquisitionType": "SellLAR",
            "taxInclusive": false,
            "pricingModel": "OccupancyBasedPricing",
            "baseAllocationEnabled": false,
            "minLOSThreshold": 1,
            "cancellationTime": "18:00",
            "timezone": "(GMT) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London",
            "reservationCutOff": {
                "time": "23:59",
                "day": "sameDay"
            }
        }
    ]
}
```
Partners can then navigate down to room types and rate plans. To find room types assigned to a specific property, add the property resource ID and /roomTypes to the URL:
<https://services.expediapartnercentral.com/products/properties/12933873/roomTypes>

The result will be an array of active room types under this property. For example:
```JSON
{
  "entity": [
    {
      "resourceId": 201357991,
      "partnerCode": "DLXRM",
      "name": {
        "attributes": {
          "typeOfRoom": "Room",
          "roomClass": "Deluxe",
          "view": "Mountain View",
          "featuredAmenity": "Business Lounge Access",
          "customLabel": "here is a custom text223"
        },
        "value": "Deluxe Room, Business Lounge Access, Mountain View (here is a custom text223)"
      },
      "status": "Active",
      "ageCategories": [
        {
          "category": "Adult", 
          "minAge": 18
        }, 
        {
          "category": "ChildAgeA", 
          "minAge": 2
        }, 
        {
          "category": "Infant", 
          "minAge": 0
        }
      ],
      "maxOccupancy": {
        "adults": 0, 
        "children": 0, 
        "total": 4
      }, 
      "standardBedding": [
        {
          "option": [
            {
              "quantity": 1, 
              "size": "Full", 
              "type": "Full Bed"
            }, 
            {
              "quantity": 2, 
              "size": "Twin", 
              "type": "Twin Bed"
            }
          ]
        }
      ], 
      "smokingPreferences": [
        "Smoking", 
        "Non-Smoking"
      ], 
    },
    {
      "resourceId": 201357992, 
      "partnerCode": "Executive RoomX3", 
      "name": {
        "value": "Executive Suite"
      },
      "ageCategories": [
        {
          "category": "Adult", 
          "minAge": 18
        }, 
        {
          "category": "Infant", 
          "minAge": 0
        }
      ], 
      "maxOccupancy": {
        "adults": 0, 
        "children": 0, 
        "total": 6
      }, 
      "standardBedding": [
        {
          "option": [
            {
              "quantity": 1, 
              "size": "Full", 
              "type": "Full Bed"
            }, 
            {
              "quantity": 2, 
              "size": "Twin", 
              "type": "Bunk Bed"
            }
          ]
        }
      ], 
      "smokingPreferences": [
        "Smoking", 
        "Non-Smoking"
      ] 
    }
  ]
}
```
Partners can then get to the rate plans of a room type. To find rate plans associated to a room type, add the room type resource ID and /roomTypes to the URL:
<https://services.expediapartnercentral.com/products/properties/12933873/roomTypes/201357991/ratePlans>

The result will be an array of active rate plans under this property and room type. For example:
```JSON
{
    "entity": [
        {
            "resourceId": 206651852,
            "name": "Best available rate",
            "rateAcquisitionType": "SellLAR",
            "distributionRules": [
                {
                    "expediaId": "206651852",
                    "partnerCode": "BAREC",
                    "distributionModel": "ExpediaCollect",
                    "manageable": false,
                    "compensation": {
                        "percent": 0.18,
                        "minAmount": 0
                    }
                },
                {
                    "expediaId": "206651852A",
                    "partnerCode": "BARHC",
                    "distributionModel": "HotelCollect",
                    "manageable": true,
                    "compensation": {
                        "percent": 0.18
                    }
                }
            ],
            "status": "Active",
            "type": "Standalone",
            "pricingModel": "OccupancyBasedPricing",
            "taxInclusive": false,
            "cancelPolicy": {
                "defaultPenalties": [
                    {
                        "deadline": 0,
                        "perStayFee": "1stNightRoomAndTax",
                        "amount": 0
                    },
                    {
                        "deadline": 24,
                        "perStayFee": "None",
                        "amount": 0
                    }
                ]
            },
            "additionalGuestAmounts": [
                {
                    "dateStart": "2015-11-16",
                    "dateEnd": "2079-06-06",
                    "ageCategory": "Adult",
                    "amount": 10
                }
            ],
            "minLOSDefault": 1,
            "maxLOSDefault": 28,
            "minAdvBookDays": 0,
            "maxAdvBookDays": 500,
            "bookDateStart": "1900-01-01",
            "bookDateEnd": "2079-06-06",
            "travelDateStart": "1901-01-01",
            "travelDateEnd": "2079-06-06",
            "mobileOnly": true
        },
        {
            "resourceId": 206651853,
            "name": "Breakfast Included Non Refundable",
            "rateAcquisitionType": "SellLAR",
            "distributionRules": [
                {
                    "expediaId": "206651853",
                    "partnerCode": "xxBRKHC",
                    "distributionModel": "ExpediaCollect",
                    "manageable": false,
                    "compensation": {
                        "percent": 0.18,
                        "minAmount": 0
                    }
                },
                {
                    "expediaId": "206651853A",
                    "partnerCode": "xxBRKHC",
                    "distributionModel": "HotelCollect",
                    "manageable": true,
                    "compensation": {
                        "percent": 0.18
                    }
                }
            ],
            "status": "Active",
            "type": "Standalone",
            "pricingModel": "OccupancyBasedPricing",
            "taxInclusive": false,
            "cancelPolicy": {
                "defaultPenalties": [
                    {
                        "deadline": 0,
                        "perStayFee": "FullCostOfStay",
                        "amount": 0
                    }
                ]
            },
            "additionalGuestAmounts": [
                {
                    "dateStart": "2015-11-16",
                    "dateEnd": "2079-06-06",
                    "ageCategory": "Adult",
                    "amount": 10
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
            "travelDateStart": "1901-01-01",
            "travelDateEnd": "2079-06-06",
            "mobileOnly": false
        }
    ]
}
```

----

## Add a Rate Plan
To add a new rate plan on an existing room type, partners can send a minimal payload, and Expedia will default everything. For example, doing a POST on <https://services.expediapartnercentral.com/products/properties/12933873/roomTypes/201357991/ratePlans> with this payload to create an ExpediaTravelerPreference-enabled rate plan:
```JSON
{
  "distributionRules": [
    {
      "partnerCode": "HCollect1",
      "distributionModel": "HotelCollect"
    }, {
      "partnerCode": "ECollect1",
      "distributionModel": "ExpediaCollect"
    }
  ]
}
```
The response returned by the product API will contain all the default values used:
```JSON
{
  "entity": {
    "resourceId": 206773289,
    "name": "ECollect1",
    "rateAcquisitionType": "SellLAR",
    "distributionRules": [
      {
        "expediaId": "206773289",
        "partnerCode": "ECollect1",
        "distributionModel": "ExpediaCollect",
        "manageable": false,
        "compensation": {
          "percent": 0.2,
          "minAmount": 0.0
        }
      }, {
        "expediaId": "206773289A",
        "partnerCode": "HCollect1",
        "distributionModel": "HotelCollect",
        "manageable": true,
        "compensation": {
          "percent": 0.2
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
          "perStayFee": "1stNightRoomAndTax",
          "amount": 0.0
        }, {
          "deadline": 24,
          "perStayFee": "None",
          "amount": 0.0
        }
      ]
    },
    "additionalGuestAmounts": [
      {
        "dateStart": "2015-04-08",
        "dateEnd": "2079-06-06",
        "ageCategory": "Adult",
        "amount": 0.0
      }
    ],
    "minLOSDefault": 1,
    "maxLOSDefault": 28,
    "minAdvBookDays": 0,
    "maxAdvBookDays": 500,
    "bookDateStart": "2015-11-30",
    "bookDateEnd": "2079-06-06",
    "travelDateStart": "2015-11-30",
    "travelDateEnd": "2079-06-06",
    "mobileOnly": false
  }
}
```
