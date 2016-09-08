# API Definition
The Promo API enables partners to create promotions in the Expedia marketplace. It complements the existing Expedia Partner Central (EPC) self-service promo tools and thus provides more flexibility and options for hoteliers to manage their offering on the Expedia marketplace.

## Authentication
Partner must include a valid username/password in the HTTP header of the request using the below format: 
```
Authorization: Basic {username and password encoded by Base64}
```
Example: 
```
Authorization: Basic RVFDdGVzdDEyOTMzODcwOndtNDdhaDky
```
Where "RVFDdGVzdDEyOTMzODcwOmV3NjduazMz" is the string "EQCtest12933870:ew67nk33" (username:password) Base64-encoded.

For more information about getting started for the first time, and authorization, please refer to the FAQ & Guides section.

## HTTP Headers

| Header | Type | Required | Input Format |
| ------ | ---- | -------- | ------------ |
| Authorization | String | Yes | Authorization: Basic {username: password encoded by Base64} |
| Content-Type | String | Yes for Promo Create and Modify. No for Promo Read | Content-Type: application/json |
| Accept | String | Yes | Accept: application/json |
| Request-ID | UUID | No | Tracking id used for troubleshooting purpose. If it is not provided in request, Promo API will generate one and return it in the response. |

## HTTPS Status Codes
The following HTTP status code may be returned by the Promo API.

| HTTP Status Code | Text |  Description |
| ---- | ------ | ----  |
| 200 | OK | Success. This code is returned after a promo score is successfully retrieved or after a promo is successfully modified. |
| 201 | Created | Created. This code is returned after a promo is successfully created. |
| 400 | Bad Request | Parsing error. The request was invalid or other client side error. Error code range (2001, 3999). |
| 401 | Unauthorized | Authentication error. Username/password was missing or invalid. Error code range (1001, 1099). |
| 403 | Forbidden | Authorization error. Username/password was not authorized to create promotion or username/password not associated with the hotel. Error code range (1100, 1999). |
| 409 | Conflict | Duplicate error. The same promo create request is sent more than once. Error code 3729 or 3730. |
| 500 | Internal Server Error | System error. Error code range (4000, 9999). |

----

##	Promo Create Operation
The Promo Create Operation supports two types of promotions.
- Promotion with percent (%) discount: applicable to any type of hotel/product.
- Promotion with amount ($) discount: only applicable to HotelCollect-only properties.

Each create request is for a single promotion. The API performs duplicate check based on all fields in the request. In other words if the same request is sent twice by the partner, the second request is considered a duplicate.

In case of a duplicate, the service returns an HTTP 409 (Conflict error) indicating a duplicate promotion already exists and the duplicate request is ignored. The service returns error code 3729 or 3730 in the response payload for duplicate request error. 

###	Request
The request is sent to the below endpoint:
https://services.expediapartnercentral.com/promotions/v1/hotels/{hotelid}/promos

The request consists of the full URL including the header and the payload. 

| JSON Field | Type | Required | Description |
| ---------- | ---- | -------- | ----------- |
| name | String | Yes | The promotion name can only include numbers and Latin letters. It has 80 characters limit including non-leading and trailing spaces. The promotion will be created in the Expedia system with the name provided by the partner, and this name will be returned in the booking message when the promotion is applied to the booking. |
| travelDateStart | Date | Yes | The travel start date during which the Promotion is in effect. It must be current or in the future. Accept date in ISO 8601 format: YYYY-MM-DD (e.g. 2014-09-16). |
| travelDateEnd | Date | Yes | The travel end date during which the Promotion is in effect. It must be later than the travel start date. Accept date in ISO 8601 format: YYYY-MM-DD (e.g. 2014-12-31). |
| bookDateTimeStart | DateTime | Yes | The start date and time when this promotion becomes available for booking. It must be current or in the future and cannot be later than the travel start date. Accept date time in the form of YYYY-MM-DDThh:mm:ss (e.g. 2014-09-16T00:00:00). Time portion is required. Promo API will return error code 3010 if the time portion is missing. The date time is in the hotel local time zone. Time zone offset is not accepted. Promo API will return error code 3010 (schema validation error) if the request contains time zone offset (e.g. 2014-09-16T18:00:00+02:00). |
| bookDateTimeEnd | DateTime | Yes | The end date and time when this promotion is no longer available for booking. It must be later than the effective start date and cannot be later than the travel end date. Accept date time in the form of YYYY-MM-DDThh:mm:ss (e.g. 2014-09-30T11:59:00). Same as for the bookDateTimeStart field: - Time portion is required. - Time zone offset is not allowed. |
| percent | positiveInteger | Yes | Used for percent (%) discount. The percentage discount applies to all nights of stay. The range must be between 10 and 75 inclusively, in increments of 1%. Request should contain either the percent field or the amount field, but not both at the same time. |
| amount | Decimal | No | Used for amount ($) discount. The amount discount applies to all nights of stay. The range must be between 1 and 12,000,000 inclusive. Limitation: amount discount can be used only by HotelCollect-only properties. Request should contain either the percent field or the amount field, but not both at the same time. |
| minLOS | positiveInteger | Yes | The minimum night(s) that guest must stay. The range must be between 1 and 4 inclusively. |
| minAdvBookDays | Int | No | The minimum days before a travel date that the booking can be made. Optional, if not provided, means bookings can be made up until check-in day, assuming other constraints are met. Value between 0 and 500. |
| mobileOnly | Boolean | Yes | Should this promotion only be displayed on mobile devices (available through smart phones and tablets) |
| RatePlan/id | String | Yes | The unique identifier for the rate plan. It must be numeric or numeric + 'A'. At least one rate plan ID for an active Expedia rate plan is required. Derived rate plan IDs should never be provided, as the promotion will always be attached to the parent. If a derived rate plan is provided, the promo will be created on the parent. If the same promo already exists on the parent, it will return an error.
| TravelDateBlackout/start & end | Date Accept 0 or more blackout start & end dates | Yes | Blackout period is defined by start and end dates. The blackout period must overlap with travel start and end dates. The blackout end date must be later than the blackout start date. In JSON format, use TravelDateBlackout: [] to indicate no blackout date for this promo. |

### Response
After the request is processed by the Promo API, a response is returned back synchronously to the partner. The response will contain an HTTP status code in the header and a response payload.

In case of a success, the service generates a unique identifier for the newly created promotion, which is returned in the response payload along with all other promotion parameters from the original request. The promotion status is set to Active by default. 

A promo score maybe returned in the response for the promotion with percent (%) discount. If the promotion is created successfully but the service is not able to obtain a score for the new promotion, the service will return a successful response without the score. For the moment no score is returned for the promotion with amount discount.

The service also returns a Request-ID in the response header for tracking and troubleshooting purposes. If a Request-ID is provided in the header of the original request, the same ID will be returned in the response header. Otherwise a new ID will be generated by the Promo API.

The response payload is described by the table below.

| JSON Field | Type |  Description |
| ---------- | ---- |  ----------- |
| Entity |  | A Promo object array in JSON format. In the XML format, All promo objects are a flat list under the root element “Response”. |
| id | Integer | Unique identifier for the promotion generated by the promo service. |
| status | StatusType | Promotion status. Always set to Active by the service for newly created promo. |
| name, ... |  | Echo back all other promo parameters from the original request. |
| score | Decimal | A score calculated by the promo service for the new promotion. The range is between 0.0 and 10.0 inclusively. This field is returned in the response only when the score is available. |

In case of a duplicate, the service generates an HTTP 409 (conflict error) and an error message that provides the duplicate promotion ID.

In case of error, the service generates an HTTP 4xx or 5xx in the response header and an error code and a detailed error message in the response payload. 

In case of a successful response, the service generates an HTTP 2xx in the response header and a payload containing the resource data being processed by the promo API. 

----


## Promo Score Preview
The Promo service allows partner to get a promo score prior to actually creating the promotion.

The request to get a promo score should be in the same format as the promo create request, plus the “preview” field set to true.

The service will perform the same validations on the preview request including duplicate check. But when the “preview” field is set to true, the service will return the promo score without creating the promotion. 

The range of the score returned by the service is between 0.0 and 10.0. The score represents how your promotion may perform based on our analysis of key attributes like discount level, booking window and length of stay restriction. A higher score means better promotion strength.

### Request 
The request is sent to the same endpoint as the promo create request. 

POST https://services.expediapartnercentral.com/promotions/v1/hotels/{hotel-id}/promos

The request contains the same header and same payload information plus one additional field.

| JSON Field | Type | Required | Description |
| ---------- | ---- | -------- | ----------- |
| promo  payload | See Promo create request above | yes | A full payload with the promotion information needs to be provided for a score preview request. The only difference is that an additional field, called preview, also needs to be provided. |
| preview | Boolean | No | When the value is set to true in the request, the service will try to retrieve a promo score without creating the promotion. Optional field. Default to false when it is not provided in the request. In this case the promotion will be created and a promo score, when available, will be returned as part of the response. |

### Response
When the promo score is available, it will be returned in the response along with other promo fields from the original request. For the moment promo score is only returned for promotions with percent (%) discount, not for promotions with amount discount.

In the preview mode, there is no promo ID returned in the response. If the request is successful, the service will return HTTP status code 200 in the response header. If the request does not pass validation, the service will return HTTP status code 4xx or 5xx in the response plus the relevant error codes and error messages.

| JSON Field | Type | Required | Description |
| ---------- | ---- | -------- | ----------- |
| score | Decimal | No | The promo score represents how your promotion may perform based on our analysis of the promo strength. The range is between 0.0 and 10.0 inclusively. This is a computed field that can be returned in the response to validate your promotion before it gets created. This field can also be returned after a promotion is created. |

----

## Promo Read Operation
The Promo Read operation allows partner to retrieve promotions created previously via the Promo API.

Partner can retrieve promotions by hotel ID to get all promotions for a given hotel, or by hotel ID and promo ID to get a specific promotion. 

Partner can add filter on promo status to get only active promotions. Partner can also indicate in the request if a promo score should be returned for each promotion retrieved. By default the promo score is not returned as part of the response. 

### Request
The promo GET request is sent to one of the following endpoints.

Retrieve list of promos by Hotel ID:
```HTML
GET https://services.expediapartnercentral.com/promotions/v1/hotels/{hotel-id}/promos
GET https://services.expediapartnercentral.com/promotions/v1/hotels/{hotel-id}/promos?activeOnly=true
GET https://services.expediapartnercentral.com/promotions/v1/hotels/{hotel-id}/promos?returnScore=true
GET https://services.expediapartnercentral.com/promotions/v1/hotels/{hotel-id}/promos?returnScore=true&activeOnly=true
```

Retrieve single promo by Hotel ID and Promo ID
```HTML
GET https://services.expediapartnercentral.com/promotions/v1/hotels/{hotel-id}/promos/{promo-id}
GET https://services.expediapartnercentral.com/promotions/v1/hotels/{hotel-id}/promos/{promo-id}?returnScore=true
```

Additionally user can specify the following query parameters in the URL:

| Query Param | Type | Required | Description |
| ---------- | ---- | -------- | ----------- |
| activeOnly | Boolean | No | When set to "true" it indicates the service should only return active promotions. "Active" promotion means its status is active and its book end date is not in the past (less than or equal to today -1 day). Optional, by default the service return both active and inactive promotions. This parameter is ignored when get promo by promo ID. |
| returnScore | Boolean | No | When set to "true" it indicates the service should return promo score in the response. Optional, by default the service does not return promo score in the response. |

### Response
The response will contain an HTTP status code in the header and a response payload. The HTTP status code indicates if the retrieval is successful, and the payload contains the list of promotions retrieved by the promo service.

The payload for a successful response may contain zero or more promo objects. The attributes of each promo object are described by the table below.

| JSON Field | Type | Description |
| ---------- | ---- | ----------- |
| Entity |  | A Promo object array in JSON format. |
| id | Integer | Promo ID. Unique identifier generated by the promo service for each promo. |
| status | StatusType | Promo status. Active or Inactive. |
| name | String | Promo name. Max 80 characters. |
| travelDateStart | Date | The travel start date during which the Promotion is in effect. Format YYYY-MM-DD (e.g. 2014-09-16). |
| travelDateEnd | Date | The travel end date during which the Promotion is in effect. Format YYYY-MM-DD (e.g. 2014-12-31). |
| bookDateTimeStart | DateTime | The start date and time when this promotion becomes available for booking. Format YYYY-MM-DDThh:mm:ss (e.g. 2014-09-16T00:00:00). |
| bookDateTimeEnd | DateTime | The end date and time when this promotion is no longer available for booking. Format YYYY-MM-DDThh:mm:ss (e.g. 2014-09-30T11:59:00). |
| percent | positiveInteger | Used for promo with percent (%) discount. Range between 10 and 75 inclusive. Either percent or amount discount is returned not both at the same time. |
| amount | Decimal | Used for promo with amount ($) discount. Range between 1 and 12,000,000 inclusive. Either the percent field or the amount field, but not both at the same time. |
| minLOS | positiveInteger | The minimum night(s) that guest must stay. Range between 1 and 4 inclusive. |
| minAdvBookDays | Int | The minimum days before arrival that the booking can be made. Range between 0 and 500 inclusive. |
| mobileOnly | Boolean | If this promotion is available only through mobile devices. |
| RatePlan/id | String. One or more rate plan ID(s) | Array of the rate plan IDs. At least one rate plan ID for an active Expedia rate plan is required.|
| TravelDateBlackout/start & end | Date 0 or more blackout periods | Array of blackout periods. An empty array indicates no blackout date for this promo. |
| score | Decimal | A promo score calculated by the promo service. Range between 0.0 and 10.0 inclusive.|

Retrieval scenario 1: hotel ID is valid
The promo read API will return HTTP status code 200 in the response header and the list of promotions created for the hotel in the response payload. 
If no promotion is created for the hotel, the service will return an empty array in the response payload.

Retrieval scenario 2: hotel ID is valid and promo ID is valid
The promo read API will return HTTP status code 200 in the response header and a single promotion in the response payload.

Retrieval scenario 3: hotel ID is invalid or promo ID is invalid
The promo read API will return HTTP status code 500 in the response header and an error message in the response payload.

----

## Promo Modify Operation
The Promo Modify Operation allows partner to modify a single promotion created previously via the Promo API.

Partner is required to provide the hotel ID and promo ID in the request URL. 

Partner is also required to send the full promo object in the modify request including the promo status which can be set to "Active" or "Inactive".

The modify request is processed as full overlay by the Promo API. No partial update is supported by the Promo API.

### Request
The request is sent to the below endpoint. 
PUT https://services.expediapartnercentral.com/promotions/v1/hotels/{hotel-id}/promos/{promo-id}

The payload should contain the same information as the payload for promo create, plus the "status" field. 

| JSON Field | Type | Required | Description |
| ---------- | ---- | -------- | ----------- |
| name | String | Yes | Promo name, same as in the promo create request. |
| status | StatusType | Yes | Promotion status. Accept "Active" or "Inactive". |
| travelDateStart | LocalDate | Yes | Travel start date, same as in the promo create request.
| …all other fields from the promo create request | … | … | … |

### Response
The response may contain an HTTP status code in the header and a response payload.

The same HTTP status codes defined for promo create are applicable to promo modify. 

A Request-ID is returned in the response header. If a Request-ID is provided in the header of the original request, the same ID will be returned. Otherwise a new ID will be generated by the Promo API and returned in the response header. The Request-ID is used for tracking and troubleshooting.

The response payload for promo modify is identical to what is defined above for promo create. 

----

## Error Codes
In case something is wrong, the Promo API will return an error response back to the partner.
The error response may contain a negative HTTP status code and one of the following error codes.

| HTTP Status Code | Error Code | Error Message |
| ---------------- | ---------- | ------------- |
| 400 | 2002 | Parsing error: {error detail} |
| 400 | 2010 | The namespace specified is invalid. {error detail} |
| 400 | 3010 | Validation against schema failed because a value exceeds its defined length, or the format is wrong, or another validation enforced by schema. {validation error detail} |
| 400 | 3701 | Hotel ID not found. You specified an invalid hotel ID. |
| 400 | 3702 | Hotel {hotel id} must be Active or Inactive, current status is {hotel status}.One of the following messages will be returned. - For Promo Create API: Hotel {hotel id} must be Active or Inactive for promo create, current status is {hotel status}. - For Promo Modify API: Hotel {hotel id} must be Active or Inactive for promo update. - For Promo Read API: Hotel {hotel id} must be Active or Inactive for promo read. |
| 400 | 3703 | The promo {promo id} does not exist. |
| 400 | 3704 | The promo {promo id} does not belong to hotel {hotel id}. |
| 400 | 3705 | The promo {promo id} has been deleted |
| 400 | 3707 | The travel start date {Travel start dateStart} must be current or in the future. |
| 400 | 3708 | The travel end date {Travel end dateEnd} cannot be earlier than the travel start date {travel start dateTravelDateStart}. |
| 400 | 3709 | The travel end date {travel end dateTravelDateEnd} cannot be later than two years (730 days). |
| 400 | 3710 | The book start date {book start dateDateTimeStart} must be current or in the future. |
| 400 | 3711 | The book end date {book end dateBookDateTimeEnd} cannot be earlier than the book start date {book start dateBookDateTimeStart}. |
| 400 | 3712 | The book end date {book end dateBookDateTimeEnd} cannot be later than two years (730 days) |
| 400 | 3713 | The travel start date {travel start dateTravelDateStart} cannot be prior to the book start date {book start dateBookDateTimeStart}. |
| 400 | 3714 | The book end date {book end dateBookDateTimeEnd} cannot be later than the travel end date {travel end dateTravelDateEnd}. |
| 400 | 3715 | The travel start date {travel start dateTravelStartDate} does not occur after {book start dateBookDateTimeStart  + minimum advance booking daysMinAdvBookDays} date. |
| 400 | 3716 | The effective booking window is less than a minute due to effective booking start date {book start dateBookDateTimeStart} is equal to effective booking end date {BookDateTimeEnd}. |
| 400 | 3717 | The restriction for blackout date is invalid and does not have any overlap with travel dates. TravelDateBlackout {TravelDatebBlackout} only can be between travel start date{dateTravelDateStart} and travel end date {dateTravelDateEnd}. |
| 400 | 3718 | The restriction for blackout date is incorrect that the blackout start date {dateBlackOutDateStart} is later than blackout end date {dateBlackOutDateEnd}. |
| 400 | 3719 | The promo name {promo name} must not contain the character {The first found invalid character}. |
| 400 | 3720 | The percent value {percent} must be a number with no more than two decimal places. |
| 400 | 3721 | The 100% free discount cannot apply to all nights. |
| 400 | 3722 | Request should contain either amount or percent discount. |
| 400 | 3723 | Request cannot contain both amount and percent discount at the same time. |
| 400 | 3724 | Amount discount can be used only by agency hotels. |
| 400 | 3725 | One of the following messages will be returned. For Promo Create API:  The promo cannot be created due to invalid travel window, the travel start date {travel start date} does not occur before {book end date + maximum advance booking days} date. For Promo Modify API:  Invalid travel window, the travel start date {tTravel Sstart dDate} does not occur before { Bbook end Ddate TimeEnd + Mmaximum advance booking daysaxAdvBookDays} date. |
| 400 | 3726 | Rate Plan status is not Active. |
| 400 | 3727 | Hotel ID or Rate Plan Id is invalid. |
| 400 | 3728 | There are no active rate plans in your request. |
| 400 | 3729 | An identical promotion was already created on {creation date}: promotion ID {promo id}. No changes were made. |
| 400 | 3730 | Request is ignored because an identical request has been received. Please avoid sending duplicate promo requests at the same time. |
| 400 | 3731 | Updating on this promotion is in process. |
| 400 | 3732 | The travel end date {travel end date} must be current or in the future. |
| 400 | 3733 | The book end date {book end date}must be current or in the future. |
| 400 | 3740 | Rate Plan {rate plan Id} doesn't belong to hotel {hotel Id}. |
| 400 | 3741 | Invalid travel window, one of the following messages will be returned. The travel start date {0} does not occur after {1} date. Travel end date shouldn't be earlier than travel start date, the travel end date is {0} and the travel start date is {1}. The travel start date {0} shouldn't be after {1}. The travel end date {0} shouldn't be after {1}. The travel end date {0} is before the end of the booking window, the effective booking end date is {1}. The travel start date {0} is before when the promo can be available for booking, the effective booking start date is {1}. The travel end date is in the past and before when promo can be available for booking, the effective booking start date is {0}. |
| 400 | 3742 | Invalid booking window, one of the following messages will be returned. The effective booking window is incorrect due to effective booking start date {0} is later than effective booking end date {1}. The effective booking window is less than a minute due to effective booking start date and time {0} is equal to effective booking end date and time {1}. The effective booking start date {0} is beyond maximum advance purchase window of 2 years. The effective booking end date {0} is beyond maximum advance purchase window of 2 years. The effective booking end date cannot be in the past.  |
| 400 | 3743 | Invalid blackout date, one of the following messages will be returned. The promo cannot be edited as the restriction for black out date is incorrect. The blackout start date {0} is later than blackout end date {1}. The promo cannot be edited as the blackout start date is {0}, it must occur on or before {1}. The promo cannot be edited as the blackout end date is {0}, it must occur on or before {1}. The promo cannot be edited as the restriction for black out start date {0} is in the past. The promo cannot be edited as the restriction is invalid and does not have any overlap with travel dates, the blackout dates are {0} to {1} and travel dates are {2} to {3}. The blackout start date {0} shouldn't be in the past. The blackout start date {0} shouldn't be after blackout end date {1}. The blackout start date {0} should occur on or before {1}. The blackout end date {0} should occur on or before {1}. The blackout start date {0} shouldn't be in the past. No overlap between the blackout date range from {0} to {1} and travel date range from {2} to {3}. |
| 400 | 3744 | The promo {promo -id} is NOT supported in Promo API. Only basic promo is supported. |
| 400 | 3745 | The promo {promo -id} cannot be retrieved since it is NOT created by Promo API. |
| 400 | 3746 | The promo {promo id} cannot be modified since it is NOT created by Promo API. |
| 400 | 3747 | Date ranges of blackout must not overlap |
| 401 | 1001 | Authentication error: invalid username or password. |
| 401 | 1002 | Authentication error: username and password is not found in HTTP header. Please set the Authorization header for HTTP basic authentication. |
| 403 | 1101 | The promo cannot be created as the user: {user name} is not associated with the hotel {hotel id}. |
| 403 | 1102 | The promo cannot be created due to user:{user name} doesn't has permission to create. |
| 409 | 3729 | An identical promotion was already created on {creation date}: promotion ID {promo-id}. No changes were made. |
| 409 | 3730 | Request is ignored because an identical request has been received. Please avoid sending duplicate promo requests at the same time. |
| 409 | 3731 | Updating on this promotion is in process. |
| 500 | 4000 | Internal system error, please try again in a few minutes. |
| 500 | 4100 | Internal System Error. Do not retry this request. Our support team was notified of the problem. |
