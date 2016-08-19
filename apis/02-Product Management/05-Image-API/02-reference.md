# API Definition
The Image API enables our hotels partners to add and edit Images for their properties.

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
- **REST** : The service adheres to REST principles and exposes three resources: Rate Plans, Room Types, and Properties.
- **MUST-IGNORE** : The service is constantly evolving and we expect consumers of our service to enforce a must-ignore policy. If the Product API starts returning additional data elements in responses, partners should ignore the data elements they do not need. Partners should also be able to serve the additional data back in an update request, as our update requests are full overlay, and failure to provide additional data back in update requests could cause data to be removed.
- **Entity** : All successful responses returned by EPS services are encapsulated within an HTTP Entity. Entity is used as a way to make successful responses generic across different resources and operations. The Entity element may represent a single object, or multiple objects; if the latter, it would be an array. 
- **Errors** : If a request produces one or more errors, the response will return an array of one or more errors. If Errors are present, Entity will not be present.

## Resources & Endpoints Overview
* All of Expedia APIs now live under the https://services.expediapartnercentral.com/ domain. API  users should make sure to only ever use the fully qualified domain name in their requests to our APIs, and never try to guess/hardcode the IP this address resolves to. In order to provide a robust, highly available and scalable solution, Expedia can change the IPs being used without notice.

| Resource | Supported Operations | Production Endpoint | Parameters |
| -------- | -------------------- | ------------------- | ---------- |
| Image | Read Multiple Images (GET) belonging to a property | GET https://services.expediapartnercentral.com/properties/{ExpediaPropertyId}/images | status=all (optional) If status is not provided, only active images are returned.  |
| Image | Read a single Image (GET) | GET https://services.expediapartnercentral.com/properties/[ExpediaPropertyId]/images/{ImageResourceId} | None |
| Image | Add a new Image (POST) | POST https://services.expediapartnercentral.com/properties/[ExpediaPropertyId]/images | None |
| Image | Update an Image's meta data (PATCH) | PATCH https://services.expediapartnercentral.com/properties/[ExpediaPropertyId]/images/{ImageResourceId} | None |
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

### Adds an image to the property
- Method: `POST`
- Url: https://services.expediapartnercentral.com/properties/{propertyId}/images
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
propertyId | path | Expedia Property ID | true | string | 
image | body | JSON message describing the new image | true | [Image](#/definitions/Image) | 

**Examples**
```
{
  "categoryCode": "string",
  "comments": [
    {
      "text": "string",
      "timestamp": "string"
    }
  ],
  "lastUpdateDateTime": "string",
  "originalImageUrl": "string",
  "propertyFeatured": false,
  "publishedImageUrl": "string",
  "resourceId": "string",
  "roomTypes": [
    {
      "resourceId": 0,
      "roomTypeFeatured": false
    }
  ],
  "state": "NOT_FOUND",
  "status": "Active"
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

- <a name="/definitions/RoomType"></a>RoomType

Property Name | Type | Description
------------- | ---- | -----------
resourceId | integer | Expedia ID for this resource. Generated when created. Generated on POST, required on PUT
roomTypeFeatured | boolean | Used to pick the room image to be displayed when multiple are loaded for a given room type

- <a name="/definitions/ApiError"></a>ApiError

Property Name | Type | Description
------------- | ---- | -----------
code | integer | 
message | string | 

- <a name="/definitions/Image"></a>Image

Property Name | Type | Description
------------- | ---- | -----------
categoryCode | string | Image category code
comments | Array[[Comment](#/definitions/Comment)] | Comments associated with this image
lastUpdateDateTime | string | Last moment this image was updated
originalImageUrl | string | URL of the image to be uploaded
propertyFeatured | boolean | Determines whether or not the image should be the featured image in search results
publishedImageUrl | string | The published derivative image URL
resourceId | string | Expedia ID for this resource. Generated when created. Generated on POST, required on PUT
roomTypes | Array[[RoomType](#/definitions/RoomType)] | Rooms associated with this image
state | string | Current processing state of the image
status | string | Status of the image; Allowed values are: 'Active' (image displayed), 'Inactive' (image not displayed)

- <a name="/definitions/ImageList"></a>ImageList

Property Name | Type | Description
------------- | ---- | -----------
images | Array[[Image](#/definitions/Image)] | 



## Enumerations & Domain Values

<a name="/definitions/ErrorCodes"></a>
### Error Codes
| HTTP Status Code | Error Code | Error Description | Explanation and Recommended Action |
| ---------------- | ---------- | ----------------- | ---------------------------------- |
| 404 | 2404 | Not Found | Resource not found. |

