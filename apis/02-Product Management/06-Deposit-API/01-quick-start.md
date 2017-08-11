# Quick Start
The Deposit API enables Expedia partners to set, update or remove a property's deposit policy. This feature needs to be used in conjunction with the product API's rate plan resource: first set a deposit policy at the property level with this API, then add or update rate plans, and indicate, for each rate plan, whether they require a deposit (using the property's deposit policy) or not via the depositRequired attribute.

If you are not familiar with how Expedia defines a Deposit Policy, please read the [Deposit Policy Overview in the FAQ & Guides section](guides.html#depositpolicyoverview) first, before attempting to use the API.

----

## Authentication
Deposit API uses a Basic Authorization scheme. The same credentials used to manage properties via EQC today are compatible with the Deposit API. 

For more details, please review the [Authentication section](reference.html#authentication) of the API Definition section.

For partners using Expedia APIs for the first time, please refer to the [FAQ & Guides section](guides.html#howtogetstarted) for instructions on how to obtain credentials.

----

## Reading a Deposit Policy
To obtain the deposit policy defined for a property, issue a GET request for the depositPolicy resource. For our test property with Expedia property ID 12933870, this would be how:
```
GET https://services.expediapartnercentral.com/properties/12933870/depositPolicy
```

If no deposit policy was ever defined for this property, or if a previously existing deposit policy was removed, a HTTP Status Code 404 / Not Found would be returned. In the policy exists, something like this would be returned:
```json
{
  "entity": {
    "defaultPolicy": {
      "payments": [
        {
          "type": "PERCENT",
          "value": 10,
          "when": {
            "type": "UPON_BOOKING"
          }
        },
        {
          "type": "PERCENT",
          "value": 40,
          "when": {
            "type": "DAYS_PRIOR",
            "value": 30
          }
        },
        {
          "type": "REMAINDER",
          "when": {
            "type": "UPON_ARRIVAL"
          }
        }
      ]
    },
    "exceptionPolicies": [
      {
        "description": "High Season",
        "payments": [
          {
            "type": "PERCENT",
            "value": 100,
            "when": {
              "type": "UPON_BOOKING"
            }
          }
        ],
        "dateRanges": [
          {
            "startDate": "2017-07-30",
            "endDate": "2017-08-30",
            "daysOfWeek": [
              "SUN",
              "MON",
              "TUE",
              "WED",
              "THU",
              "FRI",
              "SAT"
            ]
          },
          {
            "startDate": "2018-07-30",
            "endDate": "2018-08-30",
            "daysOfWeek": [
              "SUN",
              "MON",
              "TUE",
              "WED",
              "THU",
              "FRI",
              "SAT"
            ]
          }
        ]
      },
      {
        "description": "Holiday Season",
        "payments": [
          {
            "type": "PERCENT",
            "value": 100,
            "when": {
              "type": "DAYS_PRIOR",
              "value": 7
            }
          }
        ],
        "dateRanges": [
          {
            "startDate": "2017-12-17",
            "endDate": "2018-01-06",
            "daysOfWeek": [
              "SUN",
              "MON",
              "TUE",
              "WED",
              "THU",
              "FRI",
              "SAT"
            ]
          },
          {
            "startDate": "2018-12-17",
            "endDate": "2019-01-06",
            "daysOfWeek": [
              "SUN",
              "MON",
              "TUE",
              "WED",
              "THU",
              "FRI",
              "SAT"
            ]
          }
        ]
      }
    ],
    "_links": {
      "self": {
        "href": "https://services.expediapartnercentral.com/properties/12933870/depositPolicy"
      },
      "ratePlans": [
        {
          "href": "https://services.expediapartnercentral.com/properties/12933870/roomTypes/201706774/ratePlans/208503977"
        },
        {
          "href": "https://services.expediapartnercentral.com/properties/12933870/roomTypes/201706774/ratePlans/208504009"
        },
        {
          "href": "https://services.expediapartnercentral.com/properties/12933870/roomTypes/201706774/ratePlans/208537868"
        },
        {
          "href": "https://services.expediapartnercentral.com/properties/12933870/roomTypes/201706639/ratePlans/208503427"
        },
        {
          "href": "https://services.expediapartnercentral.com/properties/12933870/roomTypes/201706639/ratePlans/208511485"
        },
        {
          "href": "https://services.expediapartnercentral.com/properties/12933870/roomTypes/201706639/ratePlans/208511588"
        },
        {
          "href": "https://services.expediapartnercentral.com/properties/12933870/roomTypes/201706639/ratePlans/208537732"
        },
        {
          "href": "https://services.expediapartnercentral.com/properties/12933870/roomTypes/201706639/ratePlans/208537755"
        }
      ]
    }
  }
}
```
This policy defines both a default policy, applicable on any date, for any of the rate plans marked as using it. It also defines exceptions. Exceptions are overrides to the default, and will take precedence for the dates they cover.

## Creating / Updating / Deleting a Deposit Policy
It is also possible to create, update (full overlay) or delete a deposit policy. Our [Sample Messages](sample-messages.html) section contains examples for each scenario. Please make sure to also read our [API Definition](reference.html) and [FAQ & Guides](guides.html) sections to learn more about the API and its capabilities.
