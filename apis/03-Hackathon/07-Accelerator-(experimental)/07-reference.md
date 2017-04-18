# Reference
View, add, update and delete variable margins for hotels over specific date ranges.

## Retrieve Variable Margins
### Return variable margins under hotel id provided.

- Method: `GET`
- Url: https://services.expediapartnercentral.com/accelerator/v1/hotels/{hotelId}/variablemargins
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
hotelId | path | Hotel ID | true | integer |

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [inline_model](#/definitions/inline_model)

---

## Add Variable Margins
### Add a variable margin.
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

## Update Variable Margins
### Update an existing variable margin.

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

## Delete Variable Margins
### Delete variable margins under hotelid.

- Method: `DELETE`
- Url: https://services.expediapartnercentral.com/accelerator/v1/hotels/{hotelId}/variablemargins
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
hotelId | path | Hotel ID | true | integer |

#### Potential Error Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | #/definitions/undefined

### Delete a specific variable margin.

- Method: `DELETE`
- Url: https://services.expediapartnercentral.com/accelerator/v1/hotels/{hotelId}/variablemargins/{variablemarginId}
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
hotelId | path | Hotel ID | true | integer | 
variablemarginId | path | variablemarginId ID | true | integer |

#### Potential Error Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | #/definitions/undefined

---

## Variable Margins Change History
### Get variable margin change history for a hotel id
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
