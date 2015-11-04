# EPS Product API
The Product API will enable our hotels partners to create and edit their room types and rate plans via APIs,
                                    without having to use EPC or contact their market manager. The API also enables our partners to read the
                                    definition of the room types and rate plans created in the system.

## Error codes
### Renders the page describing the business error codes used by the API
- Method: `GET`
- Url: https://ws.expediaquickconnect.com/v1/documentation/api/errors
- Consumes: `application/json`
- Produces: `text/html`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | successful operation | #/definitions/undefined

## Property
### Obtain a list of properties
- Method: `GET`
- Url: https://ws.expediaquickconnect.com/v1/properties
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
TUID | header |  | false | string | 
status | query | Status filter. String. Only supported value is "all". | false | string | active
offset | query | Pagination offset. Integer starting at 0 | false | string | 0
limit | query | Pagination limit. Integer between 1 and 200. | false | string | 20

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [PropertyDTO](#/definitions/PropertyDTO)

### Read a single property
- Method: `GET`
- Url: https://ws.expediaquickconnect.com/v1/properties/{propertyId}
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
propertyId | path | Expedia Property ID. Integer | true | string | 

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [PropertyDTO](#/definitions/PropertyDTO)

## Room type
### Obtain a list of room types
- Method: `GET`
- Url: https://ws.expediaquickconnect.com/v1/properties/{propertyId}/roomTypes
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
propertyId | path | Expedia Property ID. Integer | true | string | 
status | query | Status filter. String. Only supported value is "all". | false | string | 

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [RoomTypeDTO](#/definitions/RoomTypeDTO)

### Creates a new room type
- Method: `POST`
- Url: https://ws.expediaquickconnect.com/v1/properties/{propertyId}/roomTypes
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
propertyId | path | Expedia Property Id. Integer | true | string | 
body | body | JSON message describing the new room type | false | [RoomTypeDTO](#/definitions/RoomTypeDTO) | 

**Examples**
```
{
  "resourceId": 0,
  "partnerCode": "string",
  "name": {
    "attributes": {
      "typeOfRoom": "string",
      "roomClass": "string",
      "includeBedType": false,
      "bedroomDetails": "string",
      "includeSmokingPref": false,
      "accessibility": false,
      "view": "string",
      "featuredAmenity": "string",
      "area": "string",
      "customLabel": "string"
    },
    "value": "string"
  },
  "status": "Active",
  "maxOccupants": 0,
  "occupancyByAge": [
    {
      "ageCategory": "Adult",
      "minAge": 0,
      "maxOccupants": 0
    }
  ],
  "bedTypes": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "smokingPreferences": [
    {
      "id": "string",
      "name": "string"
    }
  ]
}
```

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
201 | Created | [RoomTypeDTO](#/definitions/RoomTypeDTO)

### Read a single room type
- Method: `GET`
- Url: https://ws.expediaquickconnect.com/v1/properties/{propertyId}/roomTypes/{roomTypeId}
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
propertyId | path | Expedia Property ID. Integer | true | string | 
roomTypeId | path | Room type resource ID. Integer | true | string | 

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [RoomTypeDTO](#/definitions/RoomTypeDTO)

### Modify an existing room type
- Method: `PUT`
- Url: https://ws.expediaquickconnect.com/v1/properties/{propertyId}/roomTypes/{roomTypeId}
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
propertyId | path | Expedia Property Id. Integer | true | string | 
roomTypeId | path | Room type resource ID. Integer | true | string | 
body | body | JSON message with modified room type | false | [RoomTypeDTO](#/definitions/RoomTypeDTO) | 

**Examples**
```
{
  "resourceId": 0,
  "partnerCode": "string",
  "name": {
    "attributes": {
      "typeOfRoom": "string",
      "roomClass": "string",
      "includeBedType": false,
      "bedroomDetails": "string",
      "includeSmokingPref": false,
      "accessibility": false,
      "view": "string",
      "featuredAmenity": "string",
      "area": "string",
      "customLabel": "string"
    },
    "value": "string"
  },
  "status": "Active",
  "maxOccupants": 0,
  "occupancyByAge": [
    {
      "ageCategory": "Adult",
      "minAge": 0,
      "maxOccupants": 0
    }
  ],
  "bedTypes": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "smokingPreferences": [
    {
      "id": "string",
      "name": "string"
    }
  ]
}
```

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [RoomTypeDTO](#/definitions/RoomTypeDTO)

## Rate plan
### Obtain a list of rate plans
- Method: `GET`
- Url: https://ws.expediaquickconnect.com/v1/properties/{propertyId}/roomTypes/{roomTypeId}/ratePlans
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
propertyId | path | Expedia Property ID. Integer | true | string | 
roomTypeId | path | Room type resource ID. Integer | true | string | 
status | query | Status filter. String. Only supported value is "all". | false | string | active

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [RatePlanDTO](#/definitions/RatePlanDTO)

### Creates a new rate plan
- Method: `POST`
- Url: https://ws.expediaquickconnect.com/v1/properties/{propertyId}/roomTypes/{roomTypeId}/ratePlans
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
propertyId | path | Expedia Property ID. Integer | true | string | 
roomTypeId | path | Room type resource ID. Integer | true | string | 
body | body | JSON message describing the new rate plan | false | [RatePlanDTO](#/definitions/RatePlanDTO) | 

**Examples**
```
{
  "resourceId": 0,
  "name": "string",
  "rateAcquisitionType": "string",
  "distributionRules": [
    {
      "expediaId": "string",
      "partnerCode": "string",
      "distributionModel": "string",
      "manageable": false,
      "compensation": {
        "percent": 0,
        "minAmount": 0,
        "exceptions": [
          {
            "dateStart": {
              "year": 0,
              "month": "JANUARY",
              "monthValue": 0,
              "chronology": {
                "calendarType": "string",
                "id": "string"
              },
              "dayOfMonth": 0,
              "dayOfWeek": "MONDAY",
              "era": {
                "value": 0
              },
              "dayOfYear": 0,
              "leapYear": false
            },
            "dateEnd": {
              "year": 0,
              "month": "JANUARY",
              "monthValue": 0,
              "chronology": {
                "calendarType": "string",
                "id": "string"
              },
              "dayOfMonth": 0,
              "dayOfWeek": "MONDAY",
              "era": {
                "value": 0
              },
              "dayOfYear": 0,
              "leapYear": false
            },
            "minAmount": 0,
            "percent": 0,
            "mon": false,
            "tue": false,
            "wed": false,
            "thu": false,
            "fri": false,
            "sat": false,
            "sun": false
          }
        ]
      }
    }
  ],
  "status": "string",
  "type": "string",
  "pricingModel": "string",
  "occupantsForBaseRate": 0,
  "taxInclusive": false,
  "cancelPolicy": {
    "defaultPenalties": [
      {
        "deadline": 0,
        "perStayFee": "string"
      }
    ],
    "exceptions": [
      {
        "startDate": {
          "year": 0,
          "month": "JANUARY",
          "monthValue": 0,
          "chronology": {
            "calendarType": "string",
            "id": "string"
          },
          "dayOfMonth": 0,
          "dayOfWeek": "MONDAY",
          "era": {
            "value": 0
          },
          "dayOfYear": 0,
          "leapYear": false
        },
        "endDate": {
          "year": 0,
          "month": "JANUARY",
          "monthValue": 0,
          "chronology": {
            "calendarType": "string",
            "id": "string"
          },
          "dayOfMonth": 0,
          "dayOfWeek": "MONDAY",
          "era": {
            "value": 0
          },
          "dayOfYear": 0,
          "leapYear": false
        },
        "penalties": [
          {
            "deadline": 0,
            "perStayFee": "string"
          }
        ]
      }
    ]
  },
  "additionalGuestAmounts": [
    {
      "dateStart": {
        "year": 0,
        "month": "JANUARY",
        "monthValue": 0,
        "chronology": {
          "calendarType": "string",
          "id": "string"
        },
        "dayOfMonth": 0,
        "dayOfWeek": "MONDAY",
        "era": {
          "value": 0
        },
        "dayOfYear": 0,
        "leapYear": false
      },
      "dateEnd": {
        "year": 0,
        "month": "JANUARY",
        "monthValue": 0,
        "chronology": {
          "calendarType": "string",
          "id": "string"
        },
        "dayOfMonth": 0,
        "dayOfWeek": "MONDAY",
        "era": {
          "value": 0
        },
        "dayOfYear": 0,
        "leapYear": false
      },
      "ageCategory": "string",
      "amount": 0
    }
  ],
  "valueAddInclusions": [
    "string"
  ],
  "minLOSDefault": 0,
  "maxLOSDefault": 0,
  "minAdvBookDays": 0,
  "maxAdvBookDays": 0,
  "bookDateStart": {
    "year": 0,
    "month": "JANUARY",
    "monthValue": 0,
    "chronology": {
      "calendarType": "string",
      "id": "string"
    },
    "dayOfMonth": 0,
    "dayOfWeek": "MONDAY",
    "era": {
      "value": 0
    },
    "dayOfYear": 0,
    "leapYear": false
  },
  "bookDateEnd": {
    "year": 0,
    "month": "JANUARY",
    "monthValue": 0,
    "chronology": {
      "calendarType": "string",
      "id": "string"
    },
    "dayOfMonth": 0,
    "dayOfWeek": "MONDAY",
    "era": {
      "value": 0
    },
    "dayOfYear": 0,
    "leapYear": false
  },
  "travelDateStart": {
    "year": 0,
    "month": "JANUARY",
    "monthValue": 0,
    "chronology": {
      "calendarType": "string",
      "id": "string"
    },
    "dayOfMonth": 0,
    "dayOfWeek": "MONDAY",
    "era": {
      "value": 0
    },
    "dayOfYear": 0,
    "leapYear": false
  },
  "travelDateEnd": {
    "year": 0,
    "month": "JANUARY",
    "monthValue": 0,
    "chronology": {
      "calendarType": "string",
      "id": "string"
    },
    "dayOfMonth": 0,
    "dayOfWeek": "MONDAY",
    "era": {
      "value": 0
    },
    "dayOfYear": 0,
    "leapYear": false
  },
  "mobileOnly": false
}
```

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [RatePlanDTO](#/definitions/RatePlanDTO)

### Read a single rate plan
- Method: `GET`
- Url: https://ws.expediaquickconnect.com/v1/properties/{propertyId}/roomTypes/{roomTypeId}/ratePlans/{ratePlanId}
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
propertyId | path | Expedia Property ID. Integer | true | string | 
roomTypeId | path | Room type resource ID. Integer | true | string | 
ratePlanId | path | Rate plan resource ID. Integer | true | string | 

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [RatePlanDTO](#/definitions/RatePlanDTO)

### Modify an existing rate plan
- Method: `PUT`
- Url: https://ws.expediaquickconnect.com/v1/properties/{propertyId}/roomTypes/{roomTypeId}/ratePlans/{ratePlanId}
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
propertyId | path | Expedia Property ID. Integer | true | string | 
roomTypeId | path | Room type resource ID. Integer | true | string | 
ratePlanId | path | Rate plan resource ID. Integer | true | string | 
body | body | JSON message of modified rate plan | false | [RatePlanDTO](#/definitions/RatePlanDTO) | 

**Examples**
```
{
  "resourceId": 0,
  "name": "string",
  "rateAcquisitionType": "string",
  "distributionRules": [
    {
      "expediaId": "string",
      "partnerCode": "string",
      "distributionModel": "string",
      "manageable": false,
      "compensation": {
        "percent": 0,
        "minAmount": 0,
        "exceptions": [
          {
            "dateStart": {
              "year": 0,
              "month": "JANUARY",
              "monthValue": 0,
              "chronology": {
                "calendarType": "string",
                "id": "string"
              },
              "dayOfMonth": 0,
              "dayOfWeek": "MONDAY",
              "era": {
                "value": 0
              },
              "dayOfYear": 0,
              "leapYear": false
            },
            "dateEnd": {
              "year": 0,
              "month": "JANUARY",
              "monthValue": 0,
              "chronology": {
                "calendarType": "string",
                "id": "string"
              },
              "dayOfMonth": 0,
              "dayOfWeek": "MONDAY",
              "era": {
                "value": 0
              },
              "dayOfYear": 0,
              "leapYear": false
            },
            "minAmount": 0,
            "percent": 0,
            "mon": false,
            "tue": false,
            "wed": false,
            "thu": false,
            "fri": false,
            "sat": false,
            "sun": false
          }
        ]
      }
    }
  ],
  "status": "string",
  "type": "string",
  "pricingModel": "string",
  "occupantsForBaseRate": 0,
  "taxInclusive": false,
  "cancelPolicy": {
    "defaultPenalties": [
      {
        "deadline": 0,
        "perStayFee": "string"
      }
    ],
    "exceptions": [
      {
        "startDate": {
          "year": 0,
          "month": "JANUARY",
          "monthValue": 0,
          "chronology": {
            "calendarType": "string",
            "id": "string"
          },
          "dayOfMonth": 0,
          "dayOfWeek": "MONDAY",
          "era": {
            "value": 0
          },
          "dayOfYear": 0,
          "leapYear": false
        },
        "endDate": {
          "year": 0,
          "month": "JANUARY",
          "monthValue": 0,
          "chronology": {
            "calendarType": "string",
            "id": "string"
          },
          "dayOfMonth": 0,
          "dayOfWeek": "MONDAY",
          "era": {
            "value": 0
          },
          "dayOfYear": 0,
          "leapYear": false
        },
        "penalties": [
          {
            "deadline": 0,
            "perStayFee": "string"
          }
        ]
      }
    ]
  },
  "additionalGuestAmounts": [
    {
      "dateStart": {
        "year": 0,
        "month": "JANUARY",
        "monthValue": 0,
        "chronology": {
          "calendarType": "string",
          "id": "string"
        },
        "dayOfMonth": 0,
        "dayOfWeek": "MONDAY",
        "era": {
          "value": 0
        },
        "dayOfYear": 0,
        "leapYear": false
      },
      "dateEnd": {
        "year": 0,
        "month": "JANUARY",
        "monthValue": 0,
        "chronology": {
          "calendarType": "string",
          "id": "string"
        },
        "dayOfMonth": 0,
        "dayOfWeek": "MONDAY",
        "era": {
          "value": 0
        },
        "dayOfYear": 0,
        "leapYear": false
      },
      "ageCategory": "string",
      "amount": 0
    }
  ],
  "valueAddInclusions": [
    "string"
  ],
  "minLOSDefault": 0,
  "maxLOSDefault": 0,
  "minAdvBookDays": 0,
  "maxAdvBookDays": 0,
  "bookDateStart": {
    "year": 0,
    "month": "JANUARY",
    "monthValue": 0,
    "chronology": {
      "calendarType": "string",
      "id": "string"
    },
    "dayOfMonth": 0,
    "dayOfWeek": "MONDAY",
    "era": {
      "value": 0
    },
    "dayOfYear": 0,
    "leapYear": false
  },
  "bookDateEnd": {
    "year": 0,
    "month": "JANUARY",
    "monthValue": 0,
    "chronology": {
      "calendarType": "string",
      "id": "string"
    },
    "dayOfMonth": 0,
    "dayOfWeek": "MONDAY",
    "era": {
      "value": 0
    },
    "dayOfYear": 0,
    "leapYear": false
  },
  "travelDateStart": {
    "year": 0,
    "month": "JANUARY",
    "monthValue": 0,
    "chronology": {
      "calendarType": "string",
      "id": "string"
    },
    "dayOfMonth": 0,
    "dayOfWeek": "MONDAY",
    "era": {
      "value": 0
    },
    "dayOfYear": 0,
    "leapYear": false
  },
  "travelDateEnd": {
    "year": 0,
    "month": "JANUARY",
    "monthValue": 0,
    "chronology": {
      "calendarType": "string",
      "id": "string"
    },
    "dayOfMonth": 0,
    "dayOfWeek": "MONDAY",
    "era": {
      "value": 0
    },
    "dayOfYear": 0,
    "leapYear": false
  },
  "mobileOnly": false
}
```

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [RatePlanDTO](#/definitions/RatePlanDTO)

## Definitions
- <a name="/definitions/AdditionalGuestAmountDTO"></a>AdditionalGuestAmountDTO

Property Name | Type | Description
------------- | ---- | -----------
dateStart | [LocalDate](#/definitions/LocalDate) | 
dateEnd | [LocalDate](#/definitions/LocalDate) | 
ageCategory | string | 
amount | number | 

- <a name="/definitions/BedTypeDTO"></a>BedTypeDTO

Property Name | Type | Description
------------- | ---- | -----------
id | string | id
name | string | name

- <a name="/definitions/CancelPenaltyExceptionRuleDTO"></a>CancelPenaltyExceptionRuleDTO

Property Name | Type | Description
------------- | ---- | -----------
startDate | [LocalDate](#/definitions/LocalDate) | 
endDate | [LocalDate](#/definitions/LocalDate) | 
penalties | Array[[PenaltyDTO](#/definitions/PenaltyDTO)] | 

- <a name="/definitions/CancelPolicyDTO"></a>CancelPolicyDTO

Property Name | Type | Description
------------- | ---- | -----------
defaultPenalties | Array[[PenaltyDTO](#/definitions/PenaltyDTO)] | 
exceptions | Array[[CancelPenaltyExceptionRuleDTO](#/definitions/CancelPenaltyExceptionRuleDTO)] | 

- <a name="/definitions/CompensationExceptionRuleDTO"></a>CompensationExceptionRuleDTO

Property Name | Type | Description
------------- | ---- | -----------
dateStart | [LocalDate](#/definitions/LocalDate) | 
dateEnd | [LocalDate](#/definitions/LocalDate) | 
minAmount | number | 
percent | number | 
mon | boolean | 
tue | boolean | 
wed | boolean | 
thu | boolean | 
fri | boolean | 
sat | boolean | 
sun | boolean | 

- <a name="/definitions/CompensationRuleDTO"></a>CompensationRuleDTO

Property Name | Type | Description
------------- | ---- | -----------
percent | number | 
minAmount | number | 
exceptions | Array[[CompensationExceptionRuleDTO](#/definitions/CompensationExceptionRuleDTO)] | 

- <a name="/definitions/CutOffDTO"></a>CutOffDTO

Property Name | Type | Description
------------- | ---- | -----------
time | string | 
day | string | 

- <a name="/definitions/DistributionRuleDTO"></a>DistributionRuleDTO

Property Name | Type | Description
------------- | ---- | -----------
expediaId | string | 
partnerCode | string | 
distributionModel | string | 
manageable | boolean | 
compensation | [CompensationRuleDTO](#/definitions/CompensationRuleDTO) | 

- <a name="/definitions/Era"></a>Era

Property Name | Type | Description
------------- | ---- | -----------
value | integer | 

- <a name="/definitions/ErrorDTO"></a>ErrorDTO

Property Name | Type | Description
------------- | ---- | -----------
code | integer | 
message | string | 

- <a name="/definitions/IsoChronology"></a>IsoChronology

Property Name | Type | Description
------------- | ---- | -----------
calendarType | string | 
id | string | 

- <a name="/definitions/LocalDate"></a>LocalDate

Property Name | Type | Description
------------- | ---- | -----------
year | integer | 
month | string | 
monthValue | integer | 
chronology | [IsoChronology](#/definitions/IsoChronology) | 
dayOfMonth | integer | 
dayOfWeek | string | 
era | [Era](#/definitions/Era) | 
dayOfYear | integer | 
leapYear | boolean | 

- <a name="/definitions/OccupancyByAgeDTO"></a>OccupancyByAgeDTO

Property Name | Type | Description
------------- | ---- | -----------
ageCategory | string | ageCategory
minAge | integer | minAge
maxOccupants | integer | maxOccupants

- <a name="/definitions/PenaltyDTO"></a>PenaltyDTO

Property Name | Type | Description
------------- | ---- | -----------
deadline | integer | 
perStayFee | string | 

- <a name="/definitions/PropertyAddressDTO"></a>PropertyAddressDTO

Property Name | Type | Description
------------- | ---- | -----------
line1 | string | 
line2 | string | 
city | string | 
state | string | 
postalCode | string | 
countryCode | string | 

- <a name="/definitions/PropertyDTO"></a>PropertyDTO

Property Name | Type | Description
------------- | ---- | -----------
resourceId | integer | 
name | string | 
status | string | 
currency | string | 
address | [PropertyAddressDTO](#/definitions/PropertyAddressDTO) | 
distributionModels | Array[string] | 
rateAcquisitionType | string | 
taxInclusive | boolean | 
pricingModel | string | 
baseAllocationEnabled | boolean | 
minLOSThreshold | integer | 
cancellationTime | string | 
timezone | string | 
reservationCutOff | [CutOffDTO](#/definitions/CutOffDTO) | 

- <a name="/definitions/RatePlanDTO"></a>RatePlanDTO

Property Name | Type | Description
------------- | ---- | -----------
resourceId | integer | 
name | string | 
rateAcquisitionType | string | 
distributionRules | Array[[DistributionRuleDTO](#/definitions/DistributionRuleDTO)] | 
status | string | 
type | string | 
pricingModel | string | 
occupantsForBaseRate | integer | 
taxInclusive | boolean | 
cancelPolicy | [CancelPolicyDTO](#/definitions/CancelPolicyDTO) | 
additionalGuestAmounts | Array[[AdditionalGuestAmountDTO](#/definitions/AdditionalGuestAmountDTO)] | 
valueAddInclusions | Array[string] | 
minLOSDefault | integer | 
maxLOSDefault | integer | 
minAdvBookDays | integer | 
maxAdvBookDays | integer | 
bookDateStart | [LocalDate](#/definitions/LocalDate) | 
bookDateEnd | [LocalDate](#/definitions/LocalDate) | 
travelDateStart | [LocalDate](#/definitions/LocalDate) | 
travelDateEnd | [LocalDate](#/definitions/LocalDate) | 
mobileOnly | boolean | 

- <a name="/definitions/ResponseWrapperDTO"></a>ResponseWrapperDTO

Property Name | Type | Description
------------- | ---- | -----------
entity | object | 
errors | Array[[ErrorDTO](#/definitions/ErrorDTO)] | 

- <a name="/definitions/RnsAttributesDTO"></a>RnsAttributesDTO

Property Name | Type | Description
------------- | ---- | -----------
typeOfRoom | string | 
roomClass | string | 
includeBedType | boolean | 
bedroomDetails | string | 
includeSmokingPref | boolean | 
accessibility | boolean | 
view | string | 
featuredAmenity | string | 
area | string | 
customLabel | string | 

- <a name="/definitions/RoomTypeDTO"></a>RoomTypeDTO

Property Name | Type | Description
------------- | ---- | -----------
resourceId | integer | This resource ID is what will be used to manage availability and rates, and also what Expedia specifies in booking messages to identify the room booked.
partnerCode | string | Partner room type code/identifier.
name | [RoomTypeNameDTO](#/definitions/RoomTypeNameDTO) | Formed by a [ISO 639-1]-[ISO-3166-1]. If applicable, it contains the RNS attributes used to generate the value
status | string | Room type status is derived from the rate plans under the room type: if at least 1 rate plan is active, the room type status will be active. If all rate plans are inactive, then the room type becomes inactive as well.
maxOccupants | integer | Maximum number of people the room can accommodate, across all age categories
occupancyByAge | Array[[OccupancyByAgeDTO](#/definitions/OccupancyByAgeDTO)] | Array of occupancies by age. A room will minimally have 1 age category (adult). Indicates, for each age category supported by the room, how many occupants of each category the room supports, as well as the minimum age for each category. The maximum age of a category is 1 less than the minimum of the next category in line.
bedTypes | Array[[BedTypeDTO](#/definitions/BedTypeDTO)] | bedTypes
smokingPreferences | Array[[SmokingPreferenceDTO](#/definitions/SmokingPreferenceDTO)] | smokingPreferences

- <a name="/definitions/RoomTypeNameDTO"></a>RoomTypeNameDTO

Property Name | Type | Description
------------- | ---- | -----------
attributes | [RnsAttributesDTO](#/definitions/RnsAttributesDTO) | 
value | string | 

- <a name="/definitions/SmokingPreferenceDTO"></a>SmokingPreferenceDTO

Property Name | Type | Description
------------- | ---- | -----------
id | string | id
name | string | name
