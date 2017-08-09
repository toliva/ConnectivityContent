# API Definition
The Deposit API enables Expedia partners to set, update or remove a property's deposit policy.

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
- **Secure HTTP w/TLS v1.1+** : The API is only available via HTTPS, and supports GET (read), PUT (update) and DELETE (delete) operations. Our API will not accept connections using SSL or TLS v1.0 protocol. We will only establish connections with TLS v1.1+ protocols.
- **REST** : The service adheres to REST principles and exposes only one resource: Deposit.
- **MUST-IGNORE** : The service is constantly evolving and we expect consumers of our service to enforce a must-ignore policy. If the Deposit API starts returning additional data elements in responses, partners should ignore the data elements they do not need. 
- **Entity** : All successful responses returned by EPS services are encapsulated within an HTTP Entity. Entity is used as a way to make successful responses generic across different resources and operations. The Entity element may represent a single object, or multiple objects; if the latter, it would be an array. 
- **Errors** : If a request produces one or more errors, the response will return an array of one or more errors. If Errors are present, Entity will not be present.

## Resources & Endpoints Overview
* All of Expedia APIs now live under the https://services.expediapartnercentral.com/ domain. API  users should make sure to only ever use the fully qualified domain name in their requests to our APIs, and never try to guess/hardcode the IP this address resolves to. In order to provide a robust, highly available and scalable solution, Expedia can change the IPs being used without notice.

| Resource | Supported Operations | Production Endpoint |
| -------- | -------------------- | ------------------- | ---------- |
| Deposit | Read the deposit policy (GET) belonging to a property | GET https://services.expediapartnercentral.com/properties/{ExpediaPropertyId}/depositPolicy |
| Deposit | Create/update the deposit policy (PUT) | PUT https://services.expediapartnercentral.com/properties/{ExpediaPropertyId}/depositPolicy |
| Deposit | Delete the deposit policy (DELETE) | DELETE https://services.expediapartnercentral.com/properties/{ExpediaPropertyId}/depositPolicy |


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
Entities can be DepositPolicy, ratePlan/RoomType/Property/Images/Amenities etc.
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
- To get a specific resource, e.g. a single deposit policy: /properties/{propertyId}/depositPolicy}
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

## Deposit

Please note that a swagger JSON file can be obtained on this portal to facilitate development:
<https://services.expediapartnercentral.com/properties/depositPolicy/swagger.json>

### Obtain the deposit policy for a given property
- Method: `GET`
- Url: https://services.expediapartnercentral.com/properties/{propertyId}/depositPolicy
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
propertyId | path | Expedia Property ID | true | string | 

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [SuccessfulGetResponse](#/definitions/SuccessfulGetResponse)

**Example**
```
{
  "entity":[
    {
      "resourceId": "6d266700-f59c-4f61-be81-fd43e4da9d4e",
      "publishedImageUrl": "https://images.trvl-media.com/hotels/13000000/12940000/12933900/12933870/6d266700_b.jpg",
      "status": "Active",
      "state": "Published",
      "categoryCode": "SUNDECK",
      "propertyFeatured": true,
      "lastUpdateDateTime": "2016-08-19 15:29:00.000 GMT",
      "originalImageUrl": "https://some_url_that_expedia_whitelisted_for_our_partner.com/highresimage.jpg"
    }
  ]
}
```

### Add an image to the property
- Method: `POST`
- Url: https://services.expediapartnercentral.com/properties/{propertyId}/images
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
propertyId | path | Expedia Property ID | true | string | 
image | body | JSON message describing the new image | true | [Image](#/definitions/Image) | 

**Example**
```
{
  "originalImageUrl": "https://some_url_that_expedia_whitelisted_for_our_partner.com/highresimage.jpg",
  "categoryCode": "HOTEL_FRONT",
  "propertyFeatured": true,
  "roomTypes": [
    {
      "resourceId": 12345,
      "roomTypeFeatured": false
    }
  ]

}
```

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [ResponseWrapperImage](#/definitions/ResponseWrapperImage)

### Modify an existing image

Expedia only offers a single way to modify an image at the moment. Using the PATCH verb, partners can perform a partial update (merge-patch) of an image, as described in [IETF RFC](https://tools.ietf.org/html/rfc7396).

This method allows partners to update an image by providing only the fields/values they need to change. This saves partners from having to first read the image before updating it.

The response will always be the complete image of the rate plan after changes have been applied.

**Important**

The PATCH logic only applies to first (top) level elements/objects of the [image](#/definitions/Image). Partners can decide to include any number of these top level elements/objects, and any elements/objects not included will be ignored/untouched.  If a partner includes any array or complex object (such as room types or comments), these objects will need to be fully specified with all the desired elements/attributes/object changes, as they are treated as full overlay.

First-level elements/objects not provided in the input will remain unchanged. Some top-level elements can be removed. To do so, you have to explicitly specify it in the JSON message, as null. For array types, you need to provide a "null" or empty array value.

Also note that all validation rules are applied on the complete updated image data.

- Method: `PATCH`
- Url: https://services.expediapartnercentral.com/properties/{propertyId}/images/{resourceId}
- Consumes: `application/json`
- Produces: `application/json`

**Examples**

Updating both the status and the category:
```
{
	"status": "Inactive",
	"categoryCode": "INTERIOR_ENTRANCE"
}
```

Updating only the status:
```
{
	"status": "Inactive"
}
```

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type
--------- | -------------- | ----------- | -------- | ---------
Authorization | header | Authorization token in http header. Format: Authorization: Basic [username:password encoded by Base64] | Yes | Base64 encoded auth token
propertyId | path | Expedia Property ID | true | string | 
resourceId | path | Image Resource ID. | true | string | 
body | body | JSON message of partially updated room type | Yes | [Image](#/definitions/Image)

### Delete an existing image

It is important for partners to know images can only be deleted before they reach the Published state.

- Method: `DELETE`
- Url: https://services.expediapartnercentral.com/properties/{propertyId}/images/{resourceId}
- Consumes: `application/json`
- Produces: `*/*`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
propertyId | path | Expedia Property ID | true | string | 
resourceId | path | Image Resource ID. The DELETE only works on images that haven't reached the "Published" state. Once it reached "Published", it can't be deleted anymore, only inactivated. | true | string | 

### Read a single image
- Method: `GET`
- Url: https://services.expediapartnercentral.com/properties/{propertyId}/images/{resourceId}
- Consumes: `application/json`
- Produces: `application/json`

**Example**
```
{
  "entity": {
    "resourceId": "6d266700-f59c-4f61-be81-fd43e4da9d4e",
    "publishedImageUrl": "https://images.trvl-media.com/hotels/13000000/12940000/12933900/12933870/6d266700_b.jpg",
    "status": "Active",
    "state": "Published",
    "categoryCode": "SUNDECK",
    "propertyFeatured": true,
    "lastUpdateDateTime": "2016-08-19 15:29:00.000 GMT",
    "originalImageUrl": "https://some_url_that_expedia_whitelisted_for_our_partner.com/highresimage.jpg"
  }
}
```

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
propertyId | path | Expedia Property ID | true | string | 
resourceId | path | Image Resource ID | true | string | 

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [ResponseWrapperImage](#/definitions/ResponseWrapperImage)

---

## Definitions
- <a name="/definitions/ResponseWrapperImage"></a>ResponseWrapperImage

Property Name | Type | Description
------------- | ---- | -----------
entity | [Image](#/definitions/Image) | 
errors | Array[[ApiError](#/definitions/ApiError)] | 

- <a name="/definitions/ImageList"></a>ImageList

Property Name | Type | Description
------------- | ---- | -----------
images | Array[[Image](#/definitions/Image)] | 


- <a name="/definitions/Image"></a>Image

Property Name | Type | Required/Optional In Create | Description
------------- | ---- | --------------------------- | -----------
categoryCode | [categoryCodeEnum](#/definitions/categoryCodeEnum) | Optional. Expedia will assign a category if not provided. | Image category code. 
comments | Array[[Comment](#/definitions/Comment)] | Cannot be provided in Create. | Comments associated with this image, used by Expedia when images are rejected or inactivated.
lastUpdateDateTime | DateTime string | Cannot be provided in Create. | Last date and time this image was updated
originalImageUrl | URL string | Required | URL of the image to be uploaded. Supported image types are: JPEG, GIF, PNG and Bitmap.
propertyFeatured | boolean | Optional, defaults to False if not provided. | Determines whether or not the image should be the featured image in search results
publishedImageUrl | URL string | Cannot be provided in Create. | The URL of one of the derivatives Expedia created with the image that was provided.
resourceId | string | Cannot be provided in Create. | Expedia ID for this resource. Generated by Expedia at time of create.
roomTypes | Array[[RoomType](#/definitions/RoomType)] | Optional. If not provided, no room will be associated to this image. | Rooms associated with this image. There can be one or more rooms assigned to the same image.
state | string | Cannot be provided in  Create. | Current processing state of the image. Possible value are: NotFound, Received,DerivativesCreated,Rejected,Duplicate,Published.
status | string | Optional. If not provided, defaults to Active. | Status of the image; Possible values are: 'Active' (image displayed), 'Inactive' (image not displayed)

- <a name="/definitions/RoomType"></a>RoomType

Property Name | Type | Required/Optional In Create | Description
------------- | ---- | --------------------------- | -----------
resourceId | integer | Required if room type object specified in create. | Expedia Resource ID for room type resource. Please refer to [Product API Room Type Resource](/apis/product-management/product-api/reference.html#room-type) to find out how to identify room type resource id.
roomTypeFeatured | boolean | Optional, defaults to false. | Used to pick the room image to be displayed when multiple are loaded for a given room type

- <a name="/definitions/Comment"></a>Comment

Property Name | Type | Description
------------- | ---- | -----------
text | string | Comment text
timestamp | string | Moment when the comment was created

- <a name="/definitions/ResponseWrapperImageList"></a>ResponseWrapperImageList

Property Name | Type | Description
------------- | ---- | -----------
entity | [ImageList](#/definitions/ImageList) | 
errors | Array[[ApiError](#/definitions/ApiError)] | 

- <a name="/definitions/ApiError"></a>ApiError

Property Name | Type | Description
------------- | ---- | -----------
code | integer | 
message | string | 


## Enumerations & Domain Values

<a name="/definitions/categoryCodeEnum"></a>
### Category Codes
| Group | categoryCodeEnum Value |
| ----- | ------------- |
|Bar (hotel area)|HOTEL_BAR|
||HOTEL_LOUNGE|
||NIGHTCLUB|
||POOLSIDE_BAR|
||SPORTS_BAR|
|Dining (hotel area)|BREAKFAST_AREA|
||BUFFET|
||CAFE|
||COFFEE_SERVICE|
||COFFEE_SHOP|
||COUPLES_DINING|
||DELICATESSEN|
||DINING|
||FAMILY_DINING|
||FOOD_AND_DRINK|
||FOOD_COURT|
||RESTAURANT|
||SNACK_BAR|
|Exterior (hotel)|AIRPORT_SHUTTLE|
||BBQ_PICNIC_AREA|
||BEACH|
||CITY_SHUTTLE|
||COURTYARD|
||DOCK|
||EXTERIOR|
||EXTERIOR_DETAIL|
||EXTERIOR_HOTEL_TERRACE_PATIO|
||FOUNTAIN|
||GARDEN|
||GAZEBO|
||HOTEL_ENTRANCE|
||HOTEL_FRONT|
||HOTEL_FRONT_EVENING_NIGHT|
||LAKE|
||MARINA|
||OUTDOOR_BANQUET_AREA|
||OUTDOOR_DINING|
||OUTDOOR_WEDDING_AREA|
||PARKING|
||PORCH|
||PROPERTY_GROUNDS|
||SUNDECK|
|Fitness|AEROBICS_FACILITY|
||EXERCISE_LAP_POOL|
||FITNESS_FACILITY|
||FITNESS_STUDIO|
||GYM|
||PILATES|
||ROCK_CLIMBING_WALL_INDOOR|
||YOGA|
|Guestroom|BALCONY|
||BATHROOM|
||BATHROOM_AMENITIES|
||BATHROOM_SHOWER|
||BATHROOM_SINK|
||CHILDRENS_THEME_ROOM|
||DEEP_SOAKING_BATHTUB|
||GUESTROOM|
||GUESTROOM_TERRACE_PATIO|
||GUESTROOM_VIEW|
||IN_ROOM_AMENITY|
||IN_ROOM_BUSINESS_CENTER|
||IN_ROOM_COFFEE|
||IN_ROOM_DINING|
||IN_ROOM_KITCHEN|
||IN_ROOM_KITCHENETTE|
||IN_ROOM_SAFE|
||JETTED_TUB|
||LIVING_AREA|
||LIVING_ROOM|
||MICROWAVE|
||MINIBAR|
||MINI_REFRIGERATOR|
||ROOM_SERVICE_DINING|
|Interior (hotel area)|BALLROOM|
||BANQUET_HALL|
||BUSINESS_CENTER|
||CHAPEL|
||EXECUTIVE_LOUNGE|
||FIREPLACE|
||HALLWAY|
||HOTEL_INTERIOR|
||INDOOR_WEDDING|
||INTERIOR_DETAIL|
||LIBRARY|
||MEETING_FACILITY|
||RECEPTION_HALL|
||STAIRCASE|
|Lobby|CHECK_IN_CHECK_OUT_KIOSK|
||CONCIERGE_DESK|
||INTERIOR_ENTRANCE|
||LOBBY|
||LOBBY_LOUNGE|
||LOBBY_SITTING_AREA|
||RECEPTION|
|Pool|AQUA_CENTER|
||CHILDRENS_POOL|
||INDOOR_OUTDOOR_POOL|
||INDOOR_POOL|
||INDOOR_SPA_TUB|
||INFINITY_POOL|
||NATURAL_POOL|
||OUTDOOR_POOL|
||OUTDOOR_SPA_TUB|
||POOL|
||POOL_WATERFALL|
||ROOFTOP_POOL|
||WATERSLIDE|
||WATER_PARK|
|Property Amenity|ARCADE|
||ATM_BANKING_ON_SITE|
||BILLIARDS|
||BIRTHDAY_PARTY_AREA|
||CASINO|
||CHILDRENS_ACTIVITIES|
||CHILDRENS_AREA|
||CHILDRENS_PLAY_AREA_INDOOR|
||CHILDRENS_PLAY_AREA_OUTDOOR|
||DAY_CARE|
||GAME_ROOM|
||GIFT_SHOP|
||KARAOKE_ROOM|
||LAUNDRY_ROOM|
||MISCELLANEOUS|
||PET_FRIENDLY|
||PROPERTY_AMENITY|
||RV_OR_TRUCK_PARKING|
||THEATER_SHOW|
||VENDING_MACHINE|
|Spa|FACIAL|
||HAIR_SALON|
||MASSAGE|
||NAIL_SALON|
||SAUNA|
||SPA|
||SPA_RECEPTION|
||SPA_TREATMENT|
||STEAM_ROOM|
||TREATMENT_ROOM|
||TURKISH_BATH|
||VICHY_SHOWER|
|Sports Facility|ARCHERY|
||BASKETBALL_COURT|
||BICYCLING|
||BOATING|
||EQUIPMENT_STORAGE|
||FISHING|
||GOLF|
||GOLF_CART|
||HIKING|
||HUNTING|
||INDOOR_GOLF_DRIVING_RANGE|
||MINI_GOLF|
||OUTDOOR_ROCK_CLIMBING|
||PRO_SHOP|
||ROPES_COURSE_TEAM_BUILDING|
||SKIING|
||SKI_HILL|
||SNOWBOARDING|
||SNOW_AND_SKI_SPORTS|
||SPORTS_FACILITY|
||SPORT_COURT|
||TENNIS_COURT|
|View (hotel)|AERIAL_VIEW|
||BALCONY_VIEW|
||BEACH_OCEAN_VIEW|
||CITY_VIEW|
||COURTYARD_VIEW|
||GARDEN_VIEW|
||LAKE_VIEW|
||MOUNTAIN_VIEW|
||STREET_VIEW|
||VIEW_FROM_HOTEL|

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
