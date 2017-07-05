# Sample Messages
This section contains sample messages illustrating how to interact with the Deposit API.

## Reading the deposit policy of a property
To read the deposit policy of a property, a GET of /depositPolicy for the property will return it:

```text
GET https://services.expediapartnercentral.com/properties/12933870/depositPolicy
Accept: application/json
```

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
          "type": "PERCENT",
          "value": 25,
          "when": {
            "type": "DAYS_PRIOR",
            "value": 15
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
        "description": "Peak Summer Season",
        "dateRanges": [
          {
            "startDate": "2017-06-25",
            "endDate": "2017-07-31",
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
            "startDate": "2017-08-13",
            "endDate": "2017-08-31",
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
        ],
        "payments": [
          {
            "type": "PERCENT",
            "value": 100,
            "when": {
              "type": "UPON_BOOKING"
            }
          }
        ]
      },
      {
        "description": "Low Season",
        "dateRanges": [
          {
            "startDate": "2017-09-01",
            "endDate": "2017-11-30",
            "daysOfWeek": [
              "SUN",
              "FRI",
              "SAT"
            ]
          }
        ],
        "payments": [
          {
            "type": "NIGHT",
            "value": 1,
            "when": {
              "type": "UPON_BOOKING"
            }
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

## Creating the default deposit policy of a property
To setup the default deposit policy of a property, you can provide a policy without any exceptions.
```text
PUT https://services.expediapartnercentral.com/properties/12933870/depositPolicy
Accept: application/json
Content-Type: application/json
```

```json
{
  "defaultPolicy": {
    "payments": [
      {
        "type": "PERCENT",
        "value": 50.0,
        "when": {
          "type": "UPON_BOOKING"
        }
      },      
      {
        "type": "REMAINDER",
        "when": {
          "type": "UPON_ARRIVAL"
        }
      }
    ]
  }
}
```

This would setup a simply policy that is applicable all the time, where 50% of the payment is asked upfront upon booking and the remainder is collected upon arrival.

The response when successful will only return a 201 Created without a reponse body.

## Specifying exceptions to the default deposit policy of a property
On top of the default policy, the partner can also specify exceptions that are applicable for certain date ranges.

```text
PUT https://services.expediapartnercentral.com/properties/12933870/depositPolicy
Accept: application/json
Content-Type: application/json
```

```json
{
  "defaultPolicy": {
    "payments": [
      {
        "type": "PERCENT",
        "value": 50.0,
        "when": {
          "type": "UPON_BOOKING"
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
      "dateRanges": [
        {
          "startDate": "2017-06-25",
          "endDate": "2017-07-31",
          "daysOfWeek": [
            "SAT",
            "SUN"
          ]
        }
      ],
      "description": "Peak Summer Season Weekends",
      "payments": [
        {
          "type": "PERCENT",
          "value": 100,
          "when": {
            "type": "UPON_BOOKING"
          }
        }
      ]
    }
  ]
}
```

In this case, we'd be overriding the default deposit policy for weekends between June 25th and August 31st where 100% of the payment is asked upfront upon booking, instead of the default policy where only half is aksed upon booking and the remainder is collected upon arrival.

## Deleting the deposit policy of a property
The partner can issue a delete statement to prevent the deposit policy from being applied.
```text
DELETE https://services.expediapartnercentral.com/properties/12933870/depositPolicy
Accept: application/json
```

The response when successful will only return a 204 No Content without a reponse body.

## Getting errors from the Deposit API
Here's an example of how the Deposit API returns errors to customers. If a partner provides an invalid propertyId:
```text
GET https://services.expediapartnercentral.com/properties/123/depositPolicy
Accept: application/json
```

An error is returned
```json
{
    "errors": [
        {
            "code": 1000,
            "message": "Access denied: your account is not authorized to manage this property."
        }
    ]
}
```
