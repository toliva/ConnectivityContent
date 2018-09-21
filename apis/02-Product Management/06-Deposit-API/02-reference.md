# API Definition
The Deposit API enables Expedia partners to set, update or remove a property's deposit policy. 

If you are not familiar with how Expedia defines a Deposit Policy, please read the [Deposit Policy Overview in the FAQ & Guides section](guides.html#depositpolicyoverview) first, before attempting to use the API.

<a name="authentication"></a>
## Authentication
Partner must include a valid username/password in the HTTP header of the request using the below format: 
```
Authorization: Basic <username and password encoded by Base64>
```
Example: 
```
Authorization: Basic RVFDdGVzdDEyOTMzODcwOmV3NjduazMz
```
Where "RVFDdGVzdDEyOTMzODcwOmV3NjduazMz" is the string "EQCtest12933870:ew67nk33" (username:password) Base64-encoded.

For more information about getting started for the first time, and authorization, please refer to the [FAQ & Guides section](guides.html#/howtogetstarted)

## API Principles & Standards

- **HTTP 1.1** : Our API only supports HTTP 1.1. Requests made with HTTP 1.0 explicitly will be denied.
- **JSON** : The service will return JSON documents for read, create, and update requests, and accept JSON payloads for create and update requests.
- **Secure HTTP w/TLS v1.2** : The API is only available via HTTPS, and supports GET (read), PUT (update) and DELETE (delete) operations. Our API will not accept connections using SSL or TLS below v1.2 protocol. We will only establish connections with TLS v1.2 protocol.
- **REST** : The service adheres to REST principles and exposes only one resource: Deposit.
- **MUST-IGNORE** : The service is constantly evolving and we expect consumers of our service to enforce a must-ignore policy. If the Deposit API starts returning additional data elements in responses, partners should ignore the data elements they do not need. 
- **Entity** : All successful responses returned by EPS services are encapsulated within an HTTP Entity. Entity is used as a way to make successful responses generic across different resources and operations. The Entity element may represent a single object, or multiple objects; if the latter, it would be an array. 
- **Errors** : If a request produces one or more errors, the response will return an array of one or more errors. If Errors are present, Entity will not be present.

## Resources & Endpoints Overview
* All of Expedia APIs now live under the https://services.expediapartnercentral.com/ domain. API  users should make sure to only ever use the fully qualified domain name in their requests to our APIs, and never try to guess/hardcode the IP this address resolves to. In order to provide a robust, highly available and scalable solution, Expedia can change the IPs being used without notice.

| Resource | Supported Operations | Production Endpoint |
| -------- | -------------------- | ------------------- |
| Deposit | Read the deposit policy (GET) belonging to a property | https://services.expediapartnercentral.com/properties/{ExpediaPropertyId}/depositPolicy |
| Deposit | Create/update the deposit policy (PUT): the first a policy is set is a "create"; any subsequent PUT will be considered an update. When updating, it is a full overlay operation: all the details of the desired policy need to be specified. | https://services.expediapartnercentral.com/properties/{ExpediaPropertyId}/depositPolicy |
| Deposit | Delete the deposit policy (DELETE) | https://services.expediapartnercentral.com/properties/{ExpediaPropertyId}/depositPolicy |


## HTTP Status Code

The API will leverage HTTP status codes as defined by RFC 2616, Section 10. More specifically, users should expect the following from the API: 

| Status Code | Meaning |
| ----------- | ------- |
| 200 | Success for read and update operations |
| 201 | Success for create operations |
| 204 | Success for delete operations |
| 400 | Errors induced by user due to incorrect input |
| 401 | Authentication error |
| 403 | Authorization error |
| 404 | Invalid resource |
| 405 | Invalid/unsupported method on resource |
| 406 | Unsupported media type for response (only application/json is supported) |
| 415 | Unsupported media type for requests (only application/json is supported) |
| 500 | Internal system error (should not be retried) |
| 503 | Temporary internal system error (should be retried) |
| 504 | Timeout error (should be retried) |

## HTTP Headers
HTTP headers are slightly different between a request made to the Deposit API, and responses returned.

### Format – Request
| Header | Type | Required | Input Format |
| ------ | ---- | -------- | ------------ |
| Authorization | String | Required | Authorization: Basic [username:password encoded by Base64] |
| Content-Type | String | Required* | Content-Type: application/json |
| Accept | String | Required | Accept: application/json |
| Request-ID | String | Optional | Can be provided by the partner and can be referenced later on for troubleshooting purposes. When provided by the partner, it can be anything, and no validations will be performed to insure uniqueness of this ID. If it is not provided in request, API will generate a UUID and return it in the response.  |
*required for create and modify requests only

### Format – Response
| Header | Type | Input Format |
| ------ | ---- | ------------ |
| Content-Type | String | Content-Type: application/json |
| Request-ID | String | Partner-provided request identifier. If it was not provided in the request, Expedia will generate a UUID and return it in the response |
| Transaction-ID | GUID | Unique transaction ID generated by Expedia for all messages. Expedia recommends storing this identifier. Can be used to reference messages when troubleshooting with Expedia |

## Basic Response Wrapper Structure with Entity and Errors
All responses provided by the API will either contain an HTTP Entity element, which may represent a single object or an array of objects, or an Errors object for an array of errors. 

### Entity
The only supported entity by the Deposit API is the deposit policy.

The Entity approach allows partners to use the same wrapper for all resources exposed by the new generation of Expedia Partner Services like the EPS Deposit and EPS Product services. 

Consider the following code in Java:
```java
public class ResponseWrapperDTO<T> implements Serializable {
    private T entity;
    private List<ErrorDTO> errors;
}
```
Entities can be deposit policy, rate plan, room type, property, images, amenities, etc.
Simple entity response:
```JSON
{
  "entity": {
    "resourceId": 123,
    ...
  }
}
```

### Single Entity VS Entity Array in Read/GET Responses
Although there is only a single read operation currently supported by the Deposit API, there are two different read operations that are technically available when reading resources:
- To get a specific resource, e.g. a single deposit policy: /properties/{propertyId}/depositPolicy
- To get a list of resources, e.g. all the active room types of a property: /properties/{propertyId}/roomTypes 


For example, when requesting the deposit policy of a property, the Deposit API will return the deposit policy resource information as part of an Entity object:
```JSON
{
  "entity": {
    "resourceId": 1,
    ...
  }
}
```
When requesting all room types for a property, an array of images is returned:
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

### Errors
If a response doesn’t contain an Entity, it will contain Errors:
```JSON
{
  "errors": [
    {
      "code": 1000,
      "message": "Access denied: your account is not authorized to manage this property."
    }
  ]
}
```

<a name="/definitions/ErrorDTO"></a>
#### Error

Property Name | Type | Description
------------- | ---- | -----------
code | integer | Error code ([full error code list](#/definitions/ErrorCodes))
message | string | Error message.

### Entity vs Errors
Entity and errors are in the same wrapper because most frameworks will de-serialize responses automatically, but require a target type to which the response will be de-serialized.

Both successful and unsuccessful responses are returned by the same DTO, but can have either entity or errors, never both.

A Java implementation to handle this, using Spring’s RestTemplate, could look like this:
```java
ResponseEntity<ResponseWrapperDTO<DepositDTO>> response = restTemplate.exchange(
    "url",
    HttpMethod.POST,
    entity,
    new ParameterizedTypeReference<ResponseWrapperDTO<DepositDTO>>() {});
```

## Deposit Policy Resource

Please note that a swagger JSON file can be obtained on this portal to facilitate development:
<https://services.expediapartnercentral.com/properties/depositPolicy/swagger.json>

### Obtain the deposit policy for a given property
- Method: `GET`
- Url: https://services.expediapartnercentral.com/properties/{propertyId}/depositPolicy
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type
--------- | -------------- | ----------- | -------- | ---------
propertyId | path | Expedia Property ID | true | string 

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [SuccessfulGetResponse](#/definitions/SuccessfulGetResponse)

**Example**
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

### Create/update the deposit policy for a given property
- Method: `PUT`
- Url: https://services.expediapartnercentral.com/properties/{propertyId}/depositPolicy
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type
--------- | -------------- | ----------- | -------- | ---------
propertyId | path | Expedia Property ID | true | string 
deposit | body | JSON document describing the deposit policy to be created/updated | true | [Deposit](#/definitions/Deposit)

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
201 | Created. The property didn't have a deposit policy, therefore it was created. | None
204 | No Content. The property already had a deposit policy defined, and it was updated successfully. | None

**Example**
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

### Delete the deposit policy for a given property
- Method: `DELETE`
- Url: https://services.expediapartnercentral.com/properties/{propertyId}/depositPolicy
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type
--------- | -------------- | ----------- | -------- | ---------
propertyId | path | Expedia Property ID | true | string 

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
204 | The property had a deposit policy and it was successfully deleted. | None


## Definitions

<a name="/definitions/SuccessfulGetResponse"></a>
### Successful Get Response Definition

Property Name | Type | Description
------------- | ---- | -----------
entity | [Deposit](#/definitions/Deposit) | 

<a name="/definitions/Deposit"></a>
### Deposit Definition

Property Name | Type | Description
------------- | ---- | -----------
defaultPolicy | [DefaultPolicy](#/definitions/DefaultPolicy) | Default policy. Applicable unless one or more exceptions are defined. Optional: it is possible to only define exception policies.
exceptionPolicies | Array[[ExceptionPolicy](#/definitions/ExceptionPolicy)] | Optional. Up to 4 exception policies can be defined. List of policies that override the default policy for the date range(s) specified in the exception. Order in the array of exception policies matters. The order of the elements in this array determines the order in which the policies should be applied in case of date overlap between exceptions.
_links | [DepositPolicyLinks](#/definitions/DepositPolicyLinks) | Object describing links to other resources to which this deposit policy is linked to. Optional (i.e. ignored) when specified on `PUT` operation.

<a name="/definitions/DefaultPolicy"></a>
### Default Policy Definition

Property Name | Type | Description
------------- | ---- | -----------
description | string | Default policy description. This field is optional.
payments | Array[[PaymentPolicy](#/definitions/PaymentPolicy)] | List of payment policies. Up to 4 payment policies can be defined. Order of payments in the array matters. Payments must be specified in chronological order: UPON_BOOKING followed by DAYS_PRIOR followed by UPON_ARRIVAL. Also, when multiple payments with the type "percentage" are used, the sum of them cannot exceed 100.

<a name="/definitions/PaymentPolicy"></a>
### Payment Policy Definition

Property Name | Type | Description
------------- | ---- | -----------
type | [PaymentPolicyTypeEnum](#/definitions/PaymentPolicyTypeEnum) | Defines the type of payment policy.
value | number (double) | Indicates the amount of money that must be paid. If type is REMAINDER, value cannot be specified. If type is either NIGHT or PERCENTAGE then the number must be whole (no fractional digits). Percentage cannot exceed 100.
when | [PaymentTime](#/definitions/PaymentTime) | Indicates when the deposit is due.

<a name="/definitions/PaymentTime"></a>
### Payment Time Definition

Order of payments in the array matters. Payments must be specified in chronological order: UPON_BOOKING followed by DAYS_PRIOR followed by UPON_ARRIVAL.

Property Name | Type | Description
------------- | ---- | -----------
type | [PaymentTimeTypeEnum](#/definitions/PaymentTimeTypeEnum) | Defines the type of payment time.
value | number (int32) | Only present if type is DAYS_PRIOR. Indicates the number of days prior to arrival that the customer must pay the deposit.

<a name="/definitions/ExceptionPolicy"></a>
### Exception Policy Definition

Property Name | Type | Description
------------- | ---- | -----------
description | string | Exception policy description. This field is optional.
payments | Array[[PaymentPolicy](#/definitions/PaymentPolicy)] | List of payment policies. Up to 4 payment policies can be defined.
dateRanges | Array[[DateRange](#/definitions/DateRange)] | List of date range during which the exception policy applies. One exception can contain from 1 to 15 date ranges maximum.

<a name="/definitions/DateRange"></a>
### Date Range Definition

Property Name | Type | Description
------------- | ---- | -----------
startDate | date | Starting date of the exception policy. Format is YYYY-MM-DD.
endDate | date | Ending date of the exception policy. Format is YYYY-MM-DD.
daysOfWeek | Array[[DayOfWeekEnum](#/definitions/DayOfWeekEnum)] | List of days of the week the exception policy is applicable.

<a name="/definitions/DepositPolicyLinks"></a>
### Deposit Policy Links Definition

Object describing links to other resources to which this deposit policy is linked to.

Property Name | Type | Description
------------- | ---- | -----------
self | [Link](#/definitions/Link) | Link to the current deposit policy.
ratePlans | Array[[Link](#/definitions/Link)] | Collection of links to the rate plans (active and inactive) on which this deposit policy is applicable.

<a name="/definitions/Link"></a>
### Link Definition

Object describing a single link to a resource to which this deposit policy is linked to.

Property Name | Type | Description
------------- | ---- | -----------
href | string (URL) | The fully-qualified URL of the resource.

## Enumerations & Domain Values

<a name="/definitions/PaymentPolicyTypeEnum"></a>
### Payment Policy Type
| Enum Value |
| ---------- |
| NIGHT |
| AMOUNT |
| PERCENTAGE |
| REMAINDER |

<a name="/definitions/PaymentTimeTypeEnum"></a>
### Payment Time Type
| Enum Value |
| ---------- |
| DAYS_PRIOR |
| UPON_ARRIVAL |
| UPON_BOOKING |

<a name="/definitions/DayOfWeekEnum"></a>
### Day of Week
| Enum Value |
| ---------- |
| MON |
| TUE |
| WED |
| THU |
| FRI |
| SAT |
| SUN |

<a name="/definitions/ErrorCodes"></a>
### Error Codes
| HTTP Status Code | Error Code | Error Description | Explanation and Recommended Action |
| ---------------- | ---------- | ----------------- | ---------------------------------- |
| 401 | 1001 | Unauthorized | Missing or Invalid Username or Password. |
| 403 | 1003 | Forbidden | Access to this API with a non-API account is forbidden. Please use an API account.
| 403 | 1000 | Forbidden | Access denied: your account is not authorized to manage this property.
| 404 | 2404 | Not Found | Resource not found: the server has not found anything matching the Request-URI. |
| 400 | 2003 | Bad Request | The domain value in JSON is not supported by the model. |
| 400 | 2004 | Bad Request | The JSON is missing required element. |
| 400 | 2005 | Bad Request | Duplicate concurrent property policy creation request sent. |
| 400 | 2006 | Bad Request | Duplicate concurrent property policy update request sent. |
| 400 | 2405 | Bad Request | Method not allowed: the method specified in the Request-Line is not allowed for the resource identified by the Request-URI. Allowed method(s): [methods]. |
| 400 | 2406 | Bad Request | Requested response media type unsupported: the resource identified by the request is unable to generate response entities of the media type requested by the Accept header attribute in the request. |
| 400 | 2415 | Bad Request | Request media type unsupported: the server is refusing to service the request because the media type specified in request under the Content-Type header attribute is not supported by the requested resource for the requested method. |
| 400 | 2425 | Bad Request | Invalid CORS request. |
| 404 | 3000 | Not Found | The property '[propertyId]' has no associated policy. |
| 400 | 3001 | Bad Request | Request must contain a default policy or an exception policy. |
| 400 | 3002 | Bad Request | Too many exception policies. At most 4 exception policies are allowed. |
| 400 | 3003 | Bad Request | Policy start date is mandatory. |
| 400 | 3004 | Bad Request | Policy end date is mandatory. |
| 400 | 3005 | Bad Request | Policy end date must be after the start date. |
| 400 | 3006 | Bad Request | Days of the weeks must be unique within the date range. |
| 400 | 3007 | Bad Request | At least one date range must be defined per policy. |
| 400 | 3008 | Bad Request | A policy contained too many date ranges. At most 15 date ranges are allowed. |
| 400 | 3009 | Bad Request | A policy may not contain overlapping dates. |
| 400 | 3010 | Bad Request | A policy must define at least one payment type. |
| 400 | 3011 | Bad Request | Payment type must be specified. |
| 400 | 3012 | Bad Request | A remainder type may not have a value field. |
| 400 | 3013 | Bad Request | A payment type that was not a remainder was missing a value field. |
| 400 | 3014 | Bad Request | Amount, percent or night payment value must be positive. |
| 400 | 3015 | Bad Request | Only an Amount payment type may contain a decimal value. |
| 400 | 3016 | Bad Request | A policy was missing a collection time. |
| 400 | 3017 | Bad Request | "Days prior to arrival" must have a positive value. |
| 400 | 3018 | Bad Request | Only the "Days prior to arrival" collection type may specify a value field. |
| 400 | 3019 | Bad Request | There must be at least one payment type before the remainder payment type. |
| 400 | 3020 | Bad Request | No payment allowed after a remainder payment type. |
| 400 | 3021 | Bad Request | An exception policy contains too many payments. At most 4 payment types are allowed. |
| 400 | 3022 | Bad Request | The sum of all payments exceeded 100%. |
| 400 | 3023 | Bad Request | A policy may only contain a single NIGHT payment type. |
| 400 | 3024 | Bad Request | Payments must be specified in chronological order: UPON_BOOKING followed by DAYS_PRIOR followed by UPON_ARRIVAL. |
| 400 | 3025 | Bad Request | The first payment may not be of type UPON_ARRIVAL. |
| 400 | 3026 | Bad Request | If the client specifies four percentage payments, their sum must equal to 100%. |
| 400 | 3027 | Bad Request | Payment amounts may not contain more than 2 decimal places. |
| 400 | 3028 | Bad Request | This property has rate plans requiring deposits. To remove the deposit policy, first update all rate plans to not require a deposit. |
| 400 | 3029 | Bad Request | Deposit Policies cannot be set on properties with ExpediaCollect-only business model. |
| 500 | 4100 | Internal Server Error | Internal System Error. Do not retry this request. Our support team was notified of the problem. |
| 503 | 4000 | Service Unavailable | Internal system error, please try again in a few minutes. |
