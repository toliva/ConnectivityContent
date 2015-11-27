#	Rate Plan Examples
The rate plan resource defines the configuration of a rate that a partner would like to make available to Expedia customers. It contains the more static information about the rate, for example its name, code, cancellation and change policy, what is the base compensation, what are the additional guest amounts to charge, etc.
More dynamic information like availability and rate information per stay date is exchanged via another API, EQC AR.

---

## Single Rate Plan Read Request/Response
This example is for a Per Day Pricing, ExpediaCollect, Net Rate Rate Plan.

Request:
```HTTP
GET https://services.expediapartnercentral.com/products/v1/properties/1780044/roomTypes/200828484/ratePlans/204297188
Content-Type: application/json
Accept: application/json
Request-ID : 307af24f-f59a-11e4-822e-005056b1298f
Authorization: Basic [your encoded username:password in Base64]
```
Response:
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
### Read All Active Rate Plans for a Room Type Request/Response
Request:
```HTTP
GET https://services.expediapartnercentral.com/products/v1/properties/1780044/roomTypes/200828484/ratePlans
Content-Type: application/json
Accept: application/json
Request-ID : 307af24f-f59a-11e4-822e-005056b1298f
Authorization: Basic [your encoded username:password in Base64]
```
Response:
```JSON
{
    "entity": [
        {
            "resourceId": 205020299,
            "name": "RoomOnly22",
            "rateAcquisitionType": "SellLAR",
            "distributionRules": [
                {
                    "expediaId": "205020299A",
                    "partnerCode": "RoomOnly22",
                    "distributionModel": "HotelCollect",
                    "manageable": true,
                    "compensation": {
                        "percent": 0.1
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
                    "dateStart": "2015-07-10",
                    "dateEnd": "2079-06-06",
                    "ageCategory": "Adult",
                    "amount": 0
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
            "mobileOnly": false
        },
        {
            "resourceId": 205020302,
            "name": "RoomOnly11",
            "rateAcquisitionType": "SellLAR",
            "distributionRules": [
                {
                    "expediaId": "205020302A",
                    "partnerCode": "RoomOnly",
                    "distributionModel": "HotelCollect",
                    "manageable": true,
                    "compensation": {
                        "percent": 0.1
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
                    "dateStart": "2015-07-10",
                    "dateEnd": "2079-06-06",
                    "ageCategory": "Adult",
                    "amount": 0
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
            "mobileOnly": false
        },
        {
            "resourceId": 205833985,
            "name": "BB",
            "rateAcquisitionType": "SellLAR",
            "distributionRules": [
                {
                    "expediaId": "205833985",
                    "partnerCode": "RoomOnly",
                    "distributionModel": "ExpediaCollect",
                    "manageable": false,
                    "compensation": {
                        "percent": 0.23,
                        "minAmount": 0
                    }
                },
                {
                    "expediaId": "205833985A",
                    "partnerCode": "RoomOnly",
                    "distributionModel": "HotelCollect",
                    "manageable": true,
                    "compensation": {
                        "percent": 0.23
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
                    "dateStart": "2015-04-08",
                    "dateEnd": "2079-06-06",
                    "ageCategory": "Adult",
                    "amount": 0
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
            "mobileOnly": false
        }
    ]
}
```
## Request/Response for an Occupancy-Based Pricing, ExpediaCollect, Sell Rate Rate Plan
Request:
```HTTP
GET https://services.expediapartnercentral.com/products/v1/properties/1780044/roomTypes/200828484/ratePlans/204126855
Content-Type: application/json
Accept: application/json
Request-ID : 307af24f-f59a-11e4-822e-005056b1298f
Authorization: Basic [your encoded username:password in Base64]
```
Response:
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

## Request/Response for an Occupancy-Based Pricing, HotelCollect Rate Plan
Request:
```HTTP
GET https://services.expediapartnercentral.com/products/v1/properties/1780044/roomTypes/200828484/ratePlans/204321248
Content-Type: application/json
Accept: application/json
Request-ID : 307af24f-f59a-11e4-822e-005056b1298f
Authorization: Basic [your encoded username:password in Base64]
```
Response:
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

## Request/Response for an Expedia Traveler Preference Rate Plan
Request:
```HTTP
GET https://services.expediapartnercentral.com/products/v1/properties/1780044/roomTypes/200828484/ratePlans/204309700
Content-Type: application/json
Accept: application/json
Request-ID : 307af24f-f59a-11e4-822e-005056b1298f
Authorization: Basic [your encoded username:password in Base64]
```
Response:
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

## Rate Plan Create Request and Response for a PDP Merchant Net Property
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
## Create Request and Response for an  Expedia Traveler Preference Rate Plan
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
## Modify Request and Response for an Expedia Traveler Preference Rate Plan
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
