# API Definition
The Image API enables our hotels partners to read, add, and edit Images for their properties.

<a name="authentication"></a>
## Authentication
Partner must include a valid username/password in the HTTP header of the request using the below format: 
```
Authorization: Basic <username and password encoded by Base64>
```
Example: 
```
Authorization: Basic RVFDdGVzdDEyOTMzODcwOndtNDdhaDky
```
Where "RVFDdGVzdDEyOTMzODcwOndtNDdhaDky" is the string "EQCtest12933870:wm47ah92" (username:password) Base64-encoded.

For more information about getting started for the first time, and authorization, please refer to the [FAQ & Guides section](guides.html#/howtogetstarted)

## API Principles & Standards

- **HTTP 1.1** : Our API only supports HTTP 1.1. Requests made with HTTP 1.0 explicitly will be denied.
- **JSON** : The service will return JSON documents for read, create, and update requests, and accept JSON payloads for create and update requests.
- **Secure HTTP w/TLS v1.1+** : The API is only available via HTTPS, and supports GET (read), POST (create), and PUT (update) operations. Our API will not accept connections using SSL or TLS v1.0 protocol. We will only establish connections with TLS v1.1+ protocols.
- **REST** : The service adheres to REST principles and exposes only one resource: Image
- **MUST-IGNORE** : The service is constantly evolving and we expect consumers of our service to enforce a must-ignore policy. If the Image API starts returning additional data elements in responses, partners should ignore the data elements they do not need. 
- **Entity** : All successful responses returned by EPS services are encapsulated within an HTTP Entity. Entity is used as a way to make successful responses generic across different resources and operations. The Entity element may represent a single object, or multiple objects; if the latter, it would be an array. 
- **Errors** : If a request produces one or more errors, the response will return an array of one or more errors. If Errors are present, Entity will not be present.

## Resources & Endpoints Overview
* All of Expedia APIs now live under the https://services.expediapartnercentral.com/ domain. API  users should make sure to only ever use the fully qualified domain name in their requests to our APIs, and never try to guess/hardcode the IP this address resolves to. In order to provide a robust, highly available and scalable solution, Expedia can change the IPs being used without notice.

| Resource | Supported Operations | Production Endpoint | Parameters |
| -------- | -------------------- | ------------------- | ---------- |
| Image | Read Multiple Images (GET) belonging to a property | GET https://services.expediapartnercentral.com/properties/{ExpediaPropertyId}/images | status=all (optional) If status is not provided, only active images are returned.  |
| Image | Read a single Image (GET) | GET https://services.expediapartnercentral.com/properties/[ExpediaPropertyId]/images/{ImageResourceId} | None |
| Image | Add a new Image (POST) | POST https://services.expediapartnercentral.com/properties/[ExpediaPropertyId]/images | None |
| Image | Delete an image that hasn't reached the PUBLISHED state (DELETE) | DELETE https://services.expediapartnercentral.com/properties/[ExpediaPropertyId]/images/{ImageResourceId} | None |


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
| 500 | Internal system error (shouldn’t be retried) |
| 503 | Internal system error (should be retried) |

## HTTP Headers
HTTP headers are slightly different between a request made to the EPS Product API, and responses returned.

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
The entities supported by the product API are rate plans, room types and properties.

The Entity approach allows partners to use the same wrapper for all resources exposed by the new generation of Expedia Partner Services like the EPS Product and EPS Promo services. 

Consider the following code in Java:
```Java
public class ResponseWrapperDTO<T> implements Serializable {
    private T entity;
    private List<ErrorDTO> errors;
}
```
Entities can be RatePlan/RoomType/Property/Images/Amenities etc.
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
- To get a specific resource, the resource ID needs to be specified on the URL. For example: /properties/{propertyId}/images/{ImageId}
- To get all the active resources in the system, omit the resource ID on the URL. For example: /properties/{propertyId}/images. 


For example, when requesting a single image, Image API will return the Image resource information as part of an Entity object:
```JSON
{
  "entity": {
    "resourceId": 1,
    ...
  }
}
```
When requesting all images for a property, an array of images is returned:
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
```Java
   ResponseEntity<ResponseWrapperDTO<RoomTypeDTO>> response = restTemplate.exchange(
            "url",
            HttpMethod.POST,
            entity,
            new ParameterizedTypeReference<ResponseWrapperDTO<RoomTypeDTO>>() {});
```

## Images

Please note that a swagger JSON file can be obtained on this portal to facilitate development:
<https://expediaconnectivity.com/files/image_swagger.json>

### Obtain a list of images for a given property
- Method: `GET`
- Url: https://services.expediapartnercentral.com/properties/{propertyId}/images
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
200 | OK | [ResponseWrapperImageList](#/definitions/ResponseWrapperImageList)

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

### Delete an existing image

It is important for partners to know images can only be deleted before they reach the PUBLISHED state.

- Method: `DELETE`
- Url: https://services.expediapartnercentral.com/properties/{propertyId}/images/{guid}
- Consumes: `application/json`
- Produces: `*/*`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
propertyId | path | Expedia Property ID | true | string | 
guid | path | Image ResourceId. The DELETE only works on images that haven't reached the "PUBLISHED" state. Once it reached "PUBLISHED", it can't be deleted anymore, only inactivated. | true | string | 

### Read a single image
- Method: `GET`
- Url: https://services.expediapartnercentral.com/properties/{propertyId}/images/{guid}
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
guid | path | Image GUID | true | string | 

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
originalImageUrl | URL string | Required | URL of the image to be uploaded
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
| Lobby | INTERIOR\_ENTRANCE |
| |LOBBY |
| |RECEPTION |
| |LOBBY\_SITTING\_AREA |
| |CONCIERGE\_DESK |
| |CHECK\-IN/CHECK\-OUT\_KIOSK |
| |LOBBY\_LOUNGE |
| Guestroom | MINIBAR |
| |IN\-ROOM\_COFFEE |
| |IN\-ROOM\_BUSINESS\_CENTER |
| |GUESTROOM |
| |CHILDRENS\_THEME\_ROOM |
| |IN\-ROOM\_DINING |
| |IN\-ROOM\_KITCHEN |
| |ROOM\_SERVICE\_\-\_DINING |
| |IN\-ROOM\_KITCHENETTE |
| |LIVING\_AREA |
| |LIVING\_ROOM |
| |TERRACE/PATIO |
| |BATHROOM |
| |BALCONY |
| |JETTED\_TUB |
| |IN\-ROOM\_AMENITY |
| |DEEP\_SOAKING\_BATHTUB |
| |MINI\-REFRIGERATOR |
| |BATHROOM\_SINK |
| |MICROWAVE |
| |BATHROOM\_SHOWER |
| |IN\-ROOM\_SAFE |
| |BATHROOM\_AMENITIES |
| |GUESTROOM\_VIEW |
| Pool | POOL |
| |CHILDRENS\_POOL |
| |INDOOR\_POOL |
| |OUTDOOR\_POOL |
| |NATURAL\_POOL |
| |INFINITY\_POOL |
| |WATER\_PARK |
| |AQUA\_CENTER |
| |WATERSLIDE |
| |OUTDOOR\_SPA\_TUB |
| |INDOOR\_SPA\_TUB |
| |INDOOR/OUTDOOR\_POOL |
| |POOL\_WATERFALL |
| |ROOFTOP\_POOL |
| Fitness | YOGA |
| |PILATES |
| |FITNESS\_FACILITY |
| |GYM |
| |AEROBICS\_FACILITY |
| |FITNESS\_STUDIO |
| |ROCK\_CLIMBING\_WALL\_\-\_INDOOR |
| |EXERCISE/LAP\_POOL |
| Spa | TREATMENT\_ROOM |
| |MASSAGE |
| |SPA\_TREATMENT |
| |FACIAL |
| |SPA |
| |HAIR\_SALON |
| |NAIL\_SALON |
| |VICHY\_SHOWER |
| |SAUNA |
| |STEAM\_ROOM |
| |TURKISH\_BATH |
| |SPA\_RECEPTION |
| Sports Facility | SPORTS\_FACILITY |
| |BOATING |
| |BICYCLING |
| |TENNIS\_COURT |
| |BASKETBALL\_COURT |
| |SPORT\_COURT |
| |FISHING |
| |HUNTING |
| |GOLF |
| |ARCHERY |
| |MINI\-GOLF |
| |HIKING |
| |GOLF\_CART |
| |OUTDOOR\_ROCK\_CLIMBING |
| |INDOOR\_GOLF\_DRIVING\_RANGE |
| |ROPES\_COURSE\_(TEAM\_BUILDING) |
| |PRO\_SHOP |
| |SNOW\_AND\_SKI\_SPORTS |
| |SKI\_HILL |
| |SKIING |
| |SNOWBOARDING |
| |EQUIPMENT\_STORAGE |
| Property Amenity | CHILDRENS\_AREA |
| |VENDING\_MACHINE |
| |LAUNDRY\_ROOM |
| |CHILDRENS\_PLAY\_AREA\_\-\_INDOOR |
| |ATM/BANKING\_ON\_SITE |
| |DAY\_CARE |
| |RV\_OR\_TRUCK\_PARKING |
| |BIRTHDAY\_PARTY\_AREA |
| |MISCELLANEOUS |
| |CHILDRENS\_PLAY\_AREA\_\-\_OUTDOOR |
| |PET\-FRIENDLY |
| |CHILDRENS\_ACTIVITIES |
| |CASINO |
| |PROPERTY\_AMENITY |
| |GAME\_ROOM |
| |THEATER\_SHOW |
| |KARAOKE\_ROOM |
| |ARCADE |
| |GIFT\_SHOP |
| |BILLIARDS |
| Dining (hotel area) | FOOD\_COURT |
| |SNACK\_BAR |
| |FAMILY\_DINING |
| |COUPLES\_DINING |
| |FOOD\_AND\_DRINK |
| |BREAKFAST\_AREA |
| |DINING |
| |RESTAURANT |
| |COFFEE\_SERVICE |
| |DELICATESSEN |
| |BUFFET |
| |COFFEE\_SHOP |
| |CAFE |
| Bar (hotel area) | HOTEL\_LOUNGE |
| |HOTEL\_BAR |
| |POOLSIDE\_BAR |
| |SPORTS\_BAR |
| |NIGHTCLUB |
| Interior (hotel area) | MEETING\_FACILITY |
| |STAIRCASE |
| |INTERIOR\_DETAIL |
| |BUSINESS\_CENTER |
| |EXECUTIVE\_LOUNGE |
| |FIREPLACE |
| |LIBRARY |
| |HOTEL\_INTERIOR |
| |BANQUET\_HALL |
| |BALLROOM |
| |CHAPEL |
| |RECEPTION\_HALL |
| |HALLWAY |
| |INDOOR\_WEDDING |
| Exterior (hotel) | PORCH |
| |TERRACE/PATIO |
| |OUTDOOR\_WEDDING\_AREA |
| |GAZEBO |
| |SUNDECK |
| |OUTDOOR\_BANQUET\_AREA |
| |FOUNTAIN |
| |MARINA |
| |LAKE |
| |BBQ/PICNIC\_AREA |
| |DOCK |
| |AIRPORT\_SHUTTLE |
| |PARKING |
| |EXTERIOR\_DETAIL |
| |CITY\_SHUTTLE |
| |EXTERIOR |
| |HOTEL\_FRONT |
| |PROPERTY\_GROUNDS |
| |HOTEL\_FRONT\_\-\_EVENING/NIGHT |
| |HOTEL\_ENTRANCE |
| |GARDEN |
| |BEACH |
| |OUTDOOR\_DINING |
| |COURTYARD |
| View (hotel) | AERIAL\_VIEW |
| |BEACH/OCEAN\_VIEW |
| |LAKE\_VIEW |
| |VIEW\_FROM\_HOTEL |
| |BALCONY\_VIEW |
| |MOUNTAIN\_VIEW |
| |CITY\_VIEW |
| |STREET\_VIEW |
| |COURTYARD\_VIEW |
| |GARDEN\_VIEW |

<a name="/definitions/ErrorCodes"></a>
### Error Codes
| HTTP Status Code | Error Code | Error Description | Explanation and Recommended Action |
| ---------------- | ---------- | ----------------- | ---------------------------------- |
| 400 | 2002 | Bad Request | There is a problem with the submitted payload. Please make sure it's a valid JSON message. |
| 400 | 2003 | Bad Request | The property or element "[element]" is or contains invalid/unrecognizable data. |
| 400 | 2420 | Bad Request | Element [element] has to be a valid date formatted as YYYY-MM-DD. |
| 400 | 2421 | Bad Request | Element [element] has to be an integer. |
| 400 | 2422 | Bad Request | Element [element] has to be a double. |
| 400 | 2423 | Bad Request | Invalid boolean value for element [element], has to be true or false. |
| 400 | 2424 | Bad Request | Invalid value '[value]' for the element '[element]'. |
| 400 | 2425 | Bad Request | Element [element] has to be a long. |
| 400 | 2426 | Bad Request | Invalid value for element '[element]'. |
| 400 | 2427 | Bad Request | Element [element] has to be a valid date/time formatted as yyyy-MM-dd HH:mm:ss.SSS z (e.g. 2016-01-01 08:00:00.000 America/Montreal). |
| 400 | 3203 | Bad Request | Room type ID not found [[roomTypeId]]. You specified a room type ID that does not exist for this property. |
| 400 | 3800 | Bad Request | Element "[element]" cannot be provided in the request for this operation. |
| 400 | 3801 | Bad Request | Element "[element]" is missing. |
| 400 | 3802 | Bad Request | [Media Service API validation error] |
| 400 | 3804 | Bad Request | We couldn't access the file at location [location]. If this is the first time you use this API, please contact Expedia to insure Expedia is configured to access this location. |
| 400 | 3805 | Bad Request | Invalid category code provided. |
| 403 | 1000 | Forbidden | You are not authorized to view this resource. |
| 404 | 2404 | Not Found | Resource not found: the server has not found anything matching the Request-URI. |
| 500 | 4100 | Internal Server Error | Internal System Error. Do not retry this request. Our support team was notified of the problem. |
| 500 | 4101 | Internal Server Error | Internal System Error. Do not retry this request. Our support team was notified of the problem. |
| 503 | 4000 | Service Unavailable | Internal system error, please try again in a few minutes. |

