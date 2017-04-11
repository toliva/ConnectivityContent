# Reference
A service that provides APIs for ...

## hotel-status-controller
Hotel Status Controller

### getHotelVipStatus
- Method: `GET`
- Url: https://services.expediapartnercentral.com/v1/hotels/vipStatus
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
ids | query | ids | true | array |

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [ResponseEntity](#/definitions/ResponseEntity)

### getHotelVipStatus
- Method: `GET`
- Url: https://services.expediapartnercentral.com/v1/hotels/{id}/vipStatus
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
id | path | id | true | integer |

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [ResponseEntity](#/definitions/ResponseEntity)

---

## booking-guest-status-controller
Booking Guest Status Controller

### getGuestVipTierStatus
- Method: `GET`
- Url: https://services.expediapartnercentral.com/v1/bookings/guestVipStatus
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
ids | query | ids | true | array |

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [ResponseEntity](#/definitions/ResponseEntity)

### getGuestVipTierStatus
- Method: `GET`
- Url: https://services.expediapartnercentral.com/v1/bookings/{id}/guestVipStatus
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
id | path | id | true | integer | 

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [ResponseEntity](#/definitions/ResponseEntity)

---

## Definitions
- <a name="/definitions/ResponseEntity"></a>ResponseEntity

Property Name | Type | Description
------------- | ---- | -----------
body | object | 
statusCode | string | 
