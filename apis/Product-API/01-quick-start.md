# Quick Start
The Product API enables Expedia partners to read, create, and edit room types and rate plans via the API, without having to use Expedia PartnerCentral (EPC) or contact their market manager. It also offers the possibility to read basic property configuration to better use the API to manage room types and rate plans afterwards.

----

## Authentication
The same credentials used to manage properties via EQC today are compatible with the Product API.
Partner must include a valid username/password in the HTTP header of the request using the below format: 
```
Authorization: Basic <username and password encoded by Base64>
```
Example: 
```
Authorization: Basic RVFDVXNlcjplUWNQYSQkd29yRA==
```
Where “RVFDVXNlcjplUWNQYSQkd29yRA==” is the string “EQCUser:eQcPa$$worD (username:password) Base64-encoded.

----

## Reading property, room type or rate plan information
The simplest way to start interacting with the Product API is to access the 
<https://services.expediapartnercentral.com/products/v1/properties> endpoint in a browser, and input EQC API username and password when prompted for it.

The result will be an array of properties assigned to your account. For example:
```JSON
{
  "entity": [
    {
      "resourceId": 1780041,
      "name": "EQC Hotel 9",
      "status": "Active",
      "currency": "USD",
      "address": {
        "line1": "123 Main St",
        "line2": "",
        "city": "Region Test",
        "state": "",
        "postalCode": "",
        "countryCode": "USA"
      },
      "distributionModels": [
        "ExpediaCollect", "HotelCollect"
      ],
      "rateAcquisitionType": "SellLAR",
      "taxInclusive": false,
      "pricingModel": "PerDayPricing",
      "baseAllocationEnabled": true,
      "minLOSThreshold": 1,
      "cancellationTime": "18:00",
      "timezone": "(GMT-08:00) Pacific Time (US & Canada); Tijuana",
      "reservationCutOff": {
        "time": "05:00",
        "day": "nextDay"
      }
    }
  ]
}
```
Partners can then navigate down to room types and rate plans. To find room types assigned to a specific property, add the property resource ID and /roomTypes to the URL:
<https://services.expediapartnercentral.com/products/v1/properties/1780041/roomTypes>

The result will be an array of active room types under this property. For example:
```JSON
{
  "entity": [
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
        }, {
          "ageCategory": "ChildAgeA",
          "minAge": 0,
          "maxOccupants": 2
        }
      ],
      "bedTypes": [
        {
          "id": "1.14",
          "name": "1 king bed"
        }, {
          "id": "1.21",
          "name": "2 double beds"
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
  ]
}
```
Partners can then get to the rate plans of a room type. To find rate plans associated to a room type, add the room type resource ID and /roomTypes to the URL:
<https://services.expediapartnercentral.com/products/v1/properties/1780041/roomTypes/209857/ratePlans>

The result will be an array of active rate plans under this property. For example:
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
          "dateStart": "2015-07-10",
          "dateEnd": "2079-06-06",
          "ageCategory": "Adult",
          "amount": 0.0
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
## Add a Rate Plan
To add a new rate plan on an existing room type, partners can send a minimal payload, and Expedia will default everything. For example, doing a POST on <https://services.expediapartnercentral.com/products/v1/properties/1780041/roomTypes/209857/ratePlans> with this payload to create an ExpediaTravelerPreference-enabled rate plan:
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
