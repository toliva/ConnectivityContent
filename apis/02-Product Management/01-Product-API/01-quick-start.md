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
username: EQCtest12933870
password: wm47ah92
```

The result will be an array of properties assigned to your account, and will do so using the latest version of the API. For example:
```JSON
{
    "entity": [
        {
            "resourceId": 12933870,
            "name": "EQC Hotel 81",
            "partnerCode": "12933870",
            "status": "Active",
            "currency": "USD",
            "address": {
                "line1": "1244 Test Street",
                "line2": "",
                "city": "Region Test",
                "state": "WA",
                "postalCode": "98004",
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
<https://services.expediapartnercentral.com/products/properties/12933870/roomTypes>

The result will be an array of active room types under this property. For example:
```JSON
{
    "entity": [
        {
            "resourceId": 201357986,
            "partnerCode": "Executive Room",
            "name": {
                "value": "Executive Suite"
            },
            "status": "Active",
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
                "total": 6,
                "adults": 6,
                "children": 5
            },
            "standardBedding": [
                {
                    "option": [
                        {
                            "quantity": 1,
                            "type": "Full Bed",
                            "size": "Full"
                        },
                        {
                            "quantity": 2,
                            "type": "Bunk Bed",
                            "size": "Twin"
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
<https://services.expediapartnercentral.com/products/properties/12933870/roomTypes/201357986/ratePlans>

The result will be an array of active rate plans under this property and room type. For example:
```JSON
{
    "entity": [
        {
            "resourceId": 206651831,
            "name": "RoomOnly1",
            "rateAcquisitionType": "SellLAR",
            "distributionRules": [
                {
                    "expediaId": "206651831",
                    "partnerCode": "RoomOnly1",
                    "distributionModel": "ExpediaCollect",
                    "manageable": false,
                    "compensation": {
                        "percent": 0.1,
                        "minAmount": 0
                    }
                },
                {
                    "expediaId": "206651831A",
                    "partnerCode": "RoomOnly1",
                    "distributionModel": "HotelCollect",
                    "manageable": true,
                    "compensation": {
                        "percent": 0.1
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
            "mobileOnly": false
        }
    ]
}
```

----

## Add a Rate Plan
To add a new rate plan on an existing room type, partners can send a minimal payload, and Expedia will default everything. For example, doing a POST on <https://services.expediapartnercentral.com/products/properties/12933873/roomTypes/201357991/ratePlans> with this payload to create an ExpediaTravelerPreference-enabled rate plan. When doing a POST, it is required to specify which version of the API you are attempting to do a create for, by providing the right content-type header. For example:

```
POST https://services.expediapartnercentral.com/products/properties/12933870/roomTypes/201357986/ratePlans
Content-Type: application/vnd.expedia.eps.product-v2+json
```

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
        "resourceId": 207994977,
        "name": "ECollect1",
        "rateAcquisitionType": "SellLAR",
        "distributionRules": [
            {
                "expediaId": "207994977",
                "partnerCode": "ECollect1",
                "distributionModel": "ExpediaCollect",
                "manageable": false,
                "compensation": {
                    "percent": 0.1,
                    "minAmount": 0
                }
            },
            {
                "expediaId": "207994977A",
                "partnerCode": "HCollect1",
                "distributionModel": "HotelCollect",
                "manageable": true,
                "compensation": {
                    "percent": 0.1
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
        "travelDateStart": "1900-01-01",
        "travelDateEnd": "2079-06-06",
        "mobileOnly": false
    }
}
```
