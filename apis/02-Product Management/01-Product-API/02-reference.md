# API Definition
The Product API will enable our hotels partners to create and edit their room types and rate plans via APIs, without having to use EPC or contact their market manager. The API also enables our partners to read the definition of the room types and rate plans created in the system.

<a name="/authentication"></a>
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

## Swagger.json File for Product API

To facilitate integrating with the Product API, Expedia offers a [Swagger.json](https://services.expediapartnercentral.com/products/swagger.json) file documenting the Product API model and operations. Please watch our [Video Tutorial](/apis/product-management/product-api/video.html) for more information on how developers can leverage this file to kick start development.

## API Principles & Standards

- **HTTP 1.1** : Our API only supports HTTP 1.1. Requests made with HTTP 1.0 explicitly will be denied.
- **JSON** : The service will return JSON documents for read, create, and update requests, and accept JSON payloads for create and update requests.
- **Secure HTTP w/TLS v1.2** : The API is only available via HTTPS, and supports GET (read), POST (create), and PUT (update) operations. Our API will not accept connections using SSL or TLS below v1.2 protocol. We will only establish connections with TLS v1.2 protocol.
- **REST** : The service adheres to REST principles and exposes three resources: Rate Plans, Room Types, and Properties.
- **MUST-IGNORE** : The service is constantly evolving and we expect consumers of our service to enforce a must-ignore policy. If the Product API starts returning additional data elements in responses, partners should ignore the data elements they do not need. Partners should also be able to serve the additional data back in an update request, as our update requests are full overlay, and failure to provide additional data back in update requests could cause data to be removed.
- **Entity** : All successful responses returned by EPS services are encapsulated within an HTTP Entity. Entity is used as a way to make successful responses generic across different resources and operations. The Entity element may represent a single object, or multiple objects; if the latter, it would be an array. 
- **Errors** : If a request produces one or more errors, the response will return an array of one or more errors. If Errors are present, Entity will not be present.

## Resources & Endpoints Overview
* All of Expedia APIs now live under the https://services.expediapartnercentral.com/ domain. API  users should make sure to only ever use the fully qualified domain name in their requests to our APIs, and never try to guess/hardcode the IP this address resolves to. In order to provide a robust, highly available and scalable solution, Expedia can change the IPs being used without notice.
* In order to access property information: `/products/properties/{propertyResourceId}`. Property resource ID is optional. If omitted, the list of active properties assigned to the account will be returned.
* Room types can be accessed in the context of a property: `/properties/{propertyResourceId}/roomTypes/{roomTypeResourceId}`. Room type resource ID is optional. If omitted, the list of active room types for the property will be returned.
* Rate plans can be accessed as part of a room type (they belong to a room type): `/properties/{propertyResourceId}/roomTypes/{roomTypeResourceId}/ratePlans/{ratePlanResourceId}`. Rate plan resource ID is optional. If omitted, the list of active rate plans for that room type will be returned.

| Resource | Supported Operations | Production Endpoint | Parameters |
| -------- | -------------------- | ------------------- | ---------- |
| Property | Read multiple properties (GET) (limited to max 200 at a time) belonging to the user credentials provided | GET https://services.expediapartnercentral.com/products/properties/ | status=all (optional) If status is not provided, only active properties are returned. offset={number starting at 0} (optional, returns results starting at position 0 by default) limit={number between 1 and 200} (optional, 20 by default) |
| Property | Read a single property (GET) | GET https://services.expediapartnercentral.com/products/properties/{PropertyID} | None |
| Room Type | Read multiple room types (GET) belonging to a single property | GET https://services.expediapartnercentral.com/properties/{propertyResourceId}/roomTypes/ | status=all (optional) If status is not provided, only active room types are returned.|
| Room Type | Read a single room type (GET) | GET https://services.expediapartnercentral.com/properties/{propertyResourceId}/roomTypes/{roomTypeResourceId} | None |
| Room Type | Create a single room type (POST) | POST https://services.expediapartnercentral.com/properties/{propertyResourceId}/roomTypes/ | None |
| Room Type | Update a single room type (PUT) in full overlay mode | PUT https://services.expediapartnercentral.com/properties/{propertyResourceId}/roomTypes/{roomTypeResourceId} | None |
| Room Type | Update a single room type (PATCH) in partial update mode | PATCH https://services.expediapartnercentral.com/properties/{propertyResourceId}/roomTypes/{roomTypeResourceId} | None |
| Room Type Amenity | Get amenities for a single room type| GET https://services.expediapartnercentral.com/properties/{propertyResourceId}/roomTypes/{roomTypeResourceId}/amenities | None |
| Room Type Amenity | Set amenities for a room type (PUT) in full overlay mode | PUT https://services.expediapartnercentral.com/properties/{propertyResourceId}/roomTypes/{roomTypeResourceId}/amenities | None |
| Room Type Rate Thresholds | Get rate thresholds for a single room type | GET https://services.expediapartnercentral.com/properties/{propertyResourceId}/roomTypes/{roomTypeResourceId}/rateThresholds | None |
| Rate Plan | Read multiple rate plans belonging to a single room type (GET) | GET https://services.expediapartnercentral.com/properties/{propertyResourceId}/roomTypes/{roomTypeResourceId}/ratePlans/ | status=all (optional) If status is not provided, only active rate plans are returned.|
| Rate Plan | Read a single rate plan (GET) | GET https://services.expediapartnercentral.com/properties/{propertyResourceId}/roomTypes/{roomTypeResourceId}/ratePlans/{ratePlanResourceId} | None |
| Rate Plan | Create a single rate plan (POST) | POST https://services.expediapartnercentral.com/properties/{propertyResourceId}/roomTypes/{roomTypeResourceId}/ratePlans/ | None |
| Rate Plan | Update a single rate plan (PUT) in full overlay mode | PUT https://services.expediapartnercentral.com/properties/{propertyResourceId}/roomTypes/{roomTypeResourceId}/ratePlans/{ratePlanResourceId} | None |
| Rate Plan | Update a single rate plan (PATCH) in partial update mode | PATCH https://services.expediapartnercentral.com/properties/{propertyResourceId}/roomTypes/{roomTypeResourceId}/ratePlans/{ratePlanResourceId} | None |
| Rate Plan | Delete a single rate plan (DELETE) | DELETE https://services.expediapartnercentral.com/properties/{propertyResourceId}/roomTypes/{roomTypeResourceId}/ratePlans/{ratePlanResourceId} | None |

<a name="/versioning"></a>
## Versioning

Expedia chose to version this API by making use of different content types per version. This gives Expedia the flexibility to version each resource (property, room type, rate plan) independently. 

Starting with version 2, it is now required to provide a content-type header including the version with any POST or PUT request. For example:

```
Content-Type: application/vnd.expedia.eps.product-v2+json
```

The Accept header also now indicates which version is expected to be returned. Accept header is optional. If ommitted, Expedia will default to return the latest version. If provided, Expedia will validate that the version requested for the response is a valid one. Example of a valid Accept header:

```
Accept: application/vnd.expedia.eps.product-v2+json
```

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
| 406 | Unsupported media type for response (only application/vnd.expedia.eps.product-v2+json is supported) |
| 409 | Conflicting data |
| 415 | Unsupported media type for requests (only application/vnd.expedia.eps.product-v2+json is supported) |
| 500 | Internal system error (should not be retried) |
| 503 | Temporary internal system error (should be retried) |
| 504 | Timeout error (should be retried) |

## HTTP Headers
HTTP headers are slightly different between a request made to the EPS Product API, and responses returned.

### Format – Request
| Header | Type | Required | Input Format |
| ------ | ---- | -------- | ------------ |
| Authorization | String | Required | Authorization: Basic [username:password encoded by Base64] |
| Content-Type | String | Required* | Content-Type: application/vnd.expedia.eps.product-v2+json |
| Accept | String | Required | Accept: application/vnd.expedia.eps.product-v2+json |
| Request-ID | String | Optional | Can be provided by the partner and can be referenced later on for troubleshooting purposes. When provided by the partner, it can be anything, and no validations will be performed to insure uniqueness of this ID. If it is not provided in request, API will generate a UUID and return it in the response.  |
*required for create and modify requests only

### Format – Response
| Header | Type | Format |
| ------ | ---- | ------------ |
| Content-Type | String | Content-Type: application/vnd.expedia.eps.product-v2+json |
| Request-ID | String | Partner-provided request identifier. If it was not provided in the request, Expedia will generate a UUID and return it in the response |
| Transaction-ID | GUID | Unique transaction ID generated by Expedia for all messages. Expedia recommends storing this identifier. Can be used to reference messages when troubleshooting with Expedia |
| Location | String | Location: {url}  This header is only returned from create (POST) requests and contains the full URL to the newly created resource |

## Basic Response Wrapper Structure with Entity and Errors
All responses provided by the API will either contain an HTTP Entity element, which may represent a single object or an array of objects, or an Errors object for an array of errors. 

### Entity
The entities supported by the product API are rate plans, room types and properties.

The Entity approach allows partners to use the same wrapper for all resources exposed by the new generation of Expedia Partner Services like the EPS Product and EPS Image services. 

Consider the following code in Java:
```java
public class ResponseWrapperDTO<T> implements Serializable {
    private T entity;
    private List<ErrorDTO> errors;
}
```
Entities can be Product/RatePlan/RoomType/Property etc.
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
There are two different read operations available against the Product API resources:
- To get a specific resource, the resource ID needs to be specified on the URL. For example: /products/properties/{propertyId}
- To get all the active resources in the system, omit the resource ID on the URL. For example: /products/properties/. 


For example, when requesting a single property, EPS Product API will return the property resource information as part of an Entity object:
```JSON
{
  "entity": {
    "resourceId": 1,
    ...
  }
}
```
When requesting all properties assigned to a user account, an array of properties is returned:
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
code | integer | [Full list of error codes](#/definitions/ErrorCodes).
message | string | 

### Entity vs Errors
Entity and errors are in the same wrapper because most frameworks will de-serialize responses automatically, but require a target type to which the response will be de-serialized.

Both successful and unsuccessful responses are returned by the same DTO, but can have either entity or errors, never both.

A Java implementation to handle this, using Spring’s RestTemplate, could look like this:
```java
   ResponseEntity<ResponseWrapperDTO<RoomTypeDTO>> response = restTemplate.exchange(
            "url",
            HttpMethod.POST,
            entity,
            new ParameterizedTypeReference<ResponseWrapperDTO<RoomTypeDTO>>() {});
```

## Property
### Obtain a list of properties
- Method: `GET`
- Url: https://services.expediapartnercentral.com/products/properties
- Consumes: `HTTP Request (GET)`
- Produces: `application/vnd.expedia.eps.product-v2+json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
Authorization | header | Authorization token in http header. Format: Authorization: Basic [username:password encoded by Base64] | Yes | Base64 encoded auth token 
status | query | Status filter. String. Only supported value is "all". | false | string | If not provided, API will only return active properties.
offset | query | Pagination offset. Integer starting at 0 | false | string | 0
limit | query | Pagination limit. Integer between 1 and 200. | false | string | 20

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [Property](#/definitions/PropertyDTO)


### Read a single property
- Method: `GET`
- Url: https://services.expediapartnercentral.com/products/properties/{propertyId}
- Consumes: `HTTP Request (GET)`
- Produces: `application/vnd.expedia.eps.product-v2+json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type 
--------- | -------------- | ----------- | -------- | --------- 
Authorization | header | Authorization token in http header. Format: Authorization: Basic [username:password encoded by Base64] | Yes | Base64 encoded auth token 
propertyId | path | Expedia Property ID | Yes | string  

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [Property](#/definitions/PropertyDTO)

<a name="/definitions/PropertyDTO"></a>
### Property Resource Definition

Property Name | Type | Description
------------- | ---- | -----------
resourceId | integer | Expedia property ID.
name | string | Name describing the property. Max. 255 characters.
partnerCode | string | Partner property code/identifier. Max 64 characters. Optional field returned for connected properties. This code allows partner to uniquely identify the property in its system.
status | string | Status in which the property can be in; Allowed values are: Active, Inactive, Onboarding, UnderConversion.
currency | string | Currency code applicable to all amounts found in any resources available as part of the EPS Product API. Format: [ISO 4217](http://www.iso.org/iso/home/standards/currency_codes.htm). E.g.: "USD" (for US dollars), "CAD" (for Canadian dollars) etc.
address | [PropertyAddress](#/definitions/PropertyAddressDTO) | Property address details.
distributionModels | Array[Enum] | Distribution model(s) under which the property is configured to work with Expedia. Possible values are: ExpediaCollect, HotelCollect. Properties that opted in the ExpediaTravelerPreference program will have both.
rateAcquisitionType | Enum | Describes which type of rate will be provided via this API, but also which type of rate should be used when managing availability and rates in  ExpediaPartnerCentral or using EC or EQC APIs. Possible value s are NetRate (rate net of Expedia’s compensation) and SellLAR (rate inclusive of compensation).
taxInclusive | boolean | Returned to indicate whether the rate being exchanged over other APIs (availability/rates or booking) is inclusive of taxes or not.
pricingModel | Enum | Configuration of the property when it comes to pricing rooms and rates. Possible values are PerDayPricing and OccupancyBasedPricing. This list is different from the rate plan pricing model list, as rate plans can have more detailed pricing schemes (arrival and length of stay).
baseAllocationEnabled | boolean | Boolean to indicate whether this property has a base allocation contract with Expedia.
cancellationTime | string | Cancellation deadline reference time. When cancel policies are defined and exchanged via the rate plan resource, a deadline in hours is provided. The deadline in hours is always relative to this property cancellation deadline reference time configuration.
timezone | string | Descriptive information about property timezone configuration in Expedia system. Description will start by a GMT offset, followed by a friendly name. Any configuration or settings related to date or time for a property will always be relative to this timezone. Examples of such configurations include property cancellation time and property reservation cutoff time. E.g.: "(GMT) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London"
reservationCutOff | [CutOff](#/definitions/CutOffDTO) | Used to indicate when we stop making rate plans available to book for same day reservations. Expedia can configure properties to accept last minute bookings up until 5:00 AM on the next day. If configured this way, a property would accept that Expedia uses availability and rates from September 1st, and sell it up until September 2nd, 5:00 AM (based on property timezone).

<a name="/definitions/CutOffDTO"></a>
#### CutOff

Property Name | Type | Description
------------- | ---- | -----------
time | string | Indicates at which time we’ll stop making inventory available for same day reservations
day | string | Can take one of 2 values: sameDay or nextDay. It complements the time attribute.

<a name="/definitions/PropertyAddressDTO"></a>
#### PropertyAddress

Property Name | Type | Description
------------- | ---- | -----------
line1 | string | First line of address.
line2 | string | Optional. Second line of address.
city | string | City in which the property is located.
state | string | Optional. State/Province.
postalCode | string | Optional. Postal or State Code.
countryCode | string | ISO 3166-1 Alpha 3 country code, for the country where the property is located.

## Room type
### Obtain a list of room types
- Method: `GET`
- Url: https://services.expediapartnercentral.com/properties/{propertyId}/roomTypes
- Consumes: `HTTP Request (GET)`
- Produces: `application/vnd.expedia.eps.product-v2+json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default
--------- | -------------- | ----------- | -------- | --------- | -------------
Authorization | header | Authorization token in http header. Format: Authorization: Basic [username:password encoded by Base64] | Yes | Base64 encoded auth token 
propertyId | path | Expedia Property ID | Yes | string | 
status | query | Status filter. String. Only supported value is "all". | false | string | If not provided, API will only return active room types (meaning room type with at least one active rate plan, as room type status can't be directly controlled, but is rather inferred from its rate plans statuses).

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [RoomType](#/definitions/RoomTypeDTO)

### Creates a new room type
- Method: `POST`
- Url: https://services.expediapartnercentral.com/properties/{propertyId}/roomTypes
- Consumes: `application/vnd.expedia.eps.product-v2+json`
- Produces: `application/vnd.expedia.eps.product-v2+json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type 
--------- | -------------- | ----------- | -------- | --------- 
Authorization | header | Authorization token in http header. Format: Authorization: Basic [username:password encoded by Base64] | Yes | Base64 encoded auth token 
propertyId | path | Expedia Property Id | Yes | string  
body | body | JSON message describing the new room type | Yes | [RoomType](#/definitions/RoomTypeDTO) 

**Examples**
```
{
        "partnerCode": "MyStringCode",
        "name": {
            "attributes": {
                "typeOfRoom": "Penthouse",
                "roomClass": "Executive",
                "includeBedType": true,
                "view": "City View",
                "featuredAmenity": "Jetted Tub",
                "customLabel": "Rooftop Terrace"
            }
        },
        "ageCategories": [
            {
                "category": "Adult", 
                "minAge": 18
            }, 
            {
                "category": "ChildAgeA", 
                "minAge": 6
            }, 
            {
                "category": "Infant", 
                "minAge": 0
            }
        ], 
        "maxOccupancy": {
            "adults": 2, 
            "children": 1, 
            "total": 3
        }, 
        "standardBedding": [
            {
                "option": [
                    {
                        "quantity": 1,
                        "type": "King Bed"
                    }
                ]
            }
        ], 
        "extraBedding": [
            {
                "quantity": 1,
                "type": "Rollaway Bed",
                "size": "Full",
                "surcharge": {
                    "type": "Per Day",
                    "amount": 20
                }
            }
        ],
        "smokingPreferences": [
            "Non-Smoking"
        ],
        "roomSize": {
            "squareFeet": 300,
            "squareMeters": 14
        },
        "views": [
            "Ocean View",
            "Beach View"
        ]
}
```

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
201 | Created | [RoomType](#/definitions/RoomTypeDTO)


### Read a single room type
- Method: `GET`
- Url: https://services.expediapartnercentral.com/properties/{propertyId}/roomTypes/{roomTypeId}
- Consumes: `HTTP Request (GET)`
- Produces: `application/vnd.expedia.eps.product-v2+json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type 
--------- | -------------- | ----------- | -------- | --------- 
Authorization | header | Authorization token in http header. Format: Authorization: Basic [username:password encoded by Base64] | Yes | Base64 encoded auth token 
propertyId | path | Expedia Property ID | Yes | string  
roomTypeId | path | Room type resource ID. Integer | Yes | string  

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [RoomType](#/definitions/RoomTypeDTO)


### Modify an existing room type
Expedia offers 2 ways to modify a room type.

Using the PUT verb, partners can perform a full overlay change of the room type resource. It means that all elements of a room type need to be provided, and any optional element not provided will be erased/removed.

Using the PATCH verb, partners can perform a partial update of a room type. Expedia implemented the Merge-Patch RFC.

#### Room Type Modify - Full Overlay (PUT)
- Method: `PUT`
- Url: https://services.expediapartnercentral.com/properties/{propertyId}/roomTypes/{roomTypeId}
- Consumes: `application/vnd.expedia.eps.product-v2+json`
- Produces: `application/vnd.expedia.eps.product-v2+json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type 
--------- | -------------- | ----------- | -------- | --------- 
Authorization | header | Authorization token in http header. Format: Authorization: Basic [username:password encoded by Base64] | Yes | Base64 encoded auth token 
propertyId | path | Expedia Property Id | Yes | string  
roomTypeId | path | Room type resource ID | Yes | string  
body | body | JSON message with modified room type | Yes | [RoomType](#/definitions/RoomTypeDTO)  

**Examples**
```
{
        "resourceId": 200142893,
        "partnerCode": "MyStringCode",
        "name": {
            "attributes": {
                "typeOfRoom": "Penthouse",
                "roomClass": "Executive",
                "includeBedType": true,
                "view": "City View",
                "featuredAmenity": "Jetted Tub",
                "customLabel": "Rooftop Terrace"
            },
            "value": "Executive Penthouse, 1 King Bed, Jetted Tub, City View (Rooftop Terrace)"
        },
        "status": "Active",
        "ageCategories": [
            {
                "category": "Adult", 
                "minAge": 18
            }, 
            {
                "category": "ChildAgeA", 
                "minAge": 6
            }, 
            {
                "category": "Infant", 
                "minAge": 0
            }
        ], 
        "maxOccupancy": {
            "adults": 2, 
            "children": 1, 
            "total": 3
        }, 
        "standardBedding": [
            {
                "option": [
                    {
                        "quantity": 1, 
                        "type": "King Bed",
                        "size": "King"
                    }
                ]
            }
        ], 
        "extraBedding": [
            {
                "quantity": 1,
                "type": "Sofa Bed",
                "size": "Full",
                "surcharge": {
                    "type": "Per Day",
                    "amount": 20
                }
            }
        ],
        "smokingPreferences": [
            "Non-Smoking"
        ],
        "roomSize": {
            "squareFeet": 300,
            "squareMeters": 14
        },
        "views": [
            "Ocean View",
            "Beach View"
        ],
        "wheelchairAccessibility": true
}
```

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [RoomType](#/definitions/RoomTypeDTO)

<a name="/PatchRoomType"></a>
#### Room Type Modify - Partial Update (PATCH)

Expedia chose the merge-patch method for partial update, as described in [IETF RFC](https://tools.ietf.org/html/rfc7396).

This method allows partners to update a room type by providing only the fields/values they need to change. This saves partners from having to first read the room type before updating it. If partners provide the complete room type data, this method essentially behaves just like the [update](#modify-an-existing-room-type) method.

The response will always be the complete image of the room type after changes have been applied.

**Important**

The PATCH logic only applies to first (top) level elements/objects of the [room type](#/definitions/RoomTypeDTO). Partners can decide to include any number of these top level elements/objects, and any elements/objects not included will be ignored/untouched.  If a partner includes any array or complex object (such as name, age categories or max occupancy), these objects will need to be fully specified with all the desired elements/attributes/object changes, as they are treated as full overlay.

First-level elements/objects not provided in the input will remain unchanged. Some top-level elements can be removed. To do so, you have to explicitly specify it in the JSON message, as null. For array types, you need to provide a "null" or empty array value.

Also note that all validation rules are applied on the complete updated room type data. For instance, only providing a `ageCategories` that has no "Adult" category will yield the appropriate error response.

- Method: `PATCH`
- Url: https://services.expediapartnercentral.com/properties/{propertyId}/roomTypes/{roomTypeId}
- Consumes: `application/vnd.expedia.eps.product-v2+json`
- Produces: `application/vnd.expedia.eps.product-v2+json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type
--------- | -------------- | ----------- | -------- | ---------
Authorization | header | Authorization token in http header. Format: Authorization: Basic [username:password encoded by Base64] | Yes | Base64 encoded auth token
propertyId | path | Expedia Property ID | Yes | string
roomTypeId | path | Room type resource ID | Yes | string
body | body | JSON message of partially updated room type | Yes | [RoomType](#/definitions/RoomTypeDTO)

**Examples**

Updating both the partner code and the name attributes:
```
{
  "partnerCode": "PatchedPartnerCode",
  "name": {
      "attributes": {
        "typeOfRoom": "Loft",
        "roomClass": "Deluxe",
        "area": "Poolside"
      }
    }
}
```

Updating only the maximum occupancy:
```
{
  "maxOccupancy": {
      "total": 3,
      "adults": 2
    }
}
```

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [RoomType](#/definitions/RoomTypeDTO)

<a name="/definitions/RoomTypeDTO"></a>
### RoomType Resource Definition

Property Name | Type | Required for POST | Description
------------- | ---- | ------------------ | -----------
resourceId | integer | No | Integer. Required for modify, and cannot be changed. This resource ID is what will be used to manage availability and rates, and also what Expedia specifies in booking messages to identify the room booked.
partnerCode | string | Yes | Partner room type code/identifier. Max. 40 characters. Has to be unique across all room types for this hotel. This is used as a unique key to ensure partners do not duplicate room types in Expedia system.
name | [RoomTypeName](#/definitions/RoomTypeNameDTO) | Yes | Name object. Collection of elements/attributes related the name of a room.
status | enum | No | Possible values are (Active, Inactive). Room type status is derived from the rate plans associated with the room type: if at least one rate plan is active, the room type status will be active. If all rate plans are inactive, then the room type becomes inactive as well. This value can be omitted in a create request. If provided during create, it will be ignored. This value cannot be edited in an update message. If modified, an error will be returned.
ageCategories | Array[[RoomTypeAgeCategory](#/definitions/RoomTypeAgeCategoryDTO)] | Yes | Array of age categories. Defines the different age categories supported by the room type. At the very least, the 'Adult' category must be defined.
maxOccupancy | [Occupancy](#/definitions/OccupancyDTO) | No | Defines the maximum occupancy of the room in total and by age category. Always returned by room type GET. Optional for room type create and update. When not provided the Product API will calculate the occuancy based on bedding options. 
standardBedding | [BeddingOption](#/definitions/BeddingOptionDTO) | Yes | Minimum 1 maxium 2 bedding options a room may have. Each bedding option can be with a combination of beds (type, size and quality).
extraBedding | Array[[ExtraBed](#/definitions/ExtraBedDTO)] | No | Defines the extra bed combination (type, size and quality) the room type may have.
smokingPreferences | Array[[smokingPreferenceEnum](#/definitions/smokingPreferenceEnum)] | Yes | Used to define whether the room type is smoking, nonsmoking, or if both options are available on request. If a single smoking option is provided, then the room is, by default, only available in this configuration. If both options are provided, then a choice will be offered to the customer at the time he makes a reservation, and the customer preference will be sent in electronic booking messages to the partner.
roomSize | [RoomSize](#/definitions/RoomSizeDTO) | No | Used to define room size. When used, both size in square feet and in square meters must be specified.
views | Array[[viewEnum](#/definitions/viewEnum)] | No | Used to define view(s) from the room. There can be up to 2 different views defined per room type.
wheelchairAccessibility | boolean | No | Used to indicate whether the room is configured to be wheelchair accessible or not.
\_links | [RoomTypeLinks](#/definitions/RoomTypeDTOLinks) | No | Collection of URLs that point to various resources related to the current resource. Cannot be provided in create requests. Cannot be changed via partial (PATCH) or full overlay (PUT) updates.

<a name="/definitions/RoomTypeNameDTO"></a>
#### RoomTypeName
More information can be found on room type names in the "FAQ and Guides" section, under "Understanding Expedia's Logic Around Room Names" section.

Property Name | Type | Description
------------- | ---- | -----------
attributes | [RoomNameAttributes](#/definitions/RnsAttributesDTO) | Collection of attributes that can be used to build a room type name. Should only be provided if partner doesn’t want to use one of the predefined names Expedia supports.
value | string | For create and modify requests, optional and ignored if name attributes are used. Required if name attributes are not provided. When provided in create or update requests, without any name attributes, value provided needs to be one of the predefined room names found in  [PredefinedRoomNamesEnum](#/definitions/PredefinedRoomNamesEnum) section. For read, create and modify responses, if partner is making use of room name attributes, this field will contain the auto-generated name based off the attributes that were provided, in English-US language. If partner is using a predefined name, this field will contain the predefined name value, as provided in the create or update request.

<a name="/definitions/RnsAttributesDTO"></a>
#### RoomNameAttributes
More information can be found on room type names in the "FAQ and Guides" section, under "Understanding Expedia's Logic Around Room Names" section.

Property Name | Type | Required | Description
------------- | ---- | -------- | -----------
typeOfRoom | [typeOfRoomEnum](#/definitions/typeOfRoomEnum) | Yes | Attribute that determines the type of room, which is used to compose the name
roomClass | [roomClassEnum](#/definitions/roomClassEnum) | No | Attribute that described the class of room, which is used to compose the name
includeBedType | boolean | No | Attribute that determines whether or not to include bed type on the room name
bedroomDetails | [bedroomDetailsEnum](#/definitions/bedroomDetailsEnum) | No | Attribute that describes details of the bedroom used to compose the name of the room
includeSmokingPref | boolean | No | Attribute that determines if room has smoking preference
accessibility | boolean | No | Attribute that determines if room is considered wheelchair accessible
view | [viewEnum](#/definitions/viewEnum) | No | Attribute that gives additional information about the view of the room
featuredAmenity | [featuredAmenityEnum](#/definitions/featuredAmenityEnum) | No | Attribute used to highlight a feature of the room on its name
area | [areaEnum](#/definitions/areaEnum) | No | Attributed used to highlight the location of the room
customLabel | string | No | Free text that can be appended to the name generated by the attributes. Use of this attribute is discouraged. Max 37 characters

<a name="/definitions/RoomTypeAgeCategoryDTO"></a>
#### RoomTypeAgeCategory

Property Name | Type | Required | Description
------------- | ---- | -------- | -----------
category | [categoryEnum](#/definitions/categoryEnum) | Yes | Defines which category of age is being defined. 
minAge | integer | Yes | Defines what is the minimum age for a person to belong in the given age category.

<a name="/definitions/OccupancyDTO"></a>
#### Occupancy

Property Name | Type | Required | Description
------------- | ---- | -------- | -----------
total | integer | Yes | Total count of person that can reside in the room.
adults | integer | Yes | Max number of adults that can reside in the room.
children | integer | Yes | Max number of children that can reside in the room.

<a name="/definitions/BeddingOptionDTO"></a>
#### BeddingOption

Property Name | Type | Required | Description
------------- | ---- | -------- | -----------
option | Array[[Bed](#/definitions/BedDTO)] | Yes | Each bedding option can be with a combination of beds (type, size and quality). 

<a name="/definitions/BedDTO"></a>
#### Bed

Property Name | Type | Required | Description
------------- | ---- | -------- | -----------
quantity | integer | Yes | Number of beds.
type | [bedTypeEnum](#/definitions/bedTypeEnum) | Yes | Defines the bed type. Example: "King Bed", "Sofa Bed".
size | [bedSizeEnum](#/definitions/bedSizeEnum) | No | Defines the size of the bed. Example: "King", "Queen". When specified, [only certain sizes can be used for each type](#/definitions/bedTypeAndSize). For bed types where Expedia accepts different sizes, when the size is not specific, Expedia will default to the smallest size possbile for the bed type.

<a name="/definitions/ExtraBedDTO"></a>
#### Extra Bed

Property Name | Type | Required | Description
------------- | ---- | -------- | -----------
quantity | integer | Yes | Number of beds.
type | [bedTypeEnum](#/definitions/bedTypeEnum) | Yes | Defines the bed type. Example: "King Bed", "Sofa Bed".
size | [bedSizeEnum](#/definitions/bedSizeEnum) | No | Defines the size of the bed. Example: "King", "Queen". When specified, [only certain sizes can be used for each type](#/definitions/bedTypeAndSize). For bed types where Expedia accepts different sizes, when the size is not specific, Expedia will default to the smallest size possible for the bed type.
surcharge | [surcharge](#/definitions/SurchargeDTO) | No | Defines the surcharge of the bed. Only extra beds of type "Crib" and "Rollaway Bed" can have a surcharge defined.

<a name="/definitions/SurchargeDTO"></a>
#### Surcharge

Property Name | Type | Required | Description
------------- | ---- | -------- | -----------
type | [surchargeTypeEnum](#/definitions/surchargeTypeEnum) | Yes | Defines the surcharge type. Example: "Free", "Per Day".
amount | number | No | Defines the amount of the surcharge. Must be defined if type is not "Free".

<a name="/definitions/RoomSizeDTO"></a>
#### RoomSize

Property Name | Type | Required | Description
------------- | ---- | -------- | -----------
squareFeet | integer | Yes | Room size in square feet.
squareMeters | integer | Yes | Room size in square meters.

<a name="/definitions/RoomTypeDTOLinks"></a>
#### RoomTypeLinks

Property Name | Type | Description
------------- | ---- | -----------
self | [Link](#/definitions/LinkDTO) | URL of the current resource. Cannot be provided in create requests. Cannot be changed via partial (PATCH) or full overlay (PUT) updates.

## Room Type Amenities
Amenities of a given room type can be accessed as a sub resource of a specific room type any time after it was created. By default, for newly created room types, there will be no amenities. The only operations available are GET to read amenities, and PUT to set amenities (as a full overlay, all currently supported amenities have to be passed in a PUT).

### Read a single room type's amenities
- Method: `GET`
- Url: https://services.expediapartnercentral.com/properties/{propertyId}/roomTypes/{roomTypeId}/amenities
- Consumes: `HTTP Request (GET)`
- Produces: `application/vnd.expedia.eps.product-v2+json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type 
--------- | -------------- | ----------- | -------- | --------- 
Authorization | header | Authorization token in http header. Format: Authorization: Basic [username:password encoded by Base64] | Yes | Base64 encoded auth token 
propertyId | path | Expedia Property ID | Yes | string 
roomTypeId | path | Room type resource ID. Integer | Yes | string 

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | Array[[RoomTypeAmenityDTO](#/definitions/RoomTypeAmenityDTO)] 

### Set room type amenities to an existing room type
- Method: `PUT`
- Url: https://services.expediapartnercentral.com/properties/{propertyId}/roomTypes/{roomTypeId}/amenities
- Consumes: `application/vnd.expedia.eps.product-v2+json`
- Produces: `application/vnd.expedia.eps.product-v2+json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type 
--------- | -------------- | ----------- | -------- | --------- 
Authorization | header | Authorization token in http header. Format: Authorization: Basic [username:password encoded by Base64] | Yes | Base64 encoded auth token 
propertyId | path | Expedia Property Id | Yes | string  
roomTypeId | path | Room type resource ID | Yes | string  
body | body | JSON message with the room type amenities | Yes | Array[[RoomTypeAmenityDTO](#/definitions/RoomTypeAmenityDTO)] 

**Examples**
```
[
  {
    "code": "ROOM_WIFI_INTERNET",
    "detailCode": "SURCHARGE"
  }, {
    "code": "ROOM_BATHTUB_TYPE",
    "detailCode": "DEEP_SOAKING"
  }, {
    "code": "ROOM_TV",
    "detailCode": "FLAT_PANEL"
  }, {
    "code": "ROOM_TV_SIZE",
    "detailCode": "SIZE_INCH",
    "value": 42
  }, {
    "code": "ROOM_NUMBER_OF_SEPARATE_BEDROOMS",
    "value": 2
  }, {
    "code": "ROOM_RECENT_RENOVATION_MONTH",
    "value": 5
  }, {
    "code": "ROOM_RECENT_RENOVATION_YEAR",
    "value": 2011
  }, {
    "code": "ROOM_PET_FRIENDLY"
  }
]
```
#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | Array[[RoomTypeAmenityDTO](#/definitions/RoomTypeAmenityDTO)] 

<a name="/definitions/RoomTypeAmenityDTO"></a>
#### RoomTypeAmenity Definition

For a full list of supported amenity codes, detail codes and values, see [amenityCodes](#/definitions/amenityCodes).

Property Name | Type | Description
------------- | ---- | -----------
code | [amenityCodes](#/definitions/amenityCodes) | Uniquely identifies an amenity. A given code can only ever be specified once for a room type. 
detailCode | [amenityCodes](#/definitions/amenityCodes) | Adds precision or qualifies the amenity. Mandatory for some amenity, optional for other and prohibited by the rest of the amenities.
value | [amenityCodes](#/definitions/amenityCodes) | Integer. Adds precision to the amenity. Mandatory for some amenity, optional for other and prohibited by the rest of the amenities.

## Room Type Rate Thresholds

Rate Thresholds defines the minimum and maximum acceptable amounts that can be pushed for a room night, under any rate plan of the room type. They are used to verify that the rate being pushed for the rate plans of this room are not abnormally low or abnormally high. Rate thresholds can only be read by partners, they cannot be set, changed or deleted.

Room type rate thresholds can be defined by Expedia in one of 2 ways: set by a manual override, or automatically calculated from the last 10 bookings made against any rate plan of the room type. By default, the automatic method is used. Thresholds will not be returned until at least 10 reservations were made, so it is expected that newer room types will have no room type thresholds defined. When no room-specific thresholds exist, Expedia defaults to global thresholds not exposed via this API.

### Obtain rate thresholds for a single room type
- Method: `GET`
- Url: https://services.expediapartnercentral.com/properties/{propertyId}/roomTypes/{roomTypeId}/rateThresholds
- Consumes: `HTTP Request (GET)`
- Produces: `application/vnd.expedia.eps.product-v2+json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
Authorization | header | Authorization token in http header. Format: Authorization: Basic [username:password encoded by Base64] | Yes | Base64 encoded auth token 
propertyId | path | Expedia Property ID | Yes | string | 
roomTypeId | path | Room type resource ID | Yes | string |

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [RateThresholds](#/definitions/RateVerificationThresholdsDTO)

<a name="/definitions/RateVerificationThresholdsDTO"></a>
### RateThresholds Resource Definition

Property Name | Type | Description
------------- | ---- | -----------
type | [rateAcquisitionTypeEnum](#/definitions/rateAcquisitionTypeEnum) | Type of the rate verification thresholds. The only supported value is: SellLAR.
minAmount | number | Defines minimum acceptable rate, expressed as a decimal number. If the rate is lower than this minimum value, the AR rate update for any rate plans of this room type will be ignored and a warning will be returned.
maxAmount | number | Defines maximum acceptable rate, expressed as a decimal number. If the rate is higher than this maximum value, the AR rate update for any rate plans of this room type will be ignored and a warning will be returned.
source | [rateThresholdsSourceEnum](#/definitions/rateThresholdsSourceEnum) | Defines how the minimum and maximum amounts were calculated. It is either RecentBookings (thresholds calculated using last 10 bookings, and applying multiplication and division factor to find maximum and minimum values) or Manual (manually defined by Expedia). RecentBookings is Expedia's default method.
\_links | [RateThresholdsLinks](#/definitions/RateVerificationThresholdsDTOLinks) | Collection of URLs that point to various resources related to the current resource.

<a name="/definitions/RateVerificationThresholdsDTOLinks"></a>
#### RateThresholdsLinks

Property Name | Type | Description
------------- | ---- | -----------
self | [Link](#/definitions/LinkDTO) | URL of the current resource.


<a name="/definitions/rateThresholdsSourceEnum"></a>
### rateThresholdsSourceEnum

| rateThresholdsSourceEnum |
| ------------------ |
| RecentBookings |
| ManualOverride |

**Example**
GET https://services.expediapartnercentral.com/properties/12933870/roomTypes/201706782/rateThresholds
```
{
  "entity": {
    "type": "SellLAR",
    "minAmount": 98.55,
    "maxAmount": 310.2,
    "source": "RecentBookings",
    "_links": {
      "self": {
        "href": "https://services.expediapartnercentral.com/properties/12933870/roomTypes/201706782/rateThresholds"
      }
    }
  }
}
```

## Rate plan
### Obtain a list of rate plans
- Method: `GET`
- Url: https://services.expediapartnercentral.com/properties/{propertyId}/roomTypes/{roomTypeId}/ratePlans
- Consumes: `HTTP Request (GET)`
- Produces: `application/vnd.expedia.eps.product-v2+json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
Authorization | header | Authorization token in http header. Format: Authorization: Basic [username:password encoded by Base64] | Yes | Base64 encoded auth token 
propertyId | path | Expedia Property ID | Yes | string | 
roomTypeId | path | Room type resource ID | Yes | string | 
status | query | Status filter. String. Only supported value is "all". | false | string | active

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [RatePlan](#/definitions/RatePlanDTO)


### Create a new rate plan
- Method: `POST`
- Url: https://services.expediapartnercentral.com/properties/{propertyId}/roomTypes/{roomTypeId}/ratePlans
- Consumes: `application/vnd.expedia.eps.product-v2+json`
- Produces: `application/vnd.expedia.eps.product-v2+json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
Authorization | header | Authorization token in http header. Format: Authorization: Basic [username:password encoded by Base64] | Yes | Base64 encoded auth token 
propertyId | path | Expedia Property ID | Yes | string | 
roomTypeId | path | Room type resource ID | Yes | string | 
body | body | JSON message describing the new rate plan | Yes | [RatePlan](#/definitions/RatePlanDTO) | 

**Examples**
```
{
  "name": "My Rate Plan Name",
  "rateAcquisitionType": "NetRate",
  "distributionRules": [
    {
      "partnerCode": "ECCode",
      "distributionModel": "ExpediaCollect"
    }, {
      "partnerCode": "HCCode",
      "distributionModel": "HotelCollect"
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
      }, {
        "deadline": 24,
        "perStayFee": "None",
        "amount": 0
      }
    ],
        "exceptions": [
            {
                "endDate": "2019-04-01",
                "startDate": "2019-03-01",
                "penalties": [
                    {
                        "amount": 1.0,
                        "deadline": 0,
                        "perStayFee": "1stNightRoomAndTax"
                    },
                    {
                        "amount": 1.0,
                        "deadline": 24,
                        "perStayFee": "FullCostOfStay"
                    }
                ]
            }
        ]
  },
  "additionalGuestAmounts": [
    {
      "ageCategory": "Adult",
      "amount": 8.73
    }, {
      "ageCategory": "ChildAgeA",
      "amount": 5
    }
  ],
  "serviceFeesPerStay": [
      {
    "isTaxable": false,
    "percent": 0.2
     },
     {
    "isTaxable": true,
    "amountPerNight": 5.0,
    "amountPerStay": 20.0,
     }
    ],
    "serviceFeesPerPerson": [
     {
     "dateStart": "2018-09-20",
     "dateEnd": "2079-06-06",
     "ageCategory": "Adult",
     "isTaxable": true,
     "amountPerStay": 20
      },
      {
      "dateStart": "2018-07-27",
      "dateEnd": "2018-09-19",
      "ageCategory": "Adult",
      "isTaxable": true,
      "amountPerNight": 12
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
  "travelDateStart": "1901-01-01",
  "travelDateEnd": "2079-06-06",
  "mobileOnly": false
}
```

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
201 | Created | [RatePlan](#/definitions/RatePlanDTO)


### Read a single rate plan
- Method: `GET`
- Url: https://services.expediapartnercentral.com/properties/{propertyId}/roomTypes/{roomTypeId}/ratePlans/{ratePlanId}
- Consumes: HTTP Request (GET)
- Produces: `application/vnd.expedia.eps.product-v2+json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type 
--------- | -------------- | ----------- | -------- | --------- 
Authorization | header | Authorization token in http header. Format: Authorization: Basic [username:password encoded by Base64] | Yes | Base64 encoded auth token 
propertyId | path | Expedia Property ID | Yes | string  
roomTypeId | path | Room type resource ID | Yes | string  
ratePlanId | path | Rate plan resource ID | Yes | string  

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [RatePlan](#/definitions/RatePlanDTO)


### Modify an existing rate plan

Expedia offers 2 ways to modify a rate plan. 

Using the PUT verb, partners can perform a full overlay change of the rate plan resource. It means that all elements of a rate plan need to be provided, and any optional element not provided will be erased/removed.

Using the PATCH verb, partners can perform a partial update of a rate plan. Expedia implemented the Merge-Patch RFC.

#### Rate Plan Modify - Full Overlay (PUT)

- Method: `PUT`
- Url: https://services.expediapartnercentral.com/properties/{propertyId}/roomTypes/{roomTypeId}/ratePlans/{ratePlanId}
- Consumes: `application/vnd.expedia.eps.product-v2+json`
- Produces: `application/vnd.expedia.eps.product-v2+json`

**Parameters**

Parameter | Parameter Type | Description | Required | Data Type 
--------- | -------------- | ----------- | -------- | --------- 
Authorization | header | Authorization token in http header. Format: Authorization: Basic [username:password encoded by Base64] | Yes | Base64 encoded auth token 
propertyId | path | Expedia Property ID | Yes | string  
roomTypeId | path | Room type resource ID | Yes | string  
ratePlanId | path | Rate plan resource ID | Yes | string  
body | body | JSON message of modified rate plan | Yes | [RatePlan](#/definitions/RatePlanDTO)  

**Example**
```
{
  "resourceId": 205020307,
  "name": "My Rate Plan Name",
  "rateAcquisitionType": "NetRate",
  "distributionRules": [
    {
      "expediaId": "205020307",
      "partnerCode": "ECCode",
      "distributionModel": "ExpediaCollect",
      "manageable": true,
      "compensation": {
        "percent": 0.23,
        "minAmount": 0
      }
    }, {
      "expediaId": "205020307A",
      "partnerCode": "HCCode",
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
  "depositRequired": false,
  "creationDateTime": "2016-10-20T21:05:12Z",
  "lastUpdateDateTime": "2016-10-21T18:37:27Z",
  "cancelPolicy": {
    "defaultPenalties": [
      {
        "deadline": 0,
        "perStayFee": "1stNightRoomAndTax",
        "amount": 0
      }, {
        "deadline": 24,
        "perStayFee": "None",
        "amount": 0
      }
    ],
        "exceptions": [
            {
                "endDate": "2019-04-01",
                "startDate": "2019-03-01",
                "penalties": [
                    {
                        "amount": 1.0,
                        "deadline": 0,
                        "perStayFee": "1stNightRoomAndTax"
                    },
                    {
                        "amount": 1.0,
                        "deadline": 24,
                        "perStayFee": "FullCostOfStay"
                    }
                ]
            }
        ]
  },
  "additionalGuestAmounts": [
    {
      "dateStart": "2015-11-27",
      "dateEnd": "2079-06-06",
      "ageCategory": "Adult",
      "amount": 8.73
    }, {
      "dateStart": "2015-11-27",
      "dateEnd": "2079-06-06",
      "ageCategory": "ChildAgeA",
      "amount": 5
    }
  ],
   "serviceFeesPerStay": [
     {
    "isTaxable": false,
    "percent": 0.2
     },
     {
    "isTaxable": true,
    "amountPerNight": 5.0,
    "amountPerStay": 20.0,
     }
     ]
       "serviceFeesPerPerson": [
     {
     "dateStart": "2018-09-20",
     "dateEnd": "2079-06-06",
     "ageCategory": "Adult",
     "isTaxable": true,
     "amountPerStay": 20
      },
      {
      "dateStart": "2018-07-27",
      "dateEnd": "2018-09-19",
      "ageCategory": "Adult",
      "isTaxable": true,
      "amountPerNight": 12
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
  "travelDateStart": "1901-01-01",
  "travelDateEnd": "2079-06-06",
  "mobileOnly": false,
  "_links": {
    "self": {
      "href": "https://services.expediapartnercentral.com/properties/12933870/roomTypes/201706782/ratePlans/205020307"
    }
  }
}
```

**Success Responses**

Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [RatePlan](#/definitions/RatePlanDTO)

<a name="/PatchRatePlan"></a>
#### Rate Plan Modify - Partial Update (PATCH)

Expedia chose the merge-patch method for partial update, as described in [IETF RFC](https://tools.ietf.org/html/rfc7396).

This method allows partners to update a rate plan by providing only the fields/values they need to change. This saves partners from having to first read the rate plan before updating it. If partners provide the complete rate plan data, this method essentially behaves just like the [update](#modify-an-existing-rate-plan) method.

The response will always be the complete image of the rate plan after changes have been applied.

**Important**

The PATCH logic only applies to first (top) level elements/objects of the [rate plan](#/definitions/RatePlanDTO). Partners can decide to include any number of these top level elements/objects, and any elements/objects not included will be ignored/untouched.  If a partner includes any array or complex object (such as cancel policy, additional guest amounts or distribution rules), these objects will need to be fully specified with all the desired elements/attributes/object changes, as they are treated as full overlay.

First-level elements/objects not provided in the input will remain unchanged. Some top-level elements can be removed. To do so, you have to explicitly specify it in the JSON message, as null. For array types, you need to provided a "null" or empty array value.

Also note that all validation rules are applied on the complete updated rate plan data. For instance, only providing a `travelDateStart` that is after the current `travelDateEnd` will yield the appropriate error response.

- Method: `PATCH`
- Url: https://services.expediapartnercentral.com/properties/{propertyId}/roomTypes/{roomTypeId}/ratePlans/{ratePlanId}
- Consumes: `application/vnd.expedia.eps.product-v2+json`
- Produces: `application/vnd.expedia.eps.product-v2+json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type 
--------- | -------------- | ----------- | -------- | --------- 
Authorization | header | Authorization token in http header. Format: Authorization: Basic [username:password encoded by Base64] | Yes | Base64 encoded auth token 
propertyId | path | Expedia Property ID | Yes | string  
roomTypeId | path | Room type resource ID | Yes | string  
ratePlanId | path | Rate plan resource ID | Yes | string  
body | body | JSON message of partially updated rate plan | Yes | [RatePlan](#/definitions/RatePlanDTO)  

**Examples**

Updating both the name and the status:
```
{
  "name": "My New Rate Plan Name",
  "status": "Inactive"
}
```

Updating only the cancel policy:
```
{
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
		],
		"exceptions": [
			{
				"endDate": "2019-04-01",
				"startDate": "2019-03-01",
				"penalties": [
					{
						"amount": 1.0,
						"deadline": 0,
						"perStayFee": "1stNightRoomAndTax"
					},
					{
						"amount": 1.0,
						"deadline": 24,
						"perStayFee": "FullCostOfStay"
					}
				]
			}
		]
	}
}
```



#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [RatePlan](#/definitions/RatePlanDTO)

### Delete an existing rate plan
- Method: `DELETE`
- Url: https://services.expediapartnercentral.com/properties/{propertyId}/roomTypes/{roomTypeId}/ratePlans/{ratePlanId}
- Consumes: HTTP Request (DELETE)
- Produces: `application/vnd.expedia.eps.product-v2+json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type
--------- | -------------- | ----------- | -------- | ---------
Authorization | header | Authorization token in http header. Format: Authorization: Basic [username:password encoded by Base64] | Yes | Base64 encoded auth token
propertyId | path | Expedia Property ID | Yes | string
roomTypeId | path | Room type resource ID | Yes | string
ratePlanId | path | Rate plan resource ID | Yes | string

#### Success Responses
Status Code | Description
----------- | -----------
204 | No Content

<a name="/definitions/RatePlanDTO"></a>
### RatePlan Resource Definition

Property Name | Type | Description
------------- | ---- | -----------
resourceId | integer | Uniquely describes the rate plan resource. Cannot be provided in a create request, will be assigned by Expedia after successful rate plan creation.
name | string | Name of the rate plan, for information/identification purposes. Min 1, Max 40 characters. If not provided, defaults to the manageable rate plan partner code.
rateAcquisitionType | enum | Rate acquisition type, inherited from the Property. Possible values are NetRate (rate without compensation) and SellLAR (rate inclusive of compensation).
distributionRules | Array[[DistributionRule](#/definitions/DistributionRuleDTO)] | Used to provide information about how this rate plan can be sold (ExpediaCollect, HotelCollect or both). Also contain the IDs and Codes that need to be mapped to push avail/rates and identify the right rate plans in booking messages. When a rate plan has a single Distribution Rule with Distribution Model set as HotelCollect, the rate plan will only be sold as HotelCollect and the property is expected to collect the payment at the time customers check in. When a rate plan has a single Distribution Rule with Distribution Model set to ExpediaCollectm it indicates that this rate plan will be sold as ExpediaCollect and the property will collect payment from Expedia. If two distinct Distribution Rules are set, one for ExpediaCollect, one for HotelCollect, it indicates that the rate plan can be sold as either ExpediaCollect or HotelCollect. In this case, only one of them can be used to manage avail/rate but both can be used in booking messages, to indicate which option (ExpediaCollect or HotelCollect) the customer selected. Any other combination of distribution rules cannot exist. For properties that participate in the ExpediaTravelerPreference (ETP) program, it is required for all their standalone rate plans to support both ExpediaCollect and HotelCollect.
status | enum | Defaults to Active if not provided during creation. Possible values: Active, Inactive.
type | enum | Rate Plan type. Defaults to Standalone if not provided during creation. Possible values: Standalone, Package, Corporate.
pricingModel | enum | Rate Plan pricing model. Will default to property’s pricing model, and if provided, it has to match the property’s pricing model. Possible values are: PerDayPricing, PerDayPricingByDayOfArrival, PerDayPricingByLengthOfStay, OccupancyBasedPricing, OccupancyBasedPricingByDayOfArrival, OccupancyBasedPricingByLengthOfStay.
occupantsForBaseRate | integer | Max occupants allowed for the base rate. Min 1, Max 20. This is only applicable for per day pricing properties, and required in create requests. It indicates how many occupants the per day price applies to.
taxInclusive | boolean | Returned to indicate whether the rate being exchanged over other APIs (availability/rates or booking) is inclusive of taxes or not. During creation, for properties managing net rates, the default value is false. For sell rates, it is based on the property's configuration.
depositRequired | boolean | Indicates if a deposit is required upon booking. This flag is only available for Rate Plan with business models HotelCollect or ExpediaTravelerPreference. Read-only. Cannot currently be set at time of create, or changed in update call. Will be defaulted to False at time of create. Partners who need to collect deposits should contact their Expedia Market Manager.
creationDateTime | date | Date at which the rate plan has been created. The date is formatted in the ISO 8601 format. Example: 2016-10-20T21:05:12Z. Set by Expedia at time of create, cannot be provided in create request. Cannot be changed.
lastUpdateDateTime | date | Date of the last modifications to this rate plan. The date is formatted in the ISO 8601 format. Example: 2016-10-21T18:37:27Z. Read-only. Set by Expedia at time of Create or Update. Cannot be provided in create or changed by partner in update messages.
cancelPolicy | [CancelPolicy](#/definitions/CancelPolicyDTO) | Default cancel policy. If not provided in a create request, the product API will select a refundable cancellation policy that is currently used by the most recently created standalone rate plan under the same property. If Expedia cannot identify a recently created rate plan, the policy will be defaulted to a standard cancellation policy, where the cancellation deadline is set to 24h from guest arrival, the penalty for cancelling inside this deadline is one night room and tax, and there is no penalty for cancelling outside of this deadline.
additionalGuestAmounts | Array[[AdditionalGuestAmount](#/definitions/AdditionalGuestAmountDTO)] | Array of additional guest amounts. Up to 6 can be specified, 1 per category. Only 1 amount can be given per category, for all dates.
serviceFeesPerStay | Array[[serviceFeesPerStay]](#/definitions/serviceFeesPerStay)] | Array of Per Stay Service Fees that are collected at the time of Booking. 
serviceFeesPerPerson | Array[[serviceFeesPerPerson]](#/definitions/serviceFeesPerPerson)] | Array of Per Person Service Fees that are collected at the time of Booking. 
valueAddInclusions | Array[[valueAddInclusionsEnum](#/definitions/valueAddInclusionsEnum)] | Array of value add inclusions. Value add inclusions are special features included with this rate. Breakfast, Internet, or parking inclusions are the most frequently used ones
minLOSDefault | integer | Default minimum LengthOfStay restriction. Min 1, Max 28. Set to 1 by default if not provided in a create request. Will always be considered along the value defined for each stay date, and the most restrictive of this default and the daily restriction will prevail
maxLOSDefault | integer | Default maximum LengthOfStay restriction. Min 1, Max 28. Set to 28 by default if not provided in a create request. Will always be considered along the value defined for each stay date, and the most restrictive of this default and the daily restriction will prevail
minAdvBookDays | integer | The minimum days before a stay date that the rate plan can be sold. Min 0, Max 500
maxAdvBookDays | integer | The maximum days before a stay date that the rate plan can be sold. Min 0, Max 500
bookDateStart | date | Date at which this rate plan starts being available for searching on any Expedia POS. If in the past, indicates rate plan book date start is not restricted. Accepted format: YYYY-MM-DD. If not restricted, will be returned as 1900-01-01
bookDateEnd | date | Date at which this rate plan stops being available for searching on any Expedia POS. Format YYYY-MM-DD. If not restricted, will be returned as 2079-06-06. If in 2079, indicates this rate plan book end date is unrestricted
travelDateStart | date | Date at which customers can start checking in for a stay including this rate plan. Format YYYY-MM-DD. If not restricted, will be returned at 1900-01-01.If in the past, indicates rate plan travel start date is not restricted
travelDateEnd | date | Latest date at which customers can checkout for a stay including this rate plan. Format YYYY-MM-DD. If not restricted, will be returned as 2079-06-06. If in 2079, indicates rate plan travel end date is not restricted
mobileOnly | boolean | Indicates this rate plan is only available through shopping done on mobile devices
ratePlanLinkage | [RatePlanLinkage](#/definitions/RatePlanLinkageDTO) | Describes how the Rate Plan rates and availability are going to be derived from its parent Rate Plan. Optional, only returned on rate plans being derived from a parent rate plan via a rate linkage rule.  Cannot be provided in create requests. Cannot be changed via partial (PATCH) or full overlay (PUT) updates.
\_links | [RatePlanLinks](#/definitions/RatePlanDTOLinks) | Collection of URLs that point to various resources related to the current resource. Cannot be provided in create requests. Cannot be changed via partial (PATCH) or full overlay (PUT) updates.

<a name="/definitions/AdditionalGuestAmountDTO"></a>
#### AdditionalGuestAmount

Property Name | Type | Description
------------- | ---- | -----------
dateStart | date | Date at which this amount started being applicable, can be in the past
dateEnd | date | Date until which this amount will be applied. If no end date defined, will be returned as 2079-06-06.
ageCategory | enum | The age category for the additional guests. Possible values: Adult, ChildAgeA, ChildAgeB, ChildAgeC, ChildAgeD, Infant.
amount | number | Min value 0.000, accepts up to 3 decimal points

<a name="/definitions/serviceFeesPerStayDTO"></a>
#### serviceFeesPerStay

Property Name | Type | Description
------------- | ---- | -----------
isTaxable | Boolean | Indicates if the Service Fees loaded is to be taxed or not.
amountPerNight | Number | Defines the amount charged per night. Maximum possible value is 12000000
amountPerStay | Number | Defines the amount charged for the entire stay period. Maximum possible value is 12000000
percent | number | Percentage value (of the base rate). Values should be between 0 and 1, will return upto 4 decimal points

<a name="/definitions/serviceFeesPerStayDTO"></a>
#### serviceFeesPerPerson

Property Name | Type | Description
------------- | ---- | -----------
dateStart | date | Date at which this amount started being applicable, can be in the past
dateEnd | date | Date until which this amount will be applied. If no end date defined, will be returned as 2079-06-06.
ageCategory | enum | The age category for the additional guests. Possible values: Adult, ChildAgeA, ChildAgeB, ChildAgeC, ChildAgeD, Infant.
isTaxable | Boolean | Indicates if the Service Fees loaded is to be taxed or not.
amountPerNight | Number | Defines the amount charged per night. Maximum possible value is 12000000
amountPerStay | Number | Defines the amount charged for the entire stay period. Maximum possible value is 12000000

<a name="/definitions/CancelPolicyDTO"></a>
#### CancelPolicy

Property Name | Type | Description
------------- | ---- | -----------
defaultPenalties | Array[[Penalty](#/definitions/PenaltyDTO)] | Array of penalties. There can be one or 2 penalties provided. A penalty with a deadline of 0 is always required. A second deadline can optionally be provided.
exceptions | Array[[CancelPolicyException](#/definitions/CancelPolicyExceptionDTO)] | Array of exceptions. Exceptions can be provided for specific date ranges. An exception will contain a startDate, endDate, and an array of penalties that follow the same structure and rules as the penalties provided as default. Max 500 exceptions.

<a name="/definitions/CancelPolicyExceptionDTO"></a>
#### Cancel Policy Exception

Property Name | Type | Required | Description
------------- | ---- | -------- | -----------
startDate | date | Yes | Start date of an exception. Has to be in format: YYYY-MM-DD
endDate | date | Yes | End date of an exception. Cannot be in the past. Has to be in format: YYYY-MM-DD.
penalties | Array[[Penalty](#/definitions/PenaltyDTO)] | Yes | Array of penalties applicable to the start and end dates provided. There can be one or 2 penalties provided. A penalty with a deadline of 0 is always required. A second deadline can optionally be provided.

<a name="/definitions/PenaltyDTO"></a>
#### Penalty

Property Name | Type | Description
------------- | ---- | -----------
deadline | integer | Penalty window defined in hours. Hours are relative to checkin date and the property's cancellation time (property level configuration that is available in read-only mode under the property resource). Min 0, max 999 hours.
perStayFee | [perStayFeeEnum](#/definitions/perStayFeeEnum) | Fee that will be charged if the customer cancels within the specified deadline.
amount | number | Min value 0.000 (3 decimal points). The amount provided here should be based on the property rate acquisition type. If the property rate acquisition type is Net, the rate provided here should be net of Expedia compensation. If it is SellLAR, the rate should be what the customer will be charged (inclusive of Expedia compensation). Used to define a flat amount that would be charged as a cancel or change penalty. This would normally replace a per-stay fee, but it can also be added on top of a per-stay fee if that is what the partner requires

<a name="/definitions/DistributionRuleDTO"></a>
#### DistributionRule

Property Name | Type | Description
------------- | ---- | -----------
expediaId | string | String, min 1, max 50 characters. Expedia rate plan ID that will be specified in booking messages and that should be used to manage avail/rates if this set of distribution rules is marked as manageable.
partnerCode | string | Unique partner identifier for the rate plan. Min 1, max 10 characters. For a given room type, this code has to be unique per distribution model (e.g. for all ExpediaCollect rate plan distribution rules under this room, this code has to be unique). Uniqueness will be validated by Expedia during create or update operations. Accepted characters are a-z, A-Z, 0-9, '.', '_' and '-'.
distributionModel | string | Distribution model adopted by the rate plan, matching property configuration.
manageable | boolean | Cannot be provided in a create request. Default to yes for HotelCollect-only or ExpediaCollect-only rate plans. For ExpediaTravelerPreference rate plans, if rate acquisition type is net, ExpediaCollect will default to true; if rate acquisition type is Sell/LAR, HotelCollect will default to true.
compensation | [CompensationRule](#/definitions/CompensationRuleDTO) | Applicable compensation rules for this distribution model. Defaults to the value defined on the contract with the partner. Cannot be provided in a create request, and cannot be modified in update operation.

<a name="/definitions/CompensationRuleDTO"></a>
#### CompensationRule

Property Name | Type | Description
------------- | ---- | -----------
percent | number | Compensation percentage applied by default. Expressed as a value. Between 0 and 1, will return up to 4 decimal points
minAmount | number | Minimum amount. Accepts up to 3 decimal points. Only applicable to ExpediaCollect distribution rules
exceptions | Array[[CompensationExceptionRule](#/definitions/CompensationExceptionRuleDTO)] | Depending on the contractual agreement between Expedia and the partner, compensation can vary based on different criteria. This array of exceptions will reflect this

<a name="/definitions/CompensationExceptionRuleDTO"></a>
#### CompensationExceptionRule

Property Name | Type | Description
------------- | ---- | -----------
dateStart | date | Starting date of the exception rule. Accepted format: YYYY-MM-DD
dateEnd | date | End date of the exception rule. Accepted format: YYYY-MM-DD
minAmount | number | Accepts up to 3 decimal points
percent | number | Between 0 and 1, accepts up to 3 decimal points
mon | boolean | For any exception, all 7 days of week are returned with a true/false indicator.
tue | boolean | For any exception, all 7 days of week are returned with a true/false indicator.
wed | boolean | For any exception, all 7 days of week are returned with a true/false indicator.
thu | boolean | For any exception, all 7 days of week are returned with a true/false indicator.
fri | boolean | For any exception, all 7 days of week are returned with a true/false indicator.
sat | boolean | For any exception, all 7 days of week are returned with a true/false indicator.
sun | boolean | For any exception, all 7 days of week are returned with a true/false indicator.

<a name="/definitions/RatePlanLinkageDTO"></a>
#### RatePlanLinkage

Property Name | Type | Description
------------- | ---- | -----------
deriveAvailabilityStatus | boolean | Indicates if the rate plan daily availability status (open/close) is linked to parent or not.
deriveLengthOfStayRestriction | boolean | Indicates if the daily restrictions on minimum and maximum length of stay are derived from the parent Rate Plan or not.
deriveClosedToArrival | boolean | Indicates if the daily restriction on close to arrival is derived from the parent Rate Plan or not.
deriveClosedToDeparture | boolean | Indicates if the daily restriction on close to departure is derived from the parent Rate Plan or not.
rateDerivationRules | Array[[RateDerivationRule](#/definitions/RateDerivationRuleDTO)] | Rules that describe how the daily rates are derived from the parent Rate Plan.

<a name="/definitions/RateDerivationRuleDTO"></a>
#### RateDerivationRule

Property Name | Type | Description
------------- | ---- | -----------
dateStart | date | Starting date of the rate derivation rule. Format is YYYY-MM-DD.
dateEnd | date | Ending  date of the rate derivation rule. Format is YYYY-MM-DD.
adjustmentType | [adjustmentTypeEnum](#/definitions/adjustmentTypeEnum) | Defines the type of adjustment made on the rate. Possible values are Percentage and Amount. 
adjustmentValue | number | Defines the actual adjustment being applied to the rate. Can take a positive or negative value, depending on the type of adjustment applied. Percentage values are expressed as decimal numbers between 0.00 and 100.00, where 10.0 means 10%.
exclusionDates | Array[[Period](#/definitions/PeriodDTO)] | Periods of time during which the rate plan derivation rule does not apply. When exclusion dates are specified, they apply to rate and restriction linkage. In other words, for these exclusion dates, nothing at all is linked.

<a name="/definitions/PeriodDTO"></a>
#### Period

Property Name | Type | Description
------------- | ---- | -----------
dateStart | date | Starting date of the period. Format is YYYY-MM-DD.
dateEnd | date | Ending date of the period. Format is YYYY-MM-DD.


<a name="/definitions/RatePlanDTOLinks"></a>
#### RatePlanLinks

Property Name | Type | Description
------------- | ---- | -----------
self | [Link](#/definitions/LinkDTO) | URL of the current resource. Cannot be provided in create requests. Cannot be changed via partial (PATCH) or full overlay (PUT) updates.
parentRatePlan | [Link](#/definitions/LinkDTO) | URL of the parent Rate Plan, from which this Rate Plan derives its rate and availability. Optional, only returned if a rate plan is derived from a parent via a rate plan linkage rule.  Cannot be provided in create requests. Cannot be changed via partial (PATCH) or full overlay (PUT) updates.
derivedRatePlans | Array[[Link](#/definitions/LinkDTO)] | List of URLs that point to the derived Rate Plans. These Rate Plans have their rates and availability derived from this Rate Plan. Optional, only returned if a rate plan is being derived by children rate plans via rate plan linkage rules.  Cannot be provided in create requests. Cannot be changed via partial (PATCH) or full overlay (PUT) updates.
depositPolicy | [Link](#/definitions/LinkDTO) | URL of the property deposit policy.  Cannot be provided in create requests. Cannot be changed via partial (PATCH) or full overlay (PUT) updates.


<a name="/definitions/LinkDTO"></a>
#### Link

Property Name | Type | Description
------------- | ---- | -----------
href | string | The link's URL.

<a name="/definitions/rateAcquisitionTypeEnum"></a>
### rateAcquisitionTypeEnum

| rateAcquisitionTypeEnum |
| ------------------ |
| NetRate |
| SellLAR |


<a name="/definitions/ErrorCodes"></a>
## Error codes
Renders the page describing the business error codes used by the API
- Method: `GET`
- Url: https://services.expediapartnercentral.com/products/documentation/api/errors
- Consumes: `HTTP Request (GET)`
- Produces: `text/html`

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | successful operation | HTML Page


## Enumerations & Domain Values

<a name="/definitions/PredefinedRoomNamesEnum"></a>
### PredefinedRoomNamesEnum
| Room Type Name |
| -------------- |
| Apartment, 1 Bedroom |
| Apartment, 2 Bedrooms |
| Classic Double Room |
| Classic Room |
| Classic Twin Room  |
| Deluxe Double Room |
| Deluxe Room |
| Deluxe Twin Room  |
| Double Room |
| Double Room Single Use |
| Executive Room |
| Executive Suite |
| Executive Twin Room  |
| Family Room |
| Junior Suite |
| Quadruple Room |
| Single Room |
| Standard Double Room |
| Standard Room |
| Standard Single Room |
| Standard Twin Room  |
| Studio |
| Suite |
| Suite, 1 Bedroom |
| Superior Double Room |
| Superior Room |
| Superior Twin Room  |
| Triple Room |
| Twin Room  |

<a name="/definitions/typeOfRoomEnum"></a>
### typeOfRoomEnum
| typeOfRoom |
| ---------- |
| Apartment |
| Bungalow |
| Cabin |
| Chalet |
| Condo |
| Cottage |
| Double or Twin Room |
| Double Room |
| Double Room Single Use |
| Duplex |
| House |
| Loft |
| Mobile Home |
| Penthouse |
| Quadruple Room |
| Room |
| Shared Dormitory |
| Single Room |
| Studio |
| Studio Suite |
| Suite |
| Tent |
| Townhome |
| Tree House |
| Triple Room |
| Twin Room |
| Villa |

<a name="/definitions/roomClassEnum"></a>
### roomClassEnum
| roomClass |
| --------- |
| Basic |
| Business |
| City |
| Classic |
| Club |
| Comfort |
| Deluxe |
| Design |
| Economy |
| Elite |
| Exclusive |
| Executive |
| Family |
| Gallery |
| Grand |
| Honeymoon |
| Junior |
| Luxury |
| Panoramic |
| Premier |
| Premium |
| Presidential |
| Romantic |
| Royal |
| Senior |
| Signature |
| Standard |
| Superior |
| Traditional |

<a name="/definitions/bedroomDetailsEnum"></a>
### bedroomDetailsEnum
| bedroomDetails |
| -------------- |
| 1 Bedroom |
| 2 Bedrooms |
| 3 Bedrooms |
| 4 Bedrooms |
| 5 Bedrooms |
| 6 Bedrooms |
| Multiple Bedrooms |
| Men only |
| Mixed Dorm |
| Women only |

<a name="/definitions/featuredAmenityEnum"></a>
### featuredAmenityEnum
| featuredAmenity |
| --------------- |
| 2 Bathrooms |
| Allergy Friendly |
| Balcony |
| Bathtub |
| Business Lounge Access |
| Concierge Service |
| Connecting Rooms |
| Ensuite |
| Fireplace |
| Hot Tub |
| Jetted Tub |
| Kitchen |
| Kitchenette |
| Lanai |
| Microwave |
| No Windows |
| Patio |
| Pool Access |
| Private Bathroom |
| Private Pool |
| Refrigerator |
| Refrigerator & Microwave |
| Sauna |
| Shared Bathroom |
| Terrace |

<a name="/definitions/viewEnum"></a>
### viewEnum

Views can be used either in room name attributes, or in an array of up to 2 views defined at the room-level. The list of values supported for each is slightly different. The below table indicates where each view can be used. Most can be used in both places without problem.

| view | Room Name Attribute | Room-Level |
| ---- | ------------------- | ---------- |
| Bay View | Yes | Yes |
| Beach View | Yes | Yes |
| Canal View | Yes | Yes |
| City View | Yes | Yes |
| Courtyard View | Yes | Yes |
| Garden View | Yes | Yes |
| Golf View | Yes | Yes |
| Harbor View | Yes | Yes |
| Hill View | Yes | Yes |
| Lagoon View | Yes | Yes |
| Lake View | Yes | Yes |
| Marina View | Yes | Yes |
| Mountain View | Yes | Yes |
| Multiple View | Yes | No |
| No View | Yes | No |
| Ocean View | Yes | Yes |
| Park View | Yes | Yes |
| Partial Lake View | Yes | Yes |
| Partial Ocean View | Yes | Yes |
| Partial Sea View | Yes | Yes |
| Partial View | Yes | No |
| Pool View | Yes | Yes |
| Resort View | Yes | Yes |
| River View | Yes | Yes |
| Sea View | Yes | Yes |
| Valley View |  Yes | Yes |
| View | Yes | No |
| Vineyard View | Yes | Yes |
| Water View  | No | Yes |

<a name="/definitions/areaEnum"></a>
### areaEnum

| area |
| ---- |
| Attribute |
| Annex Building |
| Beachfront |
| Beachside |
| Corner |
| Courtyard Area |
| Executive Level |
| Garden Area |
| Ground Floor |
| Lakeside |
| Mezzanine |
| Mountainside |
| Oceanfront |
| Overwater |
| Poolside |
| Sea Facing |
| Slope side |
| Tower |

<a name="/definitions/categoryEnum"></a>
### categoryEnum

| category |
| ---- |
| Adult |
| ChildAgeA |
| ChildAgeB |
| ChildAgeC |
| ChildAgeD |
| Infant |

<a name="/definitions/smokingPreferenceEnum"></a>
### smokingPreferenceEnum

| smokingPreference |
| ---- |
| Smoking |
| Non-Smoking |

<a name="/definitions/bedTypeEnum"></a>
### bedTypeEnum

Bed types can not all be used as extra or standard beds. To understand if a bed type can be used in the standard bedding configuration of the room, or can only be provided in the extra bed list, please refer to the Standard/Extra column. Trying to provide a standard-only bed as extra (or vice-versa) via the API will result in the API returning an error.

| bedType | Standard/Extra |
| ------- | -------------- |
| Bunk Bed | Standard only |
| Full Bed | Standard only |
| Futon |  Standard only |
| King Bed | Standard only |
| Murphy Bed | Standard only | 
| Queen Bed | Standard only |
| Trundle Bed | Standard only |
| Twin Bed | Standard only |
| Twin XL Bed | Standard only |
| Water Bed | Standard only |
| Sofa Bed | Standard and Extra |
| Crib | Extra only |
| Day Bed | Extra only |
| Rollaway Bed | Extra only |

<a name="/definitions/bedSizeEnum"></a>
### bedSizeEnum
As guidance, size references can be found below, to help partners better understand what each type refers to. All sizes are width sizes, and both centimeters (cm) and inches (in) are provided.

| bedSize | Size Reference - Centimeters | Size Reference - Inches |
| ------- | ---------------------------- | ----------------------- | 
| Crib | Minimum width: 40cm <br/> Maximum width: 40cm | Minimum width: 15in <br/> Maximum width: 15in |
| Full | Minimum width: 125cm <br/> Maximum width: 150cm | Minimum width: 49in <br/> Maximum width: 59in |
| King | Minimum width: 180cm <br/> Maximum width: 210cm | Minimum width: 70in <br/> Maximum width: 82in |
| Queen | Minimum width: 150cm <br/> Maximum width: 180cm | Minimum width: 59in <br/> Maximum width: 70in |
| Twin | Minimum width: 74cm <br/> Maximum width: 100cm | Minimum width: 29in <br/> Maximum width: 39in |
| TwinXL | Minimum width: 100cm <br/> Maximum width: 125cm | Minimum width: 39in <br/> Maximum width: 49in |

<a name="/definitions/bedTypeAndSize"></a>
### Valid Bed Type and Size Combinations

Expedia doesn't support all possible combinations of bed types and size. The table below indicates which sizes can be used with each bed type. Partners attempting to make use of any other size will get an error back from the API when they do so.

|  bedType | bedSize |
| ---- | ---- |
| Bunk Bed | Full, King, Queen, Twin, TwinXL |
| Crib | Crib |
| Day Bed | Full, King, Queen, Twin, TwinXL |
| Full Bed | Full |
| Futon | Full, King, Queen, Twin, TwinXL |
| King Bed | King |
| Murphy Bed | Full, King, Queen, Twin, TwinXL |
| Queen Bed | Queen |
| Rollaway Bed | Full, King, Queen, Twin, TwinXL |
| Sofa Bed | Full, King, Queen, Twin, TwinXL |
| Trundle Bed | Full, King, Queen, Twin, TwinXL |
| Twin Bed | Twin |
| Twin XL Bed | TwinXL |
| Water Bed | Full, King, Queen, Twin, TwinXL |

<a name="/definitions/surchargeTypeEnum"></a>
### surchargeTypeEnum

| surchargeType |
| ---- |
| Free |
| Per Day |
| Per Night |
| Per Week |
| Per Stay |
| Unknown |

Note: Surcharge type Unknown will be returned for any room where a surcharge cost has been specified without a type or an amount. The client is expected to add this information in such cases, and therefore, type Unknown is not supported in POST, PUT and PATCH operations.

<a name="/definitions/valueAddInclusionsEnum"></a>
### valueAddInclusionsEnum
There are 2 possible enums. One applies to all rate plans of type Standalone and Package, the other to rate plans of type Corporate.

| valueAddInclusions for Standalone and Package rate plans |
| -------------------------------------------------------- |
| Free Breakfast |
| Continental Breakfast |
| Continental Breakfast for 2 |
| Breakfast Buffet  |
| Full Breakfast |
| English Breakfast |
| Breakfast for 1 |
| Breakfast for 2 |
| Free Internet |
| Free Wireless Internet |
| Free High-Speed Internet |
| Free Parking |
| Free welcome drink |
| Drinks and hors doeuvres |
| All Meals |
| Half Board |
| Full Board |
| Free Lunch |
| Free Dinner |
| All-Inclusive |
| Food/Beverage Credit |
| Free Airport Parking |
| Free Valet Parking |
| Free Airport Shuttle  |
| Free Room Upgrade |
| Resort Credit Included  |
| Welcome Gift Upon Arrival |
| Spa Credit  |
| Golf Credit  |
| VIP Line Access to Nightclub(s) |
| 2-for-1 Buffet |
| Free Ski Lift Ticket & Rental |
| Full Kitchen |
| Complimentary green fees |
| Free one-way airport transfer |
| Free return airport transfer |
| Free water park passes |
| 2 Game Drives per night |
| 1 Game Drive per night |
| Early Check-in |
| Late Check-out |
| Free massage included |
| Free minibar |
| Ski pass included |
| Disney Park tickets |
| Spa access |
| Slot Play |
| Casino Credit |
| Match Play |

| valueAddInclusions for Corporate rate plans |
| ------------------------------------------- |
| Same-Day Cancellation |
| Eligibility for Hotel Loy Points |
| Free High-Speed Internet  |
| Free Breakfast |
| Continental Breakfast |
| Full Breakfast |
| Breakfast Buffet |
| Free Fitness Center Access |
| Free Business Center Access |
| Free Airport Shuttle |
| Free Hotel Parking |
| Free Valet Parking |
| Welcome Drink Upon Arrival |
| Free Local Calls |
| Complimentary Wine Reception |
| Free Wireless Internet  |
| Free Local Shuttle |
| Free Local Newspaper |
| Includes One Free In-Room Movie |
| Room Upgrade Upon Availability |
| Guaranteed Room Upgrade |
| Early Check-In Privilege |
| Late Check-Out Privilege |
| Free Bottled Water |
| City Tax Included |
| Free Train Shuttle |
| Free Breakfast for 1 Adult |
| Upgrade to Club Floor |
| Upgrade to Business Floor |
| Complimentary Minibar Items |
| Free Dinner |
| Free Dinner for 1 Adult |
| Full Kitchen |
| Incl. 1000 CP Reward Pts. |
| Incl. 500 CP Reward Pts. |
| Incl. 5000 CP Reward Pts. |
| Incl. 4000 CP Reward Pts. |
| Evening Manager's Reception |
| Egencia Exclusive Rate |
| Food-and-Beverage Discount |


<a name="/definitions/perStayFeeEnum"></a>
### perStayFeeEnum

| perStayFee |
| ------------------ |
| None |
| 1stNightRoomAndTax |
| 2NightsRoomAndTax |
| 10PercentCostOfStay |
| 20PercentCostOfStay |
| 30PercentCostOfStay |
| 40PercentCostOfStay |
| 50PercentCostOfStay |
| 60PercentCostOfStay |
| 70PercentCostOfStay |
| 80PercentCostOfStay |
| 90PercentCostOfStay |
| FullCostOfStay |


<a name="/definitions/adjustmentTypeEnum"></a>
### adjustmentTypeEnum
| Adjustment Type |
| -------------- |
| Percentage |
| Amount |


<a name="/definitions/amenityCodes"></a>
### amenityCodes, detailCodes and Values
The amenity codes/detail codes and values have been split into sub sections with names to faciliate discovery and understanding.

#### Internet Access

Code | DetailCodes Permitted | DetailCodes Required? | Values Required | Notes 
---- | --------------------- | --------------------- | --------------- | -----
ROOM_WIRED_INTERNET | FREE, SURCHARGE | Yes | - | The actual surcharge amount cannot be room-specific. In order to define the surcharge, please use Expedia PartnerCentral.
ROOM_WIFI_INTERNET | FREE, SURCHARGE | Yes | - | The actual surcharge amount cannot be room-specific. In order to define the surcharge, please use Expedia PartnerCentral.

#### Bathroom

Code | DetailCodes Permitted |  | Values Required | Notes 
---- | --------------------- | --------------------- | --------------- | -----
ROOM_BATHROOM_TYPE | PRIVATE_BATHROOM , PRIVATE_BATHROOM_NOT_IN_ROOM, SHARED_BATHROOM, SHARED_BATHROOM_SINK_IN_ROOM, PARTIALLY_OPEN_BATHROOM | Yes | - | 
ROOM_FREE_TOILETRIES |  | - | - | 
ROOM_SHOWER_TYPE | SHOWER_ONLY, BATHTUB_ONLY, BATHTUB_OR_SHOWER, SEPARATE_BATHTUB_AND_SHOWER, SHOWER_AND_BATHTUB_COMBO | Yes | - | 
ROOM_BATHTUB_TYPE | DEEP_SOAKING, JETTED, SPRING_WATER | Yes | - | 
ROOM_SECOND_BATHROOM | - | - | - | 
ROOM_BATHROBES | - | - | - | 
ROOM_BIDET | - | - | - | 
ROOM_DESIGNER_TOILETRIES | - | - | - | 
ROOM_HYDROMASSAGE_SHOWERHEAD | - | - | - | 
ROOM_RAINFALL_SHOWERHEAD | - | - | - | 
ROOM_SLIPPERS | - | - | - | 
ROOM_HAIR_DRYER | IN_ROOM, ON_REQUEST | Yes | - | 

#### Food-related 

Code | DetailCodes Permitted | DetailCodes Required? | Values Required | Notes 
---- | --------------------- | --------------------- | --------------- | -----
ROOM_COFFEE_TEA | COFFEE_AND_TEA_MAKER, ESPRESSO_MAKER | Yes | - | 
ROOM_FREE_BOTTLED_WATER | - | 0 | - | 
ROOM_KITCHEN | KITCHEN, KITCHENETTE, SHARED_KITCHEN | Yes | - | 
ROOM_MICROWAVE | IN_ROOM, ON_REQUEST | Yes | - | 
ROOM_REFRIGERATOR | IN_ROOM, FULL_ SIZE_IN_ROOM, ON_REQUEST | Yes | - | 
ROOM_MINIBAR | STOCKED_WITH_FREE_ITEMS, STOCKED_WITH_SOME_FREE_ITEMS, STOCKED_NO_FREE_ITEMS | Yes | - | 
ROOM_DISHWARE | - | - | - | 
ROOM_DISHWASHER | - | - | - | 
ROOM_STOVETOP |  | - | - | 

#### Entertainment

Code | DetailCodes Permitted | DetailCodes Required? | Values Required | Notes 
---- | --------------------- | --------------------- | --------------- | -----
ROOM_TV_SERVICE | CABLE, SATELLITE, DIGITAL | Yes | - | 
ROOM_PREMIUM_TV_CHANNELS | - | - | - | 
ROOM_PAY_MOVIES | - | - | - | 
ROOM_TV | LCD, LED, PLASMA, FLAT_PANEL, GENERIC | Yes | - | 
ROOM_TV_SIZE | SIZE_INCH, SIZE_CM | Yes | Integer between 1 and 1000 inclusively. | When specifying this amenity, the actual size needs to be provided as the value of the amenity. The unit of measure is defined by the detailCode.
ROOM_DVD_PLAYER | - | - | - | 
ROOM_FIRST_RUN_MOVIES | - | - | - | 
ROOM_VIDEO_GAME | - | - | - | 
ROOM_ELECTRONIC_DEVICE | COMPUTER, TABLET, IPAD | Yes | - | 
ROOM_IPOD_DOCK | - | - | - | 
ROOM_MP3_PLAYER_DOCK | - | - | - | 

#### Bedding and Linens

Code | DetailCodes Permitted | DetailCodes Required? | Values Required | Notes 
---- | --------------------- | --------------------- | --------------- | -----
ROOM_PREMIUM_LINENS | EGYPTIAN_COTTON_SHEETS , FRETTE_ITALIAN_SHEETS | Yes | - | 
ROOM_HYPO_BED_AVAIL | - | - | - | 
ROOM_PREMIUM_MATTRESS | MEMORY_FOAM, PILLOW_TOP, SLEEP_NUMBER, TEMPURPEDIC | Yes | - | 
ROOM_DOWN_COMFORTER | - | - | - | 
ROOM_PILLOW_MENU | - | - | - | 
ROOM_PREMIUM_BEDDING | - | - | - | 
ROOM_LINENS_PROVIDED | - | - | - |

#### Room Layout 

Code | DetailCodes Permitted | DetailCodes Required? | Values Required | Notes 
---- | --------------------- | --------------------- | --------------- | -----
ROOM_NUMBER_OF_SEPARATE_BEDROOMS | - | - | Integer between 1 and 10 inclusively. | 
ROOM_DINING_AREA | - | - | - | 
ROOM_LIVING_ROOM | - | - | - | 
ROOM_SITTING_AREA | - | - | - | 
ROOM_BALCONY | FURNISHED_BALCONY, FURNISHED_BALCONY_OR_PATIO, FURNISHED_LANAI, FURNISHED_PATIO, BALCONY, BALCONY_OR_PATIO, LANAI, PATIO | Yes | - | 
ROOM_PRIVATE_POOL | - | - | - | 
ROOM_PRIVATE_PLUNGE_POOL | - | - | - | 
ROOM_PRIVATE_SPA | - | - | - | 
ROOM_EXT_ACCESS | - | - | - | 
ROOM_CONNECTED_ROOMS | - | - | - | 
ROOM_SOUND_ISOLATION | SOUNDPROOFED, NOISE_DISCLAIMER | Yes | - | 
ROOM_YARD | - | - | - | 
ROOM_NO_WINDOWS | - | - | - | 

#### Services

Code | DetailCodes Permitted | DetailCodes Required? | Values Required | Notes 
---- | --------------------- | --------------------- | --------------- | -----
ROOM_HOUSEKEEPING | DAILY , LIMITED, ONCE_PER_STAY, WEEKENDS_ONLY, WEEKDAYS_ONLY, WEEKLY | Yes | - | 
ROOM_NEWSPAPER_FREE | DAILY , WEEKDAY | Yes | - | 
ROOM_CHILDCARE | - | - | - | 
ROOM_MASSAGE | - | - | - | 
ROOM_TURNDOWN | - | - | - | 

#### Room Features

Code | DetailCodes Permitted | DetailCodes Required? | Values Required | Notes 
---- | --------------------- | --------------------- | --------------- | -----
ROOM_AIR_CONDITIONING | - | - | - | 
ROOM_CLIMATE_CONTROL | - | - | - | 
ROOM_CEILING_FAN | - | - | - | 
ROOM_DESK | - | - | - | 
ROOM_IRON | IN_ROOM, ON_REQUEST | Yes | - | 
ROOM_SAFE | STANDARD_SIZE, LAPTOP_COMPATIBLE, SURCHARGE | Yes | - | 
ROOM_FIREPLACE | - | - | - | 
ROOM_BLACKOUT_DRAPES | - | - | - | 
ROOM_DECOR | - | - | - | 
ROOM_FURNISHING | - | - | - | 
ROOM_SHARED_ACCOMODATIONS | - | - | - | 
ROOM_WASHER | - | - | - | 
ROOM_FREE_LOCAL_CALLS | - | - | - | 
ROOM_FREE_LONG_DISTANCE_CALLS | - | - | - | 
ROOM_FREE_INTERNATIONAL_CALLS | - | - | - | 
ROOM_PLAYPEN | - | - | - | 
ROOM_PHONE | - | - | - | 
ROOM_RECENT_RENOVATION_MONTH | - | - | Integer between 1 and 12. | 
ROOM_RECENT_RENOVATION_YEAR | - | - | Integer between 2000 and current year. | 
ROOM_LIMITED_FACILITY_ACCESS | - | - | - | 
ROOM_RUN_OF_HOUSE | - | - | - | 
ROOM_PET_FRIENDLY | - | - | - | 

#### Club/Executive Level

Code | DetailCodes Permitted | DetailCodes Required? | Values Required | Notes 
---- | --------------------- | --------------------- | --------------- | -----
ROOM_CLUB_EXEC_LEVEL | CLUB_LEVEL, EXEC_LEVEL | Yes | - | 
ROOM_CLUB_EXEC_LOUNGE_ACCESS | CLUB_LOUNGE, EXEC_LOUNGE | Yes | - | 
ROOM_CLUB_EXEC_MEET_ROOM | - | - | - | 
ROOM_CLUB_EXEC_MEET_ROOM_TIME_LIMIT_HOURS | - | - | Integer between 1 and 24. | 
ROOM_CLUB_EXEC_BREAKFAST | BREAKFAST_BUFFET, BREAKFAST_CONTINENTAL, BREAKFAST_COOKED, BREAKFAST_ENGLISH, BREAKFAST_FULL | Yes | - | 
ROOM_CLUB_EXEC_REFRESHMENTS | - | - | - | 
ROOM_CLUB_EXEC_LOUNGE_INTERNET | - | - | - | 
ROOM_CLUB_EXEC_LUNCH | - | - | - | 
ROOM_CLUB_EXEC_SEPARATE_CHECKIN | - | - | - | 
ROOM_CLUB_EXEC_DINNER | - | - | - | 
