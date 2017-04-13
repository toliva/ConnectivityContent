# Reference
View, update and delete variable margins for hotels over specific date ranges.

## variablemarginss
### Deletes variablemargins under hotelid.
Delete variablemargins

- Method: `DELETE`
- Url: https://services.expediapartnercentral.com/accelerator/v1/hotels/{hotelId}/variablemargins
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
hotelId | path | Hotel ID | true | integer | 
Client-ID | header | Client ID | true | string | 
User-ID | header | User ID | true | integer | 

#### Potential Error Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | #/definitions/undefined

### Deletes one specified variablemargin.
Delete one specified variablemargin

- Method: `DELETE`
- Url: https://services.expediapartnercentral.com/accelerator/v1/hotels/{hotelId}/variablemargins/{variablemarginId}
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
hotelId | path | Hotel ID | true | integer | 
variablemarginId | path | variablemarginId ID | true | integer | 
Client-ID | header | Client ID | true | string | 
User-ID | header | User ID | true | integer | 

#### Potential Error Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | #/definitions/undefined

---

## variablemargins
### Return variablemargins under hotel id provided.
Get variablemargins

- Method: `GET`
- Url: https://services.expediapartnercentral.com/accelerator/v1/hotels/{hotelId}/variablemargins
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
hotelId | path | Hotel ID | true | integer | 
Client-ID | header | Client ID | true | string | 

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [inline_model](#/definitions/inline_model)

### Update an existing variablemargin.
Update variablemargin

- Method: `PUT`
- Url: https://services.expediapartnercentral.com/accelerator/v1/hotels/{hotelId}/variablemargins/{variablemarginId}
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
Content-Type | header | Request Content Type | true | integer | 
body | body | Request Payload | true | [inline_model_2](#/definitions/inline_model_2) | 
hotelId | path | Hotel ID | true | integer | 
variablemarginId | path | variablemarginId ID | true | integer | 
Client-ID | header | Client ID | true | string | 
User-ID | header | User ID | true | integer | 

**Examples**
```
{
  "VariableMarginID": 0,
  "StartDate": "string",
  "EndDate": "string",
  "VariableMarginPercentage": 0
}
```

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [inline_model_3](#/definitions/inline_model_3)

---

## variablemargin
### Add a variablemargin.
Add variablemargin

- Method: `POST`
- Url: https://services.expediapartnercentral.com/accelerator/v1/hotels/{hotelId}/variablemargins
- Consumes: `application/json`
- Produces: `*/*`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
Content-Type | header | Request Content Type | true | integer | 
body | body | Request Payload | true | [inline_model_0](#/definitions/inline_model_0) | 
hotelId | path | Hotel ID | true | integer | 
Client-ID | header | Client ID | true | string | 
User-ID | header | User ID | true | integer | 

**Examples**
```
{
  "StartDate": "string",
  "EndDate": "string",
  "VariableMarginPercentage": 0
}
```

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
201 | Created | [inline_model_1](#/definitions/inline_model_1)

---

## variablemarginsChangeHistory
### Get variablemargin change history for a hotel id
Get variablemargin change history

- Method: `GET`
- Url: https://services.expediapartnercentral.com/accelerator/v1/hotels/{hotelId}/variablemarginchangehistory
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
hotelId | path | Hotel ID | true | integer | 
startDate | query | startDate | false | string | 
endDate | query | endDate | false | string | 
Client-ID | header | Client ID | true | string | 

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [inline_model_4](#/definitions/inline_model_4)

---

## Definitions
- <a name="/definitions/inline_model"></a>inline_model

Property Name | Type | Description
------------- | ---- | -----------
HotelID | integer | 
VariableMargins | Array[object] | 

- <a name="/definitions/inline_model_0"></a>inline_model_0

Property Name | Type | Description
------------- | ---- | -----------
StartDate | string | 
EndDate | string | 
VariableMarginPercentage | integer | 

- <a name="/definitions/inline_model_1"></a>inline_model_1

Property Name | Type | Description
------------- | ---- | -----------
HotelID | integer | 
VariableMargins | Array[object] | 

- <a name="/definitions/inline_model_2"></a>inline_model_2

Property Name | Type | Description
------------- | ---- | -----------
VariableMarginID | integer | 
StartDate | string | 
EndDate | string | 
VariableMarginPercentage | integer | 

- <a name="/definitions/inline_model_3"></a>inline_model_3

Property Name | Type | Description
------------- | ---- | -----------
HotelID | integer | 
VariableMargins | Array[object] | 

- <a name="/definitions/inline_model_4"></a>inline_model_4

Property Name | Type | Description
------------- | ---- | -----------
HotelID | integer | 
VariableMarginActivationHistory | Array[object] | 
VariableMarginChangeHistory | object | 
