# EPS Product API
The Product API will enable our hotels partners to create and edit their room types and rate plans via APIs,
                                    without having to use EPC or contact their market manager. The API also enables our partners to read the
                                    definition of the room types and rate plans created in the system.

## Error codes
### Renders the page describing the business error codes used by the API
- Method: `GET`
- Url: https://services.expediapartnercentral.com/v1/documentation/api/errors
- Consumes: `application/json`
- Produces: `text/html`

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | successful operation | #/definitions/undefined

## Property
### Obtain a list of properties
- Method: `GET`
- Url: https://services.expediapartnercentral.com/v1/properties
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

#### Potential Error Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
400 | Bad Request | [ResponseWrapperDTO](#/definitions/ResponseWrapperDTO)
415 | Unsupported Media Type | [ResponseWrapperDTO](#/definitions/ResponseWrapperDTO)
500 | Internal Server Error | [ResponseWrapperDTO](#/definitions/ResponseWrapperDTO)

### Read a single property
- Method: `GET`
- Url: https://services.expediapartnercentral.com/v1/properties/{propertyId}
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
propertyId | path | Expedia Property ID | true | string | 

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [PropertyDTO](#/definitions/PropertyDTO)

#### Potential Error Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
400 | Bad Request | [ResponseWrapperDTO](#/definitions/ResponseWrapperDTO)
415 | Unsupported Media Type | [ResponseWrapperDTO](#/definitions/ResponseWrapperDTO)
500 | Internal Server Error | [ResponseWrapperDTO](#/definitions/ResponseWrapperDTO)

## Room type
### Obtain a list of room types
- Method: `GET`
- Url: https://services.expediapartnercentral.com/v1/properties/{propertyId}/roomTypes
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
propertyId | path | Expedia Property ID | true | string | 
status | query | Status filter. String. Only supported value is "all". | false | string | 

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [RoomTypeDTO](#/definitions/RoomTypeDTO)

#### Potential Error Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
400 | Bad Request | [ResponseWrapperDTO](#/definitions/ResponseWrapperDTO)
415 | Unsupported Media Type | [ResponseWrapperDTO](#/definitions/ResponseWrapperDTO)
500 | Internal Server Error | [ResponseWrapperDTO](#/definitions/ResponseWrapperDTO)

### Creates a new room type
- Method: `POST`
- Url: https://services.expediapartnercentral.com/v1/properties/{propertyId}/roomTypes
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
propertyId | path | Expedia Property Id | true | string | 
body | body | JSON message describing the new room type | true | [RoomTypeDTO](#/definitions/RoomTypeDTO) | 

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
      "id": "2.1 (Non-Smoking) and 2.2 (Smoking)",
      "name": "string"
    }
  ],
  "roomSize": {
    "squareFeet": 0,
    "squareMeters": 0
  }
}
```

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
201 | Created | [RoomTypeDTO](#/definitions/RoomTypeDTO)

#### Potential Error Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
400 | Bad Request | [ResponseWrapperDTO](#/definitions/ResponseWrapperDTO)
415 | Unsupported Media Type | [ResponseWrapperDTO](#/definitions/ResponseWrapperDTO)
500 | Internal Server Error | [ResponseWrapperDTO](#/definitions/ResponseWrapperDTO)

### Read a single room type
- Method: `GET`
- Url: https://services.expediapartnercentral.com/v1/properties/{propertyId}/roomTypes/{roomTypeId}
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
propertyId | path | Expedia Property ID | true | string | 
roomTypeId | path | Room type resource ID. Integer | true | string | 

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [RoomTypeDTO](#/definitions/RoomTypeDTO)

#### Potential Error Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
400 | Bad Request | [ResponseWrapperDTO](#/definitions/ResponseWrapperDTO)
415 | Unsupported Media Type | [ResponseWrapperDTO](#/definitions/ResponseWrapperDTO)
500 | Internal Server Error | [ResponseWrapperDTO](#/definitions/ResponseWrapperDTO)

### Modify an existing room type
- Method: `PUT`
- Url: https://services.expediapartnercentral.com/v1/properties/{propertyId}/roomTypes/{roomTypeId}
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
propertyId | path | Expedia Property Id | true | string | 
roomTypeId | path | Room type resource ID | true | string | 
body | body | JSON message with modified room type | true | [RoomTypeDTO](#/definitions/RoomTypeDTO) | 

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
      "id": "2.1 (Non-Smoking) and 2.2 (Smoking)",
      "name": "string"
    }
  ],
  "roomSize": {
    "squareFeet": 0,
    "squareMeters": 0
  }
}
```

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [RoomTypeDTO](#/definitions/RoomTypeDTO)

#### Potential Error Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
400 | Bad Request | [ResponseWrapperDTO](#/definitions/ResponseWrapperDTO)
415 | Unsupported Media Type | [ResponseWrapperDTO](#/definitions/ResponseWrapperDTO)
500 | Internal Server Error | [ResponseWrapperDTO](#/definitions/ResponseWrapperDTO)

## Rate plan
### Obtain a list of rate plans
- Method: `GET`
- Url: https://services.expediapartnercentral.com/v1/properties/{propertyId}/roomTypes/{roomTypeId}/ratePlans
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
propertyId | path | Expedia Property ID | true | string | 
roomTypeId | path | Room type resource ID | true | string | 
status | query | Status filter. String. Only supported value is "all". | false | string | active

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [RatePlanDTO](#/definitions/RatePlanDTO)

#### Potential Error Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
400 | Bad Request | [ResponseWrapperDTO](#/definitions/ResponseWrapperDTO)
415 | Unsupported Media Type | [ResponseWrapperDTO](#/definitions/ResponseWrapperDTO)
500 | Internal Server Error | [ResponseWrapperDTO](#/definitions/ResponseWrapperDTO)

### Creates a new rate plan
- Method: `POST`
- Url: https://services.expediapartnercentral.com/v1/properties/{propertyId}/roomTypes/{roomTypeId}/ratePlans
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
propertyId | path | Expedia Property ID | true | string | 
roomTypeId | path | Room type resource ID | true | string | 
body | body | JSON message describing the new rate plan | true | [RatePlanDTO](#/definitions/RatePlanDTO) | 

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
      "distributionModel": "HotelCollect",
      "manageable": false,
      "compensation": {
        "percent": 0,
        "minAmount": 0,
        "exceptions": [
          {
            "dateStart": "2015-11-25",
            "dateEnd": "2015-11-25",
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
  "status": "Active",
  "type": "Standalone",
  "pricingModel": "PerDayPricing",
  "occupantsForBaseRate": 0,
  "taxInclusive": false,
  "cancelPolicy": {
    "defaultPenalties": [
      {
        "deadline": 0,
        "perStayFee": "string",
        "amount": 0
      }
    ],
    "exceptions": [
      {
        "startDate": "2015-11-25",
        "endDate": "2015-11-25",
        "penalties": [
          {
            "deadline": 0,
            "perStayFee": "string",
            "amount": 0
          }
        ]
      }
    ]
  },
  "additionalGuestAmounts": [
    {
      "dateStart": "2015-11-25",
      "dateEnd": "2015-11-25",
      "ageCategory": "Adult",
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
  "bookDateStart": "2015-11-25",
  "bookDateEnd": "2015-11-25",
  "travelDateStart": "2015-11-25",
  "travelDateEnd": "2015-11-25",
  "mobileOnly": false
}
```

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [RatePlanDTO](#/definitions/RatePlanDTO)

#### Potential Error Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
400 | Bad Request | [ResponseWrapperDTO](#/definitions/ResponseWrapperDTO)
415 | Unsupported Media Type | [ResponseWrapperDTO](#/definitions/ResponseWrapperDTO)
500 | Internal Server Error | [ResponseWrapperDTO](#/definitions/ResponseWrapperDTO)

### Read a single rate plan
- Method: `GET`
- Url: https://services.expediapartnercentral.com/v1/properties/{propertyId}/roomTypes/{roomTypeId}/ratePlans/{ratePlanId}
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
propertyId | path | Expedia Property ID | true | string | 
roomTypeId | path | Room type resource ID | true | string | 
ratePlanId | path | Rate plan resource ID | true | string | 

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [RatePlanDTO](#/definitions/RatePlanDTO)

#### Potential Error Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
400 | Bad Request | [ResponseWrapperDTO](#/definitions/ResponseWrapperDTO)
415 | Unsupported Media Type | [ResponseWrapperDTO](#/definitions/ResponseWrapperDTO)
500 | Internal Server Error | [ResponseWrapperDTO](#/definitions/ResponseWrapperDTO)

### Modify an existing rate plan
- Method: `PUT`
- Url: https://services.expediapartnercentral.com/v1/properties/{propertyId}/roomTypes/{roomTypeId}/ratePlans/{ratePlanId}
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
propertyId | path | Expedia Property ID | true | string | 
roomTypeId | path | Room type resource ID | true | string | 
ratePlanId | path | Rate plan resource ID | true | string | 
body | body | JSON message of modified rate plan | true | [RatePlanDTO](#/definitions/RatePlanDTO) | 

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
      "distributionModel": "HotelCollect",
      "manageable": false,
      "compensation": {
        "percent": 0,
        "minAmount": 0,
        "exceptions": [
          {
            "dateStart": "2015-11-25",
            "dateEnd": "2015-11-25",
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
  "status": "Active",
  "type": "Standalone",
  "pricingModel": "PerDayPricing",
  "occupantsForBaseRate": 0,
  "taxInclusive": false,
  "cancelPolicy": {
    "defaultPenalties": [
      {
        "deadline": 0,
        "perStayFee": "string",
        "amount": 0
      }
    ],
    "exceptions": [
      {
        "startDate": "2015-11-25",
        "endDate": "2015-11-25",
        "penalties": [
          {
            "deadline": 0,
            "perStayFee": "string",
            "amount": 0
          }
        ]
      }
    ]
  },
  "additionalGuestAmounts": [
    {
      "dateStart": "2015-11-25",
      "dateEnd": "2015-11-25",
      "ageCategory": "Adult",
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
  "bookDateStart": "2015-11-25",
  "bookDateEnd": "2015-11-25",
  "travelDateStart": "2015-11-25",
  "travelDateEnd": "2015-11-25",
  "mobileOnly": false
}
```

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [RatePlanDTO](#/definitions/RatePlanDTO)

#### Potential Error Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
400 | Bad Request | [ResponseWrapperDTO](#/definitions/ResponseWrapperDTO)
415 | Unsupported Media Type | [ResponseWrapperDTO](#/definitions/ResponseWrapperDTO)
500 | Internal Server Error | [ResponseWrapperDTO](#/definitions/ResponseWrapperDTO)

## Definitions
- <a name="/definitions/AdditionalGuestAmountDTO"></a>AdditionalGuestAmountDTO

Property Name | Type | Description
------------- | ---- | -----------
dateStart | string | Date at which this amount started being applicable, can be in the past
dateEnd | string | Date at which this amount will not be effective anymore. If no end date defined, will be returned as 2079-06-06.
ageCategory | string | The age category for the additional guests
amount | number | Min value 0.000, accepts up to 3 decimal points

- <a name="/definitions/BedTypeDTO"></a>BedTypeDTO

Property Name | Type | Description
------------- | ---- | -----------
id | string | The code identifying the bed type. These ids are pre-defined (see full spec)
name | string | Name identifying the bed type, provided here for information purposes only

- <a name="/definitions/CancelPenaltyExceptionRuleDTO"></a>CancelPenaltyExceptionRuleDTO

Property Name | Type | Description
------------- | ---- | -----------
startDate | string | Format: YYYY-MM-DD. Cancel penalty exception's starting date
endDate | string | Format: YYYY-MM-DD. Cancel penalty exception's end date
penalties | Array[[PenaltyDTO](#/definitions/PenaltyDTO)] | Definition of the exception penalties applied

- <a name="/definitions/CancelPolicyDTO"></a>CancelPolicyDTO

Property Name | Type | Description
------------- | ---- | -----------
defaultPenalties | Array[[PenaltyDTO](#/definitions/PenaltyDTO)] | Default penalties' definition. Min 1, Max 2 penalties defined
exceptions | Array[[CancelPenaltyExceptionRuleDTO](#/definitions/CancelPenaltyExceptionRuleDTO)] | List os exceptional cancel penalties defined for the Rate Plan

- <a name="/definitions/CompensationExceptionRuleDTO"></a>CompensationExceptionRuleDTO

Property Name | Type | Description
------------- | ---- | -----------
dateStart | string | Starting date of the exception rule. Accepted format: YYYY-MM-DD
dateEnd | string | End date of the exception rule. Accepted format: YYYY-MM-DD
minAmount | number | Accepts up to 3 decimal points
percent | number | Between 0 and 1, accepts up to 3 decimal points
mon | boolean | For any exception, all 7 days of week are returned with a true/false indicator.
tue | boolean | For any exception, all 7 days of week are returned with a true/false indicator.
wed | boolean | For any exception, all 7 days of week are returned with a true/false indicator.
thu | boolean | For any exception, all 7 days of week are returned with a true/false indicator.
fri | boolean | For any exception, all 7 days of week are returned with a true/false indicator.
sat | boolean | For any exception, all 7 days of week are returned with a true/false indicator.
sun | boolean | For any exception, all 7 days of week are returned with a true/false indicator.

- <a name="/definitions/CompensationRuleDTO"></a>CompensationRuleDTO

Property Name | Type | Description
------------- | ---- | -----------
percent | number | Compensation percentage applied by default. Expressed as a value. Between 0 and 1, accepts up to 4 decimal points
minAmount | number | Minimum amount. Accepts up to 3 decimal points. Only applicable to ExpediaCollect distribution rules
exceptions | Array[[CompensationExceptionRuleDTO](#/definitions/CompensationExceptionRuleDTO)] | Depending on the contractual agreement between Expedia and the partner, compensation can vary based on different criteria. This array of exceptions will reflect this

- <a name="/definitions/CutOffDTO"></a>CutOffDTO

Property Name | Type | Description
------------- | ---- | -----------
time | string | Indicates at which time we’ll stop making inventory available for same day reservations
day | string | Can be of same day or next day. Complements the time attribute

- <a name="/definitions/DistributionRuleDTO"></a>DistributionRuleDTO

Property Name | Type | Description
------------- | ---- | -----------
expediaId | string | String, min 1, max 50 characters. Expedia rate plan ID that will be specified in booking messages and that should be used to manage avail/rates if this set of distribution rules is marked as manageable.
partnerCode | string | Unique partner identifier for the rate plan. For a given room type, this code has to be unique per distribution model (e.g. for all ExpediaCollect rate plan distribution rules under this room, this code has to be unique). Uniqueness will be validated by Expedia during create or update operations.
distributionModel | string | Distribution model adopted by the rate plan, matching property configuration.
manageable | boolean | Cannot be provided in a create request. Default to yes for HotelCollect-only or ExpediaCollect-only rate plans. For ExpediaTravelerPreference rate plans, if rate acquisition type is net, ExpediaCollect will default to true; if rate acquisition type is Sell/LAR, HotelCollect will default to true.
compensation | [CompensationRuleDTO](#/definitions/CompensationRuleDTO) | Applicable compensation rules for this distribution model. Defaults to the value defined on the contract with the partner

- <a name="/definitions/ErrorDTO"></a>ErrorDTO

Property Name | Type | Description
------------- | ---- | -----------
code | integer | 
message | string | 

- <a name="/definitions/OccupancyByAgeDTO"></a>OccupancyByAgeDTO

Property Name | Type | Description
------------- | ---- | -----------
ageCategory | string | The age category whose occupancy is being defined
minAge | integer | Minimum age allowed for the category. Min 0, max 99
maxOccupants | integer | Max number of occupants on the category. Min 0, max 20

- <a name="/definitions/PenaltyDTO"></a>PenaltyDTO

Property Name | Type | Description
------------- | ---- | -----------
deadline | integer | Number of hours prior to the arrival of the guest. When set to 0, it means up until end of the day of arrival. Min 0, Max 999
perStayFee | string | Fee that will be charged if the customer cancels within the specified deadline.
amount | number | Min value 0.000 (3 decimal points). The amount provided here should be based on the property rate acquisition type. If the property rate acquisition type is Net, the rate provided here should be net of Expedia compensation. If it is SellLAR, the rate should be what the customer will be charged (inclusive of Expedia compensation). Used to define a flat amount that would be charged as a cancel or change penalty. This would normally replace a per-stay fee, but it can also be added on top of a per-stay fee if that is what the partner requires

- <a name="/definitions/PropertyAddressDTO"></a>PropertyAddressDTO

Property Name | Type | Description
------------- | ---- | -----------
line1 | string | First line of address
line2 | string | Second line of address, not always available
city | string | City in which the property is located
state | string | State/Province, which is optional and thus might not be available
postalCode | string | Postal or State Code, might not be available
countryCode | string | ISO 3166-1 Alpha 3 country code, for the country where the property is located

- <a name="/definitions/PropertyDTO"></a>PropertyDTO

Property Name | Type | Description
------------- | ---- | -----------
resourceId | integer | Expedia ID for this resource. Generated when created. Generated on POST, required on PUT
name | string | Name describing the property. Max. 255 characters
status | string | Status in which the property can be in; Allowed values are: Active, Inactive, Onboarding, UnderConversion
currency | string | Format: ISO 4217 Alpha 3. This currency code is applicable to all amounts found in any resources available as part of the EPS Product API.
address | [PropertyAddressDTO](#/definitions/PropertyAddressDTO) | Property address details
distributionModels | Array[string] | Distribution model(s) under which the property is configured to work with Expedia
rateAcquisitionType | string | Describes which type of rate will be provided via this API, but also which type of rate should be used when managing availability and rates in  ExpediaPartnerCentral or using EC or EQC APIs.
taxInclusive | boolean | Returned to indicate whether the rate being exchanged over other APIs (availability/rates or booking) is inclusive of taxes or not.
pricingModel | string | Configuration of the property when it comes to pricing rooms and rates.
baseAllocationEnabled | boolean | Boolean to indicate whether this property has a base allocation contract with Expedia.
minLOSThreshold | integer | This property configuration is used by Expedia when MinLOS Restrictions updates are received via EQC AR. If the MinLOS restriction update attempted via EQC AR is greater than this value, the update will be rejected.
cancellationTime | string | Cancellation deadline reference time. When cancel policies are defined and exchanged via the rate plan resource, a deadline in hours is provided. The deadline in hours is always relative to this property cancellation deadline reference time configuration
timezone | string | Descriptive information about property timezone configuration in Expedia system. Description will start by a GMT offset, followed by a friendly name.
reservationCutOff | [CutOffDTO](#/definitions/CutOffDTO) | Used to indicate when we stop making rate plans available to book for same day reservations.

- <a name="/definitions/RatePlanDTO"></a>RatePlanDTO

Property Name | Type | Description
------------- | ---- | -----------
resourceId | integer | Expedia ID for this resource. Generated when created. Generated on POST, required on PUT
name | string | Name of the rate plan, for information/identification purposes. Min 1, Max 40 characters. If not provided, defaults to the manageable rate plan partner code.
rateAcquisitionType | string | Rate acquisition type, inherited from the Property
distributionRules | Array[[DistributionRuleDTO](#/definitions/DistributionRuleDTO)] | Used to provide information about how this rate plan can be sold (ExpediaCollect, HotelCollect or both).
status | string | Defaults to active if not provided during creation
type | string | Rate Plan type. Only Standalone type can be managed through the Product API. Defaults to Standalone if not provided during creation
pricingModel | string | Rate Plan pricing model. Will default to property’s pricing model, and if provided, it has to match the property’s pricing model
occupantsForBaseRate | integer | Max occupants allowed for the base rate. Min 1, Max 20. This is only applicable for per day pricing properties, and required in create requests. It indicates how many occupants the per day price applies to
taxInclusive | boolean | Returned to indicate whether the rate being exchanged over other APIs (availability/rates or booking) is inclusive of taxes or not. During creation, for properties managing net rates, the default value is false. For sell rates, it is based on the property's configuration
cancelPolicy | [CancelPolicyDTO](#/definitions/CancelPolicyDTO) | Default cancel policy. If not provided in a create request, the product API will select a refundable cancellation policy that is currently used by the most recently created standalone rate plan under the same property
additionalGuestAmounts | Array[[AdditionalGuestAmountDTO](#/definitions/AdditionalGuestAmountDTO)] | Array of additional guest amounts. Up to 6 can be specified, 1 per category. Only 1 amount can be given per category, for all dates
valueAddInclusions | Array[string] | Array of value add inclusions. Value add inclusions are special features included with this rate. Breakfast, Internet, or parking inclusions are the most frequently used ones
minLOSDefault | integer | Default minimum LengthOfStay restriction. Min 1, Max 28. Set to 1 by default if not provided in a create request. Will always be considered along the value defined for each stay date, and the most restrictive of this default and the daily restriction will prevail
maxLOSDefault | integer | Default maximum LengthOfStay restriction. Min 1, Max 28. Set to 28 by default if not provided in a create request. Will always be considered along the value defined for each stay date, and the most restrictive of this default and the daily restriction will prevail
minAdvBookDays | integer | The minimum days before a stay date that the rate plan can be sold. Min 1, Max 500
maxAdvBookDays | integer | The maximum days before a stay date that the rate plan can be sold. Min 1, Max 500
bookDateStart | string | Date at which this rate plan starts being available for searching on any Expedia POS. If in the past, indicates rate plan book date start is not restricted. Accepted format: YYYY-MM-DD. If not restricted, will be returned as 1900-01-01
bookDateEnd | string | Date at which this rate plan stops being available for searching on any Expedia POS. Format YYYY-MM-DD. If not restricted, will be returned as 2079-06-06. If in 2079, indicates this rate plan book end date is unrestricted
travelDateStart | string | Date at which customers can start checking in for a stay including this rate plan. Format YYYY-MM-DD. If not restricted, will be returned at 1900-01-01.If in the past, indicates rate plan travel start date is not restricted
travelDateEnd | string | Latest date at which customers can checkout for a stay including this rate plan. Format YYYY-MM-DD. If not restricted, will be returned as 2079-06-06. If in 2079, indicates rate plan travel end date is not restricted
mobileOnly | boolean | Indicates this rate plan is only available through shopping done on mobile devices

- <a name="/definitions/ResponseWrapperDTO"></a>ResponseWrapperDTO

Property Name | Type | Description
------------- | ---- | -----------
entity | object | 
errors | Array[[ErrorDTO](#/definitions/ErrorDTO)] | 

- <a name="/definitions/RnsAttributesDTO"></a>RnsAttributesDTO

Property Name | Type | Description
------------- | ---- | -----------
typeOfRoom | string | Attribute that determines the type of room, which is used to compose the name
roomClass | string | Attribute that described the class of room, which is used to compose the name
includeBedType | boolean | Attribute that determines whether or not to include bed type on the room name
bedroomDetails | string | Attribute that describes details of the bedroom used to compose the name of the room
includeSmokingPref | boolean | Attribute that determines if room has smoking preference
accessibility | boolean | Attribute that determines if room is considered wheelchair accessible
view | string | Attribute that gives additional information about the view of the room
featuredAmenity | string | Attribute used to highlight a feature of the room on its name
area | string | Attributed used to highlight the location of the room
customLabel | string | Free text that can be appended to the name generated by the attributes. Use of this attribute is discouraged (see full spec). Max 37 characters

- <a name="/definitions/RoomSizeDTO"></a>RoomSizeDTO

Property Name | Type | Description
------------- | ---- | -----------
squareFeet | integer | Room size in square feet. No decimals.
squareMeters | integer | Room size in square meters. No decimals.

- <a name="/definitions/RoomTypeDTO"></a>RoomTypeDTO

Property Name | Type | Description
------------- | ---- | -----------
resourceId | integer | Expedia ID for this resource. Generated when created. Generated on POST, required on PUT
partnerCode | string | Partner room type code/identifier. Max. 40 characters
name | [RoomTypeNameDTO](#/definitions/RoomTypeNameDTO) | Formed by a [ISO 639-1]-[ISO-3166-1]. If applicable, it contains the RNS attributes used to generate the value. Max 255 characters
status | string | Room type status is derived from the rate plans under the room type: if at least 1 rate plan is active, the room type status will be active. If all rate plans are inactive, then the room type becomes inactive as well.
maxOccupants | integer | Min 1, max 20. Maximum number of people the room can accommodate, across all age categories.
occupancyByAge | Array[[OccupancyByAgeDTO](#/definitions/OccupancyByAgeDTO)] | Array of occupancies by age. A room will minimally have 1 age category (adult). Indicates, for each age category supported by the room, how many occupants of each category the room supports, as well as the minimum age for each category. The maximum age of a category is 1 less than the minimum of the next category in line.
bedTypes | Array[[BedTypeDTO](#/definitions/BedTypeDTO)] | Used to define bed type configuration of the room. If more than one bed type is provided, it means that the room type offers different types of configurations, and the customer will be presented with the opportunity to request one at time of booking.
smokingPreferences | Array[[SmokingPreferenceDTO](#/definitions/SmokingPreferenceDTO)] | Used to define whether the room type is smoking, nonsmoking, or if both options are available on request. If a single smoking option is provided, then the room is, by default, only available in this configuration. If both options are provided, then a choice will be offered to the customer at the time he makes a reservation, and the customer preference will be sent in electronic booking messages to the partner
roomSize | [RoomSizeDTO](#/definitions/RoomSizeDTO) | Used to define room size. When used, both size in square feet and in square meters must be specified.

- <a name="/definitions/RoomTypeNameDTO"></a>RoomTypeNameDTO

Property Name | Type | Description
------------- | ---- | -----------
attributes | [RnsAttributesDTO](#/definitions/RnsAttributesDTO) | Defines the attributes used to compose the common name for the room. You should not provide a custom name when using these attributes
value | string | The custom name provided for the room. Max. 255 characters. Not to be used in conjunction with the attributes

- <a name="/definitions/SmokingPreferenceDTO"></a>SmokingPreferenceDTO

Property Name | Type | Description
------------- | ---- | -----------
id | string | Id identifying the smoking preference.
name | string | Name identifying the smoking preference.
